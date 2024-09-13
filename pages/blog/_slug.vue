<template>
  <div>
    <blog-single-section :section-data="blogSingleSectionData" :navigation-data="blogNavigationData" />
    <FeedbackSection :section-data="sectionData"/>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import BlogSingleSection from "~/components/section/BlogSingleSection";
import FeedbackSection from '~/components/section/FeedbackSection';

export default {
  name: "BlogSinglePage",
  components: { BlogSingleSection, FeedbackSection },
  async asyncData({ $api, route, error, store }) {
    let blogSingleSectionData = {};
    try {
      blogSingleSectionData = await $api.sectionService.getBlogBySlug(route.params.slug);
    } catch (e) {
      error({ statusCode: 404, message: 'Post not found' })
    }
    const blogNavigationData = $api.sectionService.getNavData(route);
    const bookSectionData = store.state.layout.sectionData.bookSectionData;
    const contactSectionsData = store.state.layout.sectionData.contactSectionData;
    const instaSectionData = store.state.layout.sectionData.instaSectionData;
    const sectionData ={
      instaSectionData,
      contactSectionsData,
      bookSectionData
    };

    return { blogSingleSectionData, blogNavigationData, sectionData };
  },
  head() {
      return {
        title: this.blogSingleSectionData?.Meta?.title || 'LandingPad',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.blogSingleSectionData?.Meta?.description || 'LandingPad'
          }
        ]
      }
  },
  mounted() {
    this.setHeaderColor("dark");
  },
  methods: {
    ...mapMutations({
      setHeaderColor: "layout/setHeaderColor"
    })
  }
};
</script>

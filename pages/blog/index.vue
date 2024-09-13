<template>
  <div class="page-blog">
    <blog-page-section :section-data="blogPageSectionData" :navigation-data="blogNavigationData"/>
    <FeedbackSection :section-data="sectionData" />
  </div>
</template>

<script>
import {mapMutations} from "vuex";
import BlogPageSection from "~/components/section/BlogPageSection";
import FeedbackSection from '~/components/section/FeedbackSection';

export default {
  name: "BlogPage",
  components: { BlogPageSection,FeedbackSection },
  async asyncData({$api, route, store}) {
    const blogPageSectionData = $api.sectionService.getBlogPageSection();
    const redirectTo = 'blog/';
    const blogList = await $api.sectionService.getBlogList();
    const blogMetaData = await $api.sectionService.getBlogMetaSection();
    const blogNavigationData = $api.sectionService.getNavData(route)
    const bookSectionData = store.state.layout.sectionData.bookSectionData;
    const contactSectionsData = store.state.layout.sectionData.contactSectionData;
    const instaSectionData = store.state.layout.sectionData.instaSectionData;
    blogList.map((x)=>{
      x.redirectTo = redirectTo
      return x
    })
    blogPageSectionData.list = blogList;
    const sectionData ={
      instaSectionData,
      contactSectionsData,
      bookSectionData
    }

    return { blogNavigationData, blogPageSectionData, blogMetaData, sectionData };
  },
  head() {
    return {
      title: this.blogMetaData?.Meta?.title || 'LandingPad',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.blogMetaData?.Meta?.description || 'LandingPad'
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


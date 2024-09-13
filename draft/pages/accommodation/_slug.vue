<!--<template>-->
<!--  <div>-->
<!--    <accommodation-single-section :section-data="accommodationSingleSectionData"-->
<!--                                  :navigation-data="accommodationNavigationData"/>-->
<!--    <feedback-section :section-data="sectionData"/>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import { mapMutations } from 'vuex';-->
<!--import AccommodationSingleSection from '~/components/section/BlogSingleSection';-->
<!--import FeedbackSection from '~/components/section/FeedbackSection';-->

<!--export default {-->
<!--  name: 'AccommodationSinglePage',-->
<!--  components: { AccommodationSingleSection, FeedbackSection },-->
<!--  async asyncData ({ $api, route, error, store }) {-->
<!--    let accommodationSingleSectionData = {};-->
<!--    try {-->
<!--      accommodationSingleSectionData = await $api.sectionService.getAccommodationBySlug(route.params.slug);-->
<!--    } catch (e) {-->
<!--      error({ statusCode: 404, message: 'Post not found' });-->
<!--    }-->
<!--    const accommodationNavigationData = $api.sectionService.getNavData(route);-->
<!--    const bookSectionData = store.state.layout.sectionData.bookSectionData;-->
<!--    const contactSectionsData = store.state.layout.sectionData.contactSectionData;-->
<!--    const instaSectionData = store.state.layout.sectionData.instaSectionData;-->
<!--    const sectionData = {-->
<!--      instaSectionData,-->
<!--      contactSectionsData,-->
<!--      bookSectionData,-->
<!--    };-->

<!--    return { accommodationSingleSectionData, accommodationNavigationData, sectionData };-->
<!--  },-->
<!--  head () {-->
<!--    return {-->
<!--      title: this.accommodationSingleSectionData?.Meta?.title || 'LandingPad',-->
<!--      meta: [-->
<!--        {-->
<!--          hid: 'description',-->
<!--          name: 'description',-->
<!--          content: this.accommodationSingleSectionData?.Meta?.description || 'LandingPad',-->
<!--        },-->
<!--      ],-->
<!--    }-->
<!--  },-->
<!--  mounted () {-->
<!--    this.setHeaderColor('dark');-->
<!--  },-->
<!--  methods: {-->
<!--    ...mapMutations({-->
<!--      setHeaderColor: 'layout/setHeaderColor',-->
<!--    }),-->
<!--  },-->
<!--}-->
<!--</script>-->

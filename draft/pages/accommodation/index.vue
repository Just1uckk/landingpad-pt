<!--<template>-->
<!--  <div class="page-blog">-->
<!--    <accommodation-page-section :section-data="accommodationPageSectionData" :navigation-data="accommodationNavigationData"/>-->
<!--    <feedback-section :section-data="sectionData"/>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import {mapMutations} from "vuex";-->
<!--import AccommodationPageSection from "~/components/section/BlogPageSection";-->
<!--import FeedbackSection from '~/components/section/FeedbackSection';-->

<!--export default {-->
<!--  name: 'AccommodationPage',-->
<!--  components: { AccommodationPageSection, FeedbackSection},-->
<!--  async asyncData({$api, route, store}) {-->
<!--    const accommodationPageSectionData = await $api.sectionService.getAccommodationPageSection();-->
<!--    const redirectTo = 'accommodation/';-->
<!--    const accommodationList = await $api.sectionService.getAccommodationList();-->
<!--    const accommodationMetaData = await $api.sectionService.getAccommodationMetaSection();-->
<!--    const accommodationNavigationData = $api.sectionService.getNavData(route);-->
<!--    const bookSectionData = store.state.layout.sectionData.bookSectionData;-->
<!--    const contactSectionsData = store.state.layout.sectionData.contactSectionData;-->
<!--    const instaSectionData = store.state.layout.sectionData.instaSectionData;-->
<!--    accommodationList.map((x)=>{-->
<!--      x.redirectTo = redirectTo-->
<!--      return x-->
<!--    });-->
<!--    accommodationPageSectionData.list = accommodationList;-->
<!--    const sectionData ={-->
<!--      instaSectionData,-->
<!--      contactSectionsData,-->
<!--      bookSectionData-->
<!--    };-->

<!--    return { accommodationNavigationData, accommodationPageSectionData, accommodationMetaData, sectionData };-->
<!--  },-->
<!--  head() {-->
<!--    return {-->
<!--      title: this.accommodationMetaData?.Meta?.title || 'LandingPad',-->
<!--      meta: [-->
<!--        {-->
<!--          hid: 'description',-->
<!--          name: 'description',-->
<!--          content: this.accommodationMetaData?.Meta?.description || 'LandingPad'-->
<!--        }-->
<!--      ]-->
<!--    }-->
<!--  },-->
<!--  mounted() {-->
<!--    this.setHeaderColor("dark");-->
<!--  },-->
<!--  methods: {-->
<!--    ...mapMutations({-->
<!--      setHeaderColor: "layout/setHeaderColor"-->
<!--    })-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->

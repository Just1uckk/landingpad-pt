<template>
  <div class="services-page">
    <services-single-section :init-id-active-element="initIdActiveElement"
                             :section-data="servicesSectionData"
                             :navigation-data="blogNavigationData"/>
    <feedback-section :section-data="sectionData"/>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
import FeedbackSection from '~/components/section/FeedbackSection';
import ServicesSingleSection from "~/components/section/ServicesSingleSection";

export default {
  name: 'SingleServicePage',
  components: {ServicesSingleSection, FeedbackSection },
  async asyncData({$api, route, error, store}) {
    let servicesSectionData = {};
    const servicesList = await $api.sectionService.getServicesList();
    try {
      servicesSectionData = await $api.sectionService.getServiceById(route.params.id);
    } catch (e) {
      error({ statusCode: 404, message: 'Post not found' })
    }
    const bookSectionData = store.state.layout.sectionData.bookSectionData;
    const contactSectionsData = store.state.layout.sectionData.contactSectionData;
    const instaSectionData = store.state.layout.sectionData.instaSectionData;
    const secondaryServicesSectionData = await $api.sectionService.getServicesSection();
    const blogNavigationData = $api.sectionService.getNavData(route);
    servicesSectionData.navList = servicesList;
    servicesSectionData.questionButtonText = secondaryServicesSectionData.questionButtonText;
    const sectionData ={
      instaSectionData,
      contactSectionsData,
      bookSectionData
    };

    return { servicesSectionData, blogNavigationData, sectionData };
  },
  head() {
    return {
      title: this.servicesSectionData?.Meta?.title || 'LandingPad',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.servicesSectionData?.Meta?.description || 'LandingPad'
        }
      ]
    }
  },
  computed: {
    initIdActiveElement() {
      return Number(this.$route.query.open_service_id) || Number(this.servicesSectionData.services_lists[0]?.id);
    }
  },
  mounted() {
    this.setHeaderColor('dark')
  },
  methods: {
    ...mapMutations({
      setHeaderColor: 'layout/setHeaderColor'
    })
  }
}
</script>

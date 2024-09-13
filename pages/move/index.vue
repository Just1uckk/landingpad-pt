<template>
  <div>
    <service-intro-section :section-data="pageData.intro" />
    <services-section
      :section-data="pageData.services"
      :services-list="servicesList"
    />
  </div>
</template>
  
  <script>
import ServiceIntroSection from '~/components/section/ServiceIntroSection'
import ServicesSection from '~/components/section/ServicesSection'
import { THEMES } from '~/constants/Themes'

export default {
  name: 'ServiceMove',
  theme: THEMES.DEFAULT,

  components: {
    ServicesSection,
    ServiceIntroSection,
  },
  layout: 'ServiceLayout',

  async asyncData({ $api, error }) {
    let pageData
    let servicesList = []

    try {
      pageData = await $api.pageService.getMovePage()
      servicesList = await $api.sectionService.getServicesList()
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
    return {
      pageData,
      servicesList,
    }
  },
  head() {
    return {
      title: this.pageData?.meta?.title || 'LandingPad',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.pageData?.meta?.description || 'LandingPad',
        },
      ],
    }
  },
}
</script>
  
  
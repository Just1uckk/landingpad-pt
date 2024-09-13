<template>
  <div>
    <service-intro-section :section-data="pageData.intro" />
    <apartments-section
      :section-data="pageData.services"
      :apartment-list="apartmentData.apartment_order"
      apartment-slug="rent"
    />
  </div>
</template>
  
  <script>
import ServiceIntroSection from '~/components/section/ServiceIntroSection'
import ApartmentsSection from '~/components/section/ApartmentsSection'
import { THEMES } from '~/constants/Themes'

export default {
  name: 'ServiceRent',
  theme: THEMES.LIME,

  components: {
    ServiceIntroSection,
    ApartmentsSection,
  },
  layout: 'ServiceLayout',

  async asyncData({ $api, error }) {
    let pageData
    let apartmentData

    try {
      pageData = await $api.pageService.getRentPage()
      apartmentData = await $api.sectionService.getApartmentsBySlug('rent')
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }

    return {
      pageData,
      apartmentData,
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
  
  
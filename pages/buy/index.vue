<template>
  <div>
    <service-intro-section :section-data="pageData.intro" />
    <service-description-section :description-data="pageData.description" />
    <apartments-section
      :section-data="pageData.services"
      :apartment-list="apartmentData.apartment_order"
      apartment-slug="buy"
    />
  </div>
</template>
  
  <script>
import ApartmentsSection from '~/components/section/ApartmentsSection'
import ServiceIntroSection from '~/components/section/ServiceIntroSection'
import ServiceDescriptionSection from '~/components/section/ServiceDescriptionSection'
import { THEMES } from '~/constants/Themes'

export default {
  name: 'ServiceBuy',
  theme: THEMES.PURPLE,

  components: {
    ApartmentsSection,
    ServiceIntroSection,
    ServiceDescriptionSection,
  },
  layout: 'ServiceLayout',

  async asyncData({ $api, error }) {
    let pageData
    let apartmentData

    try {
      pageData = await $api.pageService.getBuyPage()
      apartmentData = await $api.sectionService.getApartmentsBySlug('buy')
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

<style lang="scss" scoped>
::v-deep {
  .service-description {
    padding-bottom: 0;
  }
}
</style>>
  
  
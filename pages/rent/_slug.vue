<template>
  <ApartmentSinglePage :single-page-data = "pageData"/>
</template>

<script>

import ApartmentSinglePage from '~/components/apartment/ApartmentSinglePage.vue'
import {THEMES} from "~/constants/Themes";

export default {
  name: "RentSinglePage",
  components: {ApartmentSinglePage},
  theme: THEMES.LIME,
  async asyncData({$api, route, error}) {
    let pageData = {};
    try {
      pageData = await $api.pageService.getApartmentBySlug(route.params.slug);
    } catch (e) {
      error({statusCode: 404, message: 'Post not found'})
    }

    return {pageData};
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



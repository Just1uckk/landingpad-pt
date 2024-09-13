<template>
  <div class="container">
    <section class="apartment row">
      <ApartmentsSlider class="col-md-12 col-xxl-6 " :image-list="singlePageData.images"/>
      <ApartmentInfo class="col-md-12 col-xxl-6 " :info="singlePageData"/>
    </section>
    <ApartmentFeatures v-if="singlePageData.feature.length" :features-list="singlePageData.feature"/>
    <GoogleMap :lng="singlePageData.lng" :lat="singlePageData.lat" :address="singlePageData.address"/>
    <feedback-section :section-data="feedbackData"/>
    <portal-target name="destination"/>
  </div>
</template>
<script>
import {mapMutations, mapState} from "vuex";
import ApartmentFeatures from '~/components/apartment/ApartmentFeatures.vue'
import ApartmentsSlider from '~/components/apartment/ApartmentsSlider.vue'
import ApartmentInfo from '~/components/apartment/ApartmentInfo.vue'
import FeedbackSection from '~/components/section/FeedbackSection.vue';
import GoogleMap from '~/components/apartment/GoogleMap.vue'

export default {
  name: 'ApartmentSinglePage',
  components: {
    ApartmentFeatures, ApartmentsSlider, ApartmentInfo, FeedbackSection, GoogleMap
  },
  props: {
    singlePageData: {
      type: Object,
      required: true,

    }
  },
  computed: {
    ...mapState({
      bookSectionData: (state) => state.layout.sectionData.bookSectionData,
      contactSectionsData: (state) =>
        state.layout.sectionData.contactSectionData,
      instaSectionData: (state) => state.layout.sectionData.instaSectionData,
    }),

    feedbackData() {
      return {
        bookSectionData: this.bookSectionData,
        contactSectionsData: this.contactSectionsData,
        instaSectionData: this.instaSectionData,
      }
    },
  },

  mounted() {
    this.setHeaderColor("dark");
  },
  methods: {
    ...mapMutations({
      setHeaderColor: "layout/setHeaderColor"
    })
  }
}
</script>

<style lang="scss" scoped>
.apartment {
  padding: 108px 0 64px;
}
</style>

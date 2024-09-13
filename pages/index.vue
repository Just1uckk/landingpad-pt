<template>
  <div>
    <home-intro-section
      :section-data="introCards"
      :service-cards="introCards.intro_cards"
    />

    <story-section :section-data="storySectionData" />

    <reviews-section :reviews-list="reviewsList" />

    <team-section :section-data="teamSectionData" :team-list="teamListData" />

    <feedback-section :section-data="feedbackData" />
    <seo-list-section :section-data="seoListData" />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import HomeIntroSection from '~/components/section/HomeIntroSection'
import ReviewsSection from '~/components/section/ReviewsSection'
import StorySection from '~/components/section/StorySection'
import TeamSection from '~/components/section/TeamSection'
import FeedbackSection from '~/components/section/FeedbackSection'
import SeoListSection from '~/components/section/SeoListSection'

export default {
  name: 'Index',
  components: {
    SeoListSection,
    FeedbackSection,
    TeamSection,
    StorySection,
    ReviewsSection,
    HomeIntroSection,
  },
  async asyncData({ $api, error }) {
    let introCards = {}
    let reviewsList = {}
    try {
      introCards = await $api.pageService.getIntroCards()
      reviewsList = await $api.sectionService.getReviewsList()
    } catch (e) {
      error({ statusCode: 404, message: 'Post not found' })
    }
    return { introCards, reviewsList }
  },
  head() {
    return {
      title: this.introCards.Meta?.title || 'LandingPad',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.introCards.Meta?.description || 'LandingPad',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      storySectionData: (state) => state.layout.sectionData.storySectionData,
      teamSectionData: (state) => state.layout.sectionData.teamSectionData,
      teamListData: (state) => state.layout.sectionData.teamListDataByGroup,
      seoListData: (state) => state.layout.sectionData.seoSectionData,

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
    this.setHeaderColor('white')
  },
  methods: {
    ...mapMutations({
      setHeaderColor: 'layout/setHeaderColor',
    }),
  },
}
</script>
<style  lang="scss" scoped>
::v-deep {
  .team-section {
    margin-top: 0 !important;
  }

}
</style>


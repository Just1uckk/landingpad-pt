<template>
  <default-layout :nav-list="navList">
    <nuxt />
    <story-section :section-data="storySectionData" />
    <team-section :section-data="teamSectionData" :team-list="teamListData" />
    <feedback-section :section-data="feedbackData" />
  </default-layout>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import DefaultLayout from '~/layouts/default.vue'
import StorySection from '~/components/section/StorySection'
import TeamSection from '~/components/section/TeamSection'
import FeedbackSection from '~/components/section/FeedbackSection'
import { navigationList } from '~/constants/NavigationList'

export default {
  name: 'ServiceLayout',
  components: {
    DefaultLayout,
    FeedbackSection,
    TeamSection,
    StorySection,
  },
  data() {
    return {
      navList: navigationList(true),
    }
  },
  computed: {
    ...mapState({
      storySectionData: (state) => state.layout.sectionData.storySectionData,
      teamSectionData: (state) => state.layout.sectionData.teamSectionData,
      teamListData: (state) => state.layout.sectionData.teamListDataByGroup,

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
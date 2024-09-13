<template>
  <div id="feedback" class="feedback-section">
    <contact-section :section-data="sectionData.contactSectionsData"/>
    <book-section :section-data="sectionData.bookSectionData"/>
    <insta-feed-section :section-data="sectionData.instaSectionData"/>
  </div>
</template>

<script>
import contactSection from '~/components/section/ContactSection'
import bookSection from '~/components/section/BookSection'
import instaFeedSection from '~/components/section/InstaFeedSection'

export default {
  name: 'FeedbackSection',
  components: { contactSection, bookSection, instaFeedSection },
  props: {
    sectionData: {
      type: Object,
      required: true
    }
  },
}
</script>

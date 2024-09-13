<template>
  <div id="contact" class="contact-section" v-if="contactList.length">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <section-info :title-text="sectionData.title"
                        :tag="'div'"
                        icon-position="right" />
        </div>
      </div>
      <div class="row justify-content-center">
        <div v-for="contact in contactList" :key="contact.id" class="col-md-4 col-lg-3">
          <contact-card :contact="contact" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sections } from '~/mixins/sections'
import ContactCard from '~/components/card/ContactCard'

export default {
  name: 'ContactSection',
  components: { ContactCard },
  mixins: [sections],
  computed: {
    contactList() {
      const contact = [
        {
          id: 1,
          icon: 'LocationMarkerSvg',
          address: 'Rua Professor Machado Macedo 1A 1300-609, Lisboa, Portugal',
          addressLink: 'https://maps.app.goo.gl/myRBZLgPF9Kc1X7z8',
        },
        {
          id: 2,
          icon: 'EmailSvg',
          email: this.sectionData.email
        },
        {
          id: 3,
          icon: 'PhoneSvg',
          phone: this.sectionData.phone
        },
        {
          id: 4,
          icon: 'SocialSvg',
          socialList: [
            { id: 1, icon: require('assets/images/icon/contact/instagram.svg'), link: this.sectionData.instagram },
            { id: 3, icon: require('assets/images/icon/contact/facebook.svg'), link: this.sectionData.facebook },
            { id: 2, icon: require('assets/images/icon/contact/linkedin.svg'), link: this.sectionData.linkedin }
          ]
        }
      ]
      const contactData = []
      contact.forEach(x => {
        if (x.email || x.phone || x.address || (x.socialList && !x.socialList.every(elem => !elem.link))) {
          contactData.push(x)
        }
      })
      return contactData
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-section {
  padding: 20px 0 80px;
}
</style>

<template>
  <div :id="cardBodyId" class="contact-card">
    <div class="contact-card-header">
      <app-icon :component-name="contact.icon" />
    </div>
    <div class="contact-card-body">
      <a v-if="contact.email" :href="mailLink" class="contact-card__link">{{
          contact.email
        }}</a>
      <a v-if="contact.phone" :href="phoneLink" class="contact-card__link">{{
          contact.phone
        }}</a>
      <a v-if="contact.address" :href="contact.addressLink" target="_blank" class="contact-card__address">{{
          contact.address
        }}</a>
      <ul v-if="contact.socialList" class="contact-card-social-list">
        <li v-for="social in socialList" :key="social.id">
          <a :href="social.link" target="_blank" rel="noopener noreferrer">
            <img :src="social.icon" alt="social icon" />
            <social-decor />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SocialDecor from '~/components/svg/SocialDecor'
import AppIcon from '~/components/UI/AppIcon'

export default {
  name: 'ContactCard',
  components: { SocialDecor, AppIcon },
  props: {
    contact: {
      type: Object,
      required: true
    }
  },
  computed: {
    cardBodyId() {
      const responseKeys = Object.keys(this.contact)
      const responseKeysLength = responseKeys.length
      if (responseKeysLength !== 0) {
        return responseKeys[responseKeysLength - 1]
      } else {
        return null
      }
    },
    socialList() {
      const socialList = []
      this.contact.socialList.forEach((x) => {
        if (x.link) socialList.push(x)
      })
      return socialList
    },
    mailLink() {
      return `mailto:${this.contact.email}`
    },
    phoneLink() {
      return `tel:${this.contact.phone.replace(/[' ', '(', ')', '-']/gm, '')}`
    }
  }
}
</script>

<style lang="scss" scoped>
#address {
  .contact-card {
    &-body {
      padding-top: 12px;
    }
  }
}

.contact-card {
  position: relative;
  border-radius: 8px;
  background: $light;
  max-width: 300px;
  padding: 20px 20px 30px;
  margin: 0 auto 20px;

  &-header {
    text-align: center;
    margin-bottom: 12px;

    svg {
      width: 100%;
      max-width: 24px;
    }
  }

  &-body {
    border-top: 1px solid $primary-light;
    padding-top: 20px;
    text-align: center;
  }

  &-social-list {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      padding: 0 30px;
      @media (max-width: $xl) and (min-width: $md) {
        padding: 0 15px;
      }

      a {
        position: relative;

        &:hover {
          svg {
            opacity: 1;
            transform: scale(1);
          }
        }

        img {
          width: 100%;
          max-width: 20px;
        }

        svg {
          position: absolute;
          width: 18px;
          height: 10px;
          left: 0;
          bottom: -10px;
          stroke: $primary;
          opacity: 0;
          transform: scale(0);
          transform-origin: 50% 50%;
          transition: $transition-time-main;
        }
      }
    }
  }

  &__link {
    font-size: 1.125rem;
    color: $primary;
    @extend %decorLink;
  }

  &__address {
    font-size: 0.875rem;
    color: $primary;
    text-decoration: underline 0.1em transparent;
    transition: text-decoration-color 300ms;
    padding: 0 5px;
  }

  &__address:hover {
    text-decoration-color: $primary;
  }
}
</style>

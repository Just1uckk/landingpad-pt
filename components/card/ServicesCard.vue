<template>
  <div class="services-card">
    <div class="services-card-header">
      <div class="services-card__icon">
        <img :src="getFullImageUrl(service.icon.url)" alt="services icon" />
      </div>
      <h4 class="services-card__title">
        <nuxt-link :to="`/move/${service.slug}`">
          {{ service.title }}
        </nuxt-link>
      </h4>
    </div>
    <div class="services-card-body">
      <ul class="services-card-list">
        <li v-for="serviceItem in sortServicesLists" :key="serviceItem.id">
          <nuxt-link
            :to="`/move/${service.slug}?open_service_id=${serviceItem.id}`"
          >
            <span>{{ serviceItem.name }}</span>
            <arrow-right-svg />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ArrowRightSvg from '~/components/svg/ArrowRightSvg'
import { helperImage } from '~/mixins/helperImage'

export default {
  name: 'ServicesCard',
  components: { ArrowRightSvg },
  mixins: [helperImage],
  props: {
    service: {
      type: Object,
      required: true,
    },
  },
  computed: {
    sortServicesLists() {
      const lists = [...this.service.services_lists]
      return lists.sort((a, b) => a.id - b.id)
    },
  }
}
</script>

<style lang="scss" scoped>
.services-card {
  position: relative;
  background: $white;
  border-radius: 8px;
  box-shadow: $box-shadow-secondary;
  transition: 0.6s;
  height: 100%;

  &:hover {
    background: $primary;

    a {
      color: $white;
    }

    .services-card-body {
      &::before {
        background: $white;
      }
    }

    .services-card-list {
      li {
        a {
          svg {
            fill: $white;
          }
        }
      }
    }

    .services-card__title {
      color: $white;
    }
  }

  a {
    color: $dark;
    transition: $transition-time-main;
  }

  &-header {
    display: flex;
    align-items: center;
    padding: 20px 20px 18px;

    @media (min-width: $sm) {
      padding: 26px 20px 24px;
    }
  }

  &-body {
    position: relative;
    padding: 30px 17px 50px;

    @media (min-width: $sm) {
      padding: 24px 17px 60px;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 17px;
      right: 17px;
      height: 1px;
      background: $primary;
      transition: $transition-time-main;
    }
  }

  &-list {
    li {
      margin-bottom: 20px;

      &:last-of-type {
        margin-bottom: 0;
      }

      a {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &:hover,
        &:focus-visible {
          svg {
            transform: scale(1.4);
          }

          span {
            &:before {
              left: 0;
              right: 0;
              opacity: 1;
            }
          }
        }

        span {
          position: relative;

          &:before {
            content: '';
            position: absolute;
            left: 50%;
            right: 50%;
            bottom: -2px;
            opacity: 0;
            border-bottom: 1px solid;
            border-color: inherit;
            transition: $transition-time-main;
            transition-property: left, right, opacity;
          }
        }

        svg {
          fill: $dark;
          width: 12px;
          height: 8px;
          margin-left: 20px;
          transition: $transition-time-main;
        }
      }
    }
  }

  &__title {
    color: $dark;
    transition: $transition-time-main;
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: $light;
    border-radius: 8px;
    margin-right: 15px;

    img {
      max-width: 30px;
    }
  }

  &__title {
    font-size: 1rem;
    margin-bottom: 0;
    @media (min-width: $sm) {
      font-size: 1.25rem;
    }
  }
}
</style>

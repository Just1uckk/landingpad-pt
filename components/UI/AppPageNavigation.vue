<template>
  <div class="page-navigation">
    <div class="page-navigation-item page-navigation-item--chain hide-class-chain">
      <div v-for="(data,index) in navigationData.chain" :key="data.id">
        <nuxt-link v-if="index !== navigationData.chain.length - 1 && data.to !== '/services'" :to="data.to" class="unActive">
          <arrow-left-svg v-if="data.text !== 'Home Page'" />
          <div  class="custom-link">
            {{data.text}}
          </div>
        </nuxt-link>
        <nuxt-link v-if="index !== navigationData.chain.length - 1 && data.to === '/services'" :to="'/#services'" class="unActive">
          <arrow-left-svg v-if="data.text !== 'Home Page'" />
          <div  class="custom-link">
            {{data.text}}
          </div>
        </nuxt-link>
        <div v-if="index === navigationData.chain.length - 1" class="active-link">
          <arrow-left-svg/>
          <div  class="active">
            {{data.text}}
          </div>
        </div>
      </div>
    </div>
    <div class="page-navigation-item page-navigation-item--back hide-class-back">
      <nuxt-link :to="navigationData.back.to">
        <arrow-left-svg /> {{navigationData.back.text}}
      </nuxt-link>
    </div>
    <div v-if="navigationData.next" class="page-navigation-item page-navigation-item--next">
      <nuxt-link :to="navigationData.next.to">
        {{navigationData.next.text}} <arrow-right-svg />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  import ArrowLeftSvg from "~/components/svg/ArrowLeftSvg";
  import ArrowRightSvg from "~/components/svg/ArrowRightSvg";
  export default {
    name: 'AppPageNavigation',
    components: {ArrowRightSvg, ArrowLeftSvg},
    props: {
      navigationData: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
.page-navigation {
  display: flex;
  align-items: center;

  &-item {

    .active-link,a {
      display: flex;
      color: $dark;
      align-items: center;
      font-size: 1rem;

      svg {
        position: relative;
        width: 8px;
        height: 16px;
        fill: $dark;
        transition: $transition-time-main;
      }
    }

    &--chain {
      display: inline-flex;

      @media (max-width: $sm) {
        display: none;
      }

      .active {
        color: $primary;
        font-weight: 500;
      }

      .unActive {
        color: #838383;
      }

      .custom-link {
        @extend %decorLink;
      }

      .active-link,a {
        margin-right: 14px;

        svg {
          left: 0;
          margin-right: 12px;
          width: 5px;
        }

        &:hover,
        &:focus-visible {

        }
      }
    }

    &--back {

      @media (min-width: $sm) {
        display: none;
      }

      .active-link,a {
        color: $primary;
        font-weight: 500;

        svg {
          left: 0;
          margin-right: 12px;
        }

        &:hover,
        &:focus-visible {

          svg {
            left: -10px;
          }
        }
      }
    }

    &--next {
      margin-left: auto;

      .active-link,a {

        svg {
          right: 0;
          margin-left: 12px;
        }

        &:hover,
        &:focus-visible {

          svg {
            right: -10px;
          }
        }
      }
    }
  }
}
</style>

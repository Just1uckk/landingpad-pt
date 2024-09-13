<template>
  <section id="home-intro" class="home-intro">
    <div class="container justify-content-center">
      <div class="home-intro__inner">
        <div class="col-12 intro-context">
          <h1 class="home-intro__title">
            {{ sectionData.title }}
          </h1>
          <p class="home-intro__description">
            {{ sectionData.description }}
          </p>
        </div>
        <div class="row card-wrapper">
          <IntroServiceCard
            v-for="card in serviceCards"
            :key="card.id"
            :title="card.title"
            :description="card.description"
            :path="card.path"
            :primary-color="THEMES_TYPE[card.theme]"
          />
        </div>
      </div>
    </div>
    <div class="home-intro-background" :style="homeIntroStyled"></div>
  </section>
</template>

<script>
import { helperImage } from '~/mixins/helperImage'
import IntroServiceCard from '~/components/card/IntroServiceCard.vue'
import { THEMES_TYPE } from '~/constants/Themes'

export default {
  name: 'HomeIntro',
  components: { IntroServiceCard },
  mixins: [helperImage],
  props: {
    serviceCards: {
      type: Array,
      required: true,
    },
    sectionData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      THEMES_TYPE,
    }
  },
  computed: {
    homeIntroStyled() {
      return {
        backgroundImage: `url(${this.getFullImageUrl(
          this.sectionData.backgroundImage.url
        )})`,
      }
    },
  },
}
</script>

<style lang="scss">
.card-wrapper {
  margin-top: 100px;
  padding: 15px;
  @media (max-width: $md) {
    margin-top: 54px;
  }
}

.home-intro {
  min-height: 100vh;
  color: $white;
  padding-top: 140px;

  @media (min-width: $lg) {
    padding-top: 160px;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .container {
    display: flex;
    align-items: center;
    min-height: 100%;
  }

  &__title {
    font-weight: bold;
    font-size: 2.021rem;
    margin: 0 auto 16px;
    text-align: start;

    @media (min-width: $sm) {
      font-size: 3.375rem;
      margin-bottom: 10px;
      text-align: center;
      max-width: 550px;
      line-height: 72px;
    }
  }

  &__description {
    font-size: 1.125rem;
    margin: 0 auto;
    text-align: start;
    font-weight: 400;
    max-width: 808px;
    line-height: 29px;
    @media (min-width: $sm) {
      font-size: 1.5rem;
      max-width: 800px;
      text-align: center;
    }
  }

  .btn {
    margin: 0 auto;
    @media (max-width: $sm) {
      width: 100%;
      padding: 14px;
    }
  }

  &-background {
    @extend %posABS;
    z-index: -5;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;

    @media (min-width: $lg) {
      background-attachment: fixed;
    }

    &::before {
      content: '';
      @extend %posABS;
      background: rgba(#000, 0.35);
      z-index: 5;
    }

  }

}
</style>

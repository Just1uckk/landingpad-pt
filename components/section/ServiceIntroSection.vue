<template>
  <section id="service-intro" class="service-intro">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mx-auto">
          <h1 class="service-intro__title">{{ sectionData.title }}</h1>
          <p class="service-intro__subtitle">{{ sectionData.subtitle }}</p>
          <p class="service-intro__description">
            {{ sectionData.description }}
          </p>
          <nuxt-link to="#book" class="btn btn-primary">{{
            sectionData.button
          }}</nuxt-link>
        </div>
      </div>
    </div>
    <div class="service-intro-background">
      <img
        :src="getFullImageUrl(sectionData.background.url)"
        alt="service intro background image"
      />
    </div>
  </section>
</template>

<script>
import { sections } from '~/mixins/sections'
import { helperImage } from '~/mixins/helperImage'

export default {
  name: 'ServiceIntroSection',
  mixins: [sections, helperImage],
}
</script>

<style lang="scss" scoped>
.service-intro {
  height: 100vh;
  color: $white;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
  }

  &__title {
    font-weight: bold;
    font-size: 6rem;
    line-height: 6rem;
    margin-bottom: 16px;
    text-transform: uppercase;
    opacity: 0.5;

    @media (min-width: $sm) {
      font-size: 8rem;
      line-height: 8rem;
      margin-bottom: 10px;
    }

    @media (min-width: $md) {
      font-size: 12rem;
      line-height: 12rem;
    }

    @media (min-width: $lg) {
      font-size: 18.75rem;
      line-height: 18rem;
    }
  }

  &__subtitle {
    font-weight: bold;
    font-size: 2.021rem;
    margin-bottom: 16px;

    @media (min-width: $sm) {
      font-size: 3.375rem;
      margin-bottom: 10px;
    }
  }

  &__description {
    font-size: 1.125rem;
    margin: 0 auto 40px;

    @media (min-width: $sm) {
      font-size: 1.5rem;
      max-width: 434px;
    }
  }

  .btn {
    @media (max-width: $sm) {
      width: 100%;
      padding: 14px;
    }
  }

  &-background {
    @extend %posABS;
    z-index: -5;

    &::before {
      content: '';
      @extend %posABS;
      background: rgba(#000, 0.44);
      z-index: 5;
    }

    img {
      @extend %posABS;
      @extend %img;
    }
  }
}
</style>

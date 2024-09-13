<template>
  <section class="seo-section">
    <div class="seo-section__background">
      <img :src="getFullImageUrl(sectionData.seo.prevImage.url)" alt="seo background image">
    </div>
    <div class="seo-section__title">
      <h1 class="seo-section__title__text">{{ sectionData.seo.pageTitle }}</h1>
    </div>
    <div class="seo-section__navbar d-lg-block d-none">
      <dropdown-nav :navigation-links="navigationLinks"/>
    </div>
    <div class="seo-section__body">
      <seo-body :section-data="sectionData" :navigation-data="navigationData"/>
    </div>
  </section>
</template>

<script>
import { sections } from '~/mixins/sections';
import { helperImage } from '~/mixins/helperImage';
import DropdownNav from '~/components/seo/DropdownNav';
import SeoBody from '~/components/seo/SeoBody';

export default {
  name: 'SeoPageSection',
  components: { SeoBody, DropdownNav },
  mixins: [sections, helperImage],
  props: {
    navigationData: {
      type: Object,
      required: true,
    },
    navigationLinks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.seo-section {
  overflow: unset;

  &__background {
    z-index: -5;
    position: relative;
    display: flex;

    &::before {
      content: '';
      background: rgba(#000000, .45);
      z-index: 5;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    img {
      width: 100%;
      z-index: -5;
      min-height: 200px;
      object-fit: cover;
    }
  }

  &__title {
    width: 100%;
    text-align: center;
    color: $white;
    height: 0;
    transform: translateY(-100px);

    @media (max-width: $md) {
      transform: translateY(-130px);
    }

    @media (max-width: $sm) {
      transform: translateY(-75px);
    }

    &__text {
      font-size: 2.021rem;
      font-weight: 700;
      padding-left: 5%;
      padding-right: 5%;

      @media (min-width: $sm) {
        font-size: 3.375rem;
      }
    }
  }

  &__navbar {
    background: #F2F6FF;
    padding-left: calc(4% + 20px);
    padding-right: calc(4% + 20px);
    display: flex;
    text-align: start;
  }

  &__body {
    padding-left: 4%;
    padding-right: 4%;
  }
}
</style>

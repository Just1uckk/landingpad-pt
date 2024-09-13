<template>
  <article v-if="sectionData.__component === 'seo-elements.action-call'" class="action-call">
    <div class="row p-xl-5 p-lg-4 p-md-3 p-sm-3 p-3">
      <div class="col action-call__text ">{{ sectionData.BlockText }}</div>
      <div class="col-12 col-md-5 col-lg-4 pt-3 pt-md-0 action-call__btn">
        <nuxt-link
          :to="{hash: '#book'}"
          class="btn btn-white">
          {{ sectionData.ButtonText }}
        </nuxt-link>
      </div>
    </div>
    <img src="~/assets/images/contact-us.png" alt="background help find"
         class="action-call__background">
  </article>
</template>

<script>
import { sections } from '~/mixins/sections';
import { convertData } from '~/mixins/convertData';

export default {
  name: 'ActionCall',
  mixins: [sections, convertData],
};
</script>

<style lang="scss" scoped>
.action-call {
  position: relative;
  border-radius: 11px;
  overflow: hidden;
  margin: 32px 0;

  &:before {
    content: '';
    @extend %posABS;
    background: $primary-opacity-80;
    z-index: -2;
  }

  &__background {
    position: absolute;
    background-size: cover;
    height: 100%;
    z-index: -5;
    top: 0;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;

    .btn {
      height: 50px;
    }
  }

  &__text {
    font-size: 2rem;
    font-weight: 500;
    line-height: 42px;
    color: #FFFFFF;
    @media (max-width: $lg) {
      font-size: 1.75rem;
    }
    @media (max-width: $md) {
      text-align: center;
    }
  }
}
</style>

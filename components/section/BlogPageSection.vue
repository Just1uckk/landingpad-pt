<template>
  <section class="blog-page-section">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-5">
          <app-page-navigation :navigation-data="navigationData" class="mb-4"/>
          <section-info
            :title-text="sectionData.title"
            :introduction-text="sectionData.introduction"
            tag="h1"
            icon-position="right"
            size="mini"
          />
        </div>
      </div>
      <blog-list v-if="sectionData.list.length" :list="sectionData.list"/>
      <p v-else class="empty-blog">Coming soon</p>
    </div>
    <div class="blog-page-section__background-decor"></div>
  </section>
</template>

<script>
import { sections } from '~/mixins/sections'
import BlogList from '~/components/blog/BlogList'
import AppPageNavigation from "~/components/UI/AppPageNavigation";

export default {
  name: 'BlogPageSection',
  components: {AppPageNavigation, BlogList },
  mixins: [sections],
  props: {
    navigationData: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.blog-page-section {
  padding: 100px 0 60px;

  @media (min-width: $sm) {
    padding: 120px 0 60px;
  }

  &__background-decor {
    @include circleDecor(65px, 380px, 380px, -40px, auto, -60px);

    @media (max-width: $sm) {
      width: 160px;
      height: 160px;
      top: 50%;
      transform: translateY(-50%);
      filter: blur(50px);
      left: -20px;
    }
  }
}
</style>

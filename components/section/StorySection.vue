<template>
  <div id="story" class="story-section">
    <div class="container">
      <div class="row">
        <div class="col-sm-11 col-lg-9 text-center mx-auto">
          <section-info :title-text="sectionData.title"
                        icon-position="right"
                        icon-color="white"/>
          <div class="story-section__description" v-html="convertMarkdownToHtml(sectionData.description)"></div>
        </div>
      </div>
    </div>
    <div class="story-section__background">
      <img :src="getFullImageUrl(sectionData.backgroundImage.url)" alt="story background image">
    </div>
  </div>
</template>

<script>
import {sections} from "~/mixins/sections";
import {helperImage} from "~/mixins/helperImage";
import {convertData} from "~/mixins/convertData";

export default {
  name: 'StorySection',
  mixins: [sections, helperImage, convertData],
}
</script>

<style lang="scss" scoped>
.story-section {
  padding: 80px 0;
  position: relative;

  @media (min-width: $sm) {
    padding: 100px 0;
  }

  ::v-deep {

    .section-info {
      margin-bottom: 10px;

      @media (min-width: $sm) {
        margin-bottom: 20px;
      }

      .section-title {

        &__text {
          color: $white;
        }
      }
    }

    .story-section__description {
      color: $white;
      font-weight: 500;
      font-size: 1.125rem;

      p {
        margin-bottom: 20px;

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }

  &__background {
    @extend %posABS;
    z-index: -2;

    &::before {
      content: '';
      @extend %posABS;
      background: rgba(#000, .4);
      z-index: 2;
    }

    img {
      @extend %posABS;
      @extend %img;
    }
  }
}
</style>

<template>
  <section class="blog-single-section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <app-page-navigation :navigation-data="navigationData" />
          <h1 class="blog-single-section__title">{{ sectionData.title }}</h1>
          <time class="blog-single-section__date">
            {{ convertTimeStampToUSFormat(sectionData.date || sectionData.created_at) }}
          </time>
          <figure class="blog-single-section__preview">
            <img v-if="previewImageUrl" :src="previewImageUrl" class="blog-card-prev__img" alt="blog image"/>
            <ImagePlaceholderSvg v-else class="blog-card-prev__placeholder" />
          </figure>
          <div class="blog-single-section__description" v-html="convertMarkdownToHtml(sectionData.description)"></div>
        </div>
      </div>
    </div>
    <div class="blog-single-section__background-decor"></div>
  </section>
</template>

<script>
import { helperImage } from "~/mixins/helperImage";
import { sections } from "~/mixins/sections";
import { convertData } from "~/mixins/convertData";
import AppPageNavigation from "~/components/UI/AppPageNavigation";
import ImagePlaceholderSvg from "~/components/svg/ImagePlaceholderSvg";

export default {
  name: "BlogSingleSection",
  components: { AppPageNavigation, ImagePlaceholderSvg },
  mixins: [sections, helperImage, convertData],
  props: {
    navigationData: {
      type: Object,
      required: true
    }
  },
  computed: {
    previewImageUrl() {
      return this.sectionData?.prevImage?.url && this.getFullImageUrl(this.sectionData.prevImage.url);
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-single-section {
  padding: 100px 0 60px;

  @media (min-width: $sm) {
    padding: 120px 0 60px;
  }

  &__title {
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 20px;

    @media (min-width: $md) {
      font-size: 2.4rem;
      font-weight: bold;
    }

    @media (min-width: $lg) {
      font-size: 3.375rem;
      font-weight: bold;
    }
  }

  &__date {
    display: block;
    color: $gray-400;
    margin-bottom: 20px;
  }

  &__preview {
    position: relative;
    width: 100%;
    margin: 0 0 24px 0;
    border-radius: 8px;
    overflow: hidden;
    padding-top: 70%;
    background-color: $gray-600;

    @media (min-width: $md) {
      padding-top: 360/1216 * 100%;
    }

    svg {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      height: 50%;
      fill: $gray-400
    }

    img {
      @extend %posABS;
      @extend %img;
    }


  }

  &__description {

    ::v-deep {
      h2{
        font-size: 2rem;
      }

      a {
        color: $primary;
        @extend %decorLink;
      }

      p {
        font-size: 1.25rem;
        margin-bottom: 25px;
      }

      ul, ol {
        padding-left: 15px;
        margin-bottom: 25px;

        li {
          margin-bottom: 10px;
          font-size: 1.125rem;
        }
      }

      ul {
        li {
          position: relative;

          &:before {
            content: '';
            width: 6px;
            height: 6px;
            background: $dark;
            position: absolute;
            border-radius: 100%;
            top: 7px;
            left: -15px;
          }
        }
      }

      img {
        @extend %img;
        max-width: 100%;
        border-radius: 8px;
      }
    }
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

  ::v-deep {

    .page-navigation {
      margin-bottom: 40px;
    }
  }
}
</style>

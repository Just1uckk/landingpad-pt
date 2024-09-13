<template>
  <nuxt-link :to="{path: singleBlogLink}" :title="blog.title" class="blog-card">
    <div class="blog-card-prev">
      <img v-if="previewImageUrl" :src="previewImageUrl" class="blog-card-prev__img" alt="blog image">
      <ImagePlaceholderSvg v-else class="blog-card-prev__placeholder" />
    </div>
    <div class="blog-card-body">
      <h3 class="blog-card__title">
        <!--        <nuxt-link :to="singleBlogLink" :title="blog.title">-->
        {{ blog.title }}
        <!--        </nuxt-link>-->
      </h3>
      <time class="blog-card__date" :datetime="blog.date">
        {{ convertTimeStampToUSFormat(blog.date || blog.created_at) }}
      </time>
      <div class="blog-card__summary">
        {{ blog.summary }}
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { helperImage } from "~/mixins/helperImage";
import { convertData } from "~/mixins/convertData";
import ImagePlaceholderSvg from "~/components/svg/ImagePlaceholderSvg";

export default {
  name: "BlogCard",
  components: { ImagePlaceholderSvg },
  mixins: [helperImage, convertData],
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  computed: {
    singleBlogLink() {
      return this.blog.redirectTo + this.blog.slug;
    },
    previewImageUrl() {
      return this.blog?.prevImage?.url && this.getFullImageUrl(this.blog.prevImage.url);
    }
  },
};
</script>

<style lang="scss" scoped>
.blog-card {
  display: block;
  width: 100%;
  padding: 16px;
  background: $white;
  border-radius: 8px;
  box-shadow: $box-shadow-primary;


  &-prev {
    position: relative;
    width: 100%;
    margin-bottom: 15px;
    padding-top: 70%;
    border-radius: 8px;
    overflow: hidden;
    background-color: $gray-600;

    @media (min-width: $md) {
      padding-top: 360/1216 * 100%;
    }

    &__img {
      @extend %posABS;
      @extend %img;
      transition: $transition-time-main;
    }

    &__placeholder {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      height: 50%;
      fill: $gray-400;
      transition: $transition-time-main;
    }

    &:hover {
      img {
        transform: scale(1.05);
      }

      svg {
        transform: translate(-50%, -50%) scale(1.05);
      }
    }
  }

  &__title {
    font-size: 1.125rem;
    margin-bottom: 8px;
    color: $dark;
    transition: $transition-time-main;

    @media (min-width: $sm) {
      font-size: 1.5rem;
    }

    &:hover,
    &:focus {
      color: $primary;
      outline: none;
    }

  }

  &__date {
    display: block;
    color: $gray-400;
    margin-bottom: 15px;
  }

  &__summary {
    color: $dark;
  }
}
</style>

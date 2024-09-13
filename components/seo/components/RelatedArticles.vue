<template>
  <article v-if="sectionData.__component === 'seo-elements.related-articles' && sectionData.articles.length"
           class="related-articles">
    <h2>{{ sectionData.title }}</h2>
    <div class="row m-0">
      <div v-for="article in sectionData.articles.slice(0,3)"
           :key="article.id"
           class="col-12 col-sm-4 p-xl-2 p-lg-1 p-md-1 p-sm-1 my-2 p-0 h-auto">
        <nuxt-link
          :to="`/${singleBlogLink(article)}`"
          class="p-3 p-md-2 p-sm-2 related-articles__card">
          <div class="related-articles__card__img">
            <img :src="previewImageUrl(article)" alt="prev image" class="related-articles__card">
          </div>
          <div class="related-articles__card__title">
            {{ article.title }}
          </div>
          <time class="related-articles__card__date">
            {{ convertTimeStampToUSFormat(article.date || article.created_at) }}
          </time>
          <div class="related-articles__card__summary">{{ article.summary }}</div>
        </nuxt-link>
      </div>
    </div>
  </article>
</template>

<script>
import { sections } from '~/mixins/sections';
import { convertData } from '~/mixins/convertData';
import { helperImage } from '~/mixins/helperImage';

export default {
  name: 'RelatedArticles',
  mixins: [sections, convertData, helperImage],
  computed: {
    singleBlogLink () {
      return (article) => {
        return 'blog/' + article.slug;
      };
    },
    previewImageUrl () {
      return (article) => {
        return article?.prevImage?.url && this.getFullImageUrl(article.prevImage.url);
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.related-articles {
  margin: 100px 0;

  &__card {
    background: #FFFFFF;
    box-shadow: 0px 3px 28px rgba(203, 203, 203, 0.25);
    border-radius: 8px;
    height: 100%;
    overflow: hidden;
    display: block;
    @media (max-width: $lg) {
      height: 350px;
    }
    @media (max-width: $sm) {
      max-height: 375px;
    }

    &__img {
      height: 175px;
      overflow: hidden;
      border-radius: 8px;
      @media (min-width: $md) and (max-width: $lg) {
        height: 130px;
      }
      @media (max-width: $md) {
        height: 120px;
      }
      @media (max-width: $sm) {
        height: 175px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: $transition-time-main;

        &:hover {
          transform: scale(1.1);
          cursor: pointer;
        }
      }
    }

    &__summary {
      padding-top: 10px;
      color: #454953;
      display: block;
      display: -webkit-box;
      max-width: 100%;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;

      &:hover {
        cursor: pointer;
        color: black;
      }
    }

    &__date {
      color: #B2B2B2;

      &:hover {
        cursor: pointer;
        color: grey;
      }
    }

    &__title {
      color: #0F38B4;
      font-weight: 500;
      font-size: 1.25rem;
      align-self: stretch;
      padding-top: 10px;
      display: block;
      display: -webkit-box;
      max-width: 100%;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 10px;

      &:hover {
        cursor: pointer;
        color: #2967F0;
      }
    }
  }

  h2 {
    font-size: 2rem;
  }
}
</style>

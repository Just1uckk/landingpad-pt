<template>
  <div class="seo-body">
    <app-page-navigation :navigation-data="navigationData"/>
    <div class="row m-0">
      <div v-if="sectionData.contentNav" class="col-3 seo-body__navigation d-none d-md-block">
        <div class="seo-body__navigation__card">
          <div class="seo-body__navigation__card__title">
            Contents
          </div>
          <div v-for="link in sectionData.contentNav" :key="link.id" :class="className(link)">
            <nuxt-link :to="{hash: link.id}">
              {{ link.text }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <div v-if="sectionData.PageComponents.length" class="col p-0">
        <div class="seo-body__section">
          <div v-for="block in sectionData.PageComponents" :key="block.TextBlock">
            <selected-text :section-data="block"/>
            <text-area :section-data="block"/>
            <action-call :section-data="block"/>
            <related-articles :section-data="block"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppPageNavigation from '~/components/UI/AppPageNavigation';
import { sections } from '~/mixins/sections';
import { convertData } from '~/mixins/convertData';
import TextArea from '~/components/seo/components/TextArea';
import SelectedText from '~/components/seo/components/SelectedText';
import ActionCall from '~/components/seo/components/ActionCall';
import RelatedArticles from '~/components/seo/components/RelatedArticles';

export default {
  name: 'SeoBody',
  components: { RelatedArticles, ActionCall, SelectedText, TextArea, AppPageNavigation },
  mixins: [sections, convertData],
  props: {
    navigationData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    className () {
      return (link) => {
        if (link.tag === 'h2') return 'seo-body__navigation__card__h2 passive-page-nav';
        else return 'seo-body__navigation__card__h3 passive-page-nav';
      };
    },
  },
  mounted () {
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const linkActive = document.querySelector('.active-page-nav');
          if (linkActive) {
            linkActive.classList.remove('active-page-nav');
          }
          const id = entry.target.getAttribute('id');
          const hashLink = `[href="/${this.$route.params.chapter}#${id}"]`;
          const newLink = document.querySelector(hashLink);
          if (newLink) {
            newLink.classList.add('active-page-nav');
          }
        }
      });
    }, { rootMargin: '0px 0px -80% 0px' });
    if (this.sectionData.contentNav) {
      this.sectionData.contentNav.forEach((x) => {
        const htmlTag = document.querySelector(`#${x.id}`);
        intersectionObserver.observe(htmlTag);
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.seo-body {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  @media (max-width: $sm) {
    padding-left: 0;
    padding-right: 0;
  }

  &__navigation {
    padding-left: 0;
    &__card {
      padding-bottom: 15px;
      width: 100%;
      border-radius: 11px;
      background: #FFFFFF;
      box-shadow: 0px -1px 28px rgba(203, 203, 203, 0.25);
      margin: 32px 0;
      position: sticky;
      top: 100px;

      &__h2 {
        padding-left: 20px;
        padding-top: 15px;
        font-weight: 500;
        text-decoration: none;
      }

      &__h3 {
        padding-left: 40px;
        padding-top: 15px;
      }

      &__title {
        background: #F2F6FF;
        color: #0F0F10;
        font-size: 1.25rem;
        font-weight: 500;
        padding-left: 24px;
        padding-top: 15px;
        padding-bottom: 15px;
      }
    }
  }
}
</style>

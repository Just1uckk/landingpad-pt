<template>
  <article
    v-if="sectionData.__component === 'seo-elements.text-area'"
    class="text-area"
    v-html="convertMarkdownToHtml(sectionData.TextBlock)"
  ></article>
</template>

<script>
import { sections } from '~/mixins/sections';
import { convertData } from '~/mixins/convertData';

export default {
  name: 'TextArea',
  mixins: [sections, convertData],
};
</script>

<style lang="scss" scoped>
.text-area {
  background: #FFFFFF;
  box-shadow: 0px -1px 28px rgba(203, 203, 203, 0.25);
  border-radius: 16px;
  padding: 48px;
  gap: 16px;
  margin: 32px 0;
  @media (min-width: $lg) and (max-width: $xl) {
    padding: 22px 48px;
  }
  @media (min-width: $md) and (max-width: $lg) {
    padding: 22px 35px;
  }
  @media (max-width: $sm) {
    padding: 12px 15px;
  }

  ::v-deep {
    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    a {
      color: $primary;
      @extend %decorLink;
    }

    p {
      font-size: 1rem;
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
</style>

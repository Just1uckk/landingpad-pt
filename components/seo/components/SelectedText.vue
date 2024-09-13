<template>
  <article
    v-if="sectionData.__component === 'seo-elements.selected-text'"
    class="selected-text"
    v-html="convertMarkdownToHtml(sectionData.TextBlock)"
  ></article>
</template>

<script>
import { sections } from '~/mixins/sections';
import { convertData } from '~/mixins/convertData';

export default {
  name: 'SelectedText',
  mixins: [sections, convertData],
};
</script>

<style lang="scss" scoped>
.selected-text {
  background: #F2F6FF;
  border: 1px solid #2967F0;
  border-radius: 16px;
  padding: 32px 48px;
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
    p {
      margin: 0;
      font-weight: 500;
      font-size: 1rem;
    }
  }
}
</style>

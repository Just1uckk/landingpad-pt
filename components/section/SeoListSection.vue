<template>
  <section>
    <div v-if="sectionData.length" class="row seo-list">
      <div v-for="li in sectionData" :key="li.id" class="seo-list__component my-2">
        <nuxt-link :to="li.slug" class="seo-list__component__text"> {{ li.name }}</nuxt-link>
        <div class="seo-list__component__svg">
          <externial-link-svg class="mx-2"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ExternialLinkSvg from '~/components/svg/ExternialLinkSvg';

export default {
  name: 'SeoListSection',
  components: { ExternialLinkSvg },
  props: {
    sectionData: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.seo-list {
  margin: 0 7%;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (min-width: $xxl) {
    margin: 0 10%;
  }
  @media (max-width: $md) {
    margin: 0 2%;
  }

  &__component {
    padding: 8px;
    display: inline-flex;
    background: #FFFFFF;
    box-shadow: 0px 3px 15px rgba(203, 203, 203, 0.15);
    border-radius: 4px;
    transition: .6s;

    &:hover {
      box-shadow: 0px 3px 15px rgba(45, 35, 35, 0.15);
      cursor: pointer;
    }

    &__text {
      color: #AEAEBA;
    }
  }
}
</style>

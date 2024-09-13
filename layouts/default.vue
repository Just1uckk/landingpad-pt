<template>
  <div class="host">
    <app-header :nav-list="navList" />
    <main>
      <nuxt v-if="!$slots.default" />
      <slot />
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '~/components/layout/AppHeader'
import AppFooter from '~/components/layout/AppFooter'

export default {
  name: 'Default',
  components: { AppHeader, AppFooter },
  props: {
    navList: {
      type: Array,
      required: false,
    },
  },
  head() {
    return {
      htmlAttrs: {
        class: this.themeClass,
      },
    }
  },
  computed: {
    themeClass() {
      const theme =
        this.$route.matched[0]?.components?.default?.options?.theme || 'default'
      return `${theme}-theme`
    },
  },
}
</script>


<template>
  <component :is="currentIcon" v-bind="$attrs" />
</template>

<script>
export default {
  name: 'AppIcon',
  props: {
    componentName: {
      type: String,
      required: true,
    },
  },

  computed: {
    currentIcon() {
      return () => import(`../svg/${this.componentName}.vue`)
    },
  },
}
</script>

<style lang="scss" scoped>
.icon-wrap {
  display: inline-block;

  ::v-deep svg {
    width: 100%;
  }
}

svg {
  color: $primary;
}
</style>

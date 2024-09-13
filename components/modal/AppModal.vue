<template>
  <transition name="fade">
    <div class="modal" :class="{ active: visible }">
      <div class="modal-background" @click="close"></div>
      <div class="modal-content">
        <slot></slot>
        <button class="modal-close" @click="close">
          <CloseSvg/>
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import CloseSvg from '~/components/svg/CloseSvg.vue'

export default {
  name: 'AppModal',
  components: {CloseSvg},
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped lang="scss">
@import "./index.scss";

</style>

<template>
  <div class="app-loader">
    <div class="app-loader-icon">
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
    <div class="app-loader__mask"></div>
  </div>
</template>

<script>
  export default {
    name: 'AppLoader'
  }
</script>

<style lang="scss" scoped>
.app-loader {
  @extend %posABS;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  &__mask {
    @extend %posABS;
    background: rgba($white, .9);
    z-index: 5;
  }

  &-icon {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    z-index: 10;

    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 8px solid $primary;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: $primary transparent transparent transparent;

      &:nth-child(1) {
        animation-delay: -0.45s;
      }

      &:nth-child(2) {
        animation-delay: -0.3s;
      }

      &:nth-child(3) {
        animation-delay: -0.15s;
      }
    }
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>

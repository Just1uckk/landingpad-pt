<template>
  <div class="carousel-control">
    <div class="carousel-control-arrows">
      <button class="carousel-control-arrows__button" @click="showPrevSlider">
        <arrow-left-svg/>
      </button>
      <button class="carousel-control-arrows__button" @click="showNextSlider">
        <arrow-right-svg/>
      </button>
    </div>
  </div>
</template>

<script>
  import ArrowLeftSvg from "~/components/svg/ArrowLeftSvg";
  import ArrowRightSvg from "~/components/svg/ArrowRightSvg";

  export default {
    name: 'CarouselControl',
    components: {ArrowRightSvg, ArrowLeftSvg},
    methods: {
      showPrevSlider() {
        this.$emit('showPrevSlider')
      },
      showNextSlider() {
        this.$emit('showNextSlider')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .carousel-control {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    @media (min-width: $lg) {
      left: -20px;
      right: -20px;
      align-items: center;
    }

    @media (min-width: $xl) {
      left: -10px;
      right: -10px;
    }

    @media (min-width: $xxl) {
      left: -50px;
      right: -50px;
    }

    &-arrows {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      width: 100%;

      @media (min-width: $lg) {
        justify-content: space-between;
        align-items: center;
      }

      &__button {
        position: relative;
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 5;
        border: none;
        background: transparent;
        cursor: pointer;
        outline: none;

        &:hover,
        &:focus-visible {

          svg {
            transform: scale(1.2);
            fill: $primary-light;
          }
        }

        svg {
          width: 24px;
          height: 14px;
          fill: $primary;
          transition: $transition-time-main;
        }
      }
    }
  }
</style>

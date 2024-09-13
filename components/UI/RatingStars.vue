<template>
  <div class="rating-stars">
    <div v-for="star in 5" :key="star" class="rating-stars__item">
      <star-svg />
    </div>
  </div>
</template>

<script>
  import StarSvg from "~/components/svg/StarSvg";
  export default {
    name: 'RatingStars',
    components: {StarSvg}
  }
</script>

<style lang="scss" scoped>
  .rating-stars {
    display: flex;

    &__item {
      margin-right: 5px;

      &:last-of-type {
        margin-right: 0;
      }

      svg {
        width: 13px;
        height: 13px;
        fill: $primary;
      }
    }
  }
</style>

<template>
  <div class="reviews-card">
    <div class="reviews-card-header">
      <div class="reviews-card__name">
        {{review.name}}
      </div>
      <div class="reviews-card-rating">
        <rating-stars />
      </div>
    </div>
    <div class="reviews-card-body">
      <div class="reviews-card__position">
        {{review.position}}
      </div>
      <p class="reviews-card__message">
        {{review.message}}
      </p>
    </div>
  </div>
</template>

<script>
  import RatingStars from "~/components/UI/RatingStars";
  export default {
    name: 'ReviewsCard',
    components: {RatingStars},
    props: {
      review: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .reviews-card {
    position: relative;
    background: $white;
    box-shadow: $box-shadow-secondary;
    padding: 16px 16px 16px 30px;
    border-radius: 8px;

    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;
    }

    &__name {
      position: relative;
      font-weight: 500;
      font-size: .875rem;
      margin-bottom: 5px;

      &::before {
        content: '';
        position: absolute;
        top: 45%;
        left: -12px;
        transform: translateY(-50%);
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: $primary-dark;
      }
    }

    &__position {
      font-size: .75rem;
      color: $gray;
      margin-bottom: 10px;
    }

    &__message {
      font-size: .875rem;
      margin-bottom: 0;
    }
  }
</style>

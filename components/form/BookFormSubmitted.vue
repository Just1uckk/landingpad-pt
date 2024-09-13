<template>
  <div class="book-form-submitted" :class="{'is-active': isActive}">
    <div class="row">
      <div class="col-12 book-form-submitted-col text-center">
        <send-svg class="book-form-submitted__icon"/>
        <div class="book-form-submitted__title">
          Fill in the information
        </div>
        <div class="book-form-submitted__description">
          Your request has been sent. Our manager will contact you soon
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SendSvg from "~/components/svg/SendSvg";

  export default {
    name: 'BookFormSubmitted',
    components: {SendSvg},
    props: {
      isActive: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .book-form-submitted {
    @extend %posABS;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $light;
    z-index: 10;
    color: $dark;
    pointer-events: none;
    opacity: 0;

    &.is-active {
      pointer-events: auto;
      opacity: 1;

      .book-form-submitted-col {
        transform: translateY(0);
      }

      .book-form-submitted__background {
        opacity: 1;
      }
    }

    &-col {
      transform: translateY(100%);
      transition: $transition-time-main;
      transition-duration: .6s;
    }

    &__icon {
      width: 50px;
      height: 50px;
      fill: $primary;
      margin-bottom: 16px;
    }

    &__title {
      font-weight: 500;
      font-size: 1.5rem;
      margin-bottom: 16px;
    }

    &__description {
      text-align: center;
      max-width: 290px;
      margin: 0 auto;
      font-size: 1.125rem;
    }
  }
</style>

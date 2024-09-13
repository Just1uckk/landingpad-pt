<template>
  <div class="help-find-card py-5 " :class="{'is-small': isSmall}">
    <h3 class="help-find-card__title">
      Didn't find the right service?
    </h3>
    <nuxt-link to="#book" class="btn btn-white">{{questionButtonText}}</nuxt-link>
    <img src="~/assets/images/help-find-background.jpg" alt="background help find" class="help-find-card__background">
  </div>
</template>

<script>
  export default {
    name: 'HelpFindCard',
    props: {
      isSmall: {
        type: Boolean,
        default: false
      },
      questionButtonText: {
        type: String,
        default: 'Ask a question'
      }
    }
  }
</script>

<style lang="scss" scoped>
.help-find-card {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 5;

  &.is-small {
    padding: 16px 24px;

    .help-find-card__title {
      font-size: 1.125rem;
      font-weight: normal;
      margin-bottom: 10px;
      max-width: none;
    }
  }

  &:before {
    content: '';
    @extend %posABS;
    background: $primary-opacity-80;
    z-index: -2;
  }

  &__title {
    font-size: 1.5rem;
    line-height: 2rem;
    color: $white;
    font-weight: 500;
    text-align: center;
    margin-bottom: 20px;
    max-width: 150px;
  }

  &__background {
    @extend %posABS;
    @extend %img;
    z-index: -5;
  }

  .btn {
    padding: 14px 50px;
    box-shadow: $box-shadow-primary;
  }
}
</style>

<template>
  <section class="not-found-section">
    <div class="not-found-text">
      <div class="section-info">
        <div class="section-title__text">Oops!</div>
        <title-section-decor class="section-title__decor"/>
      </div>
      <div class="section-description">
        <p class="section-description__text">It looks like something went wrong <br>
          Reload the page or return to the home screen</p>
      </div>
      <nuxt-link to="/#home-intro" class="btn btn-primary btn-book">Go to main page</nuxt-link>
    </div>
    <div class="not-found-intro-background">
      <picture>
        <source srcset="~/assets/images/not-found-mobile.png" media="(max-width: 576px)">
        <source srcset="~/assets/images/not-found.png">
        <img srcset="~/assets/images/not-found.png" alt="My default image">
      </picture>
    </div>
  </section>
</template>

<script>
import titleSectionDecor from "~/components/svg/TitleSectionDecor";

export default {
  name: 'NotFoundPage',
  components: {titleSectionDecor}
}
</script>

<style lang="scss" scoped>
.not-found-section {
  position: absolute;
  height: 100%;
  width: 100%;

  .not-found-text {
    text-align: center;
    width: 500px;
    margin: auto;
    margin-top: 15%;

    @media (min-width: $lg) and (max-width: $xl) {
      width: 32%;
    }

    @media (min-width: $md) and (max-width: $lg) {
      margin-top: 25%;
      width: 42%;
    }

    @media (min-width: $sm) and (max-width: $md) {
      margin-top: 30%;
      width: 55%;
    }

    @media (max-width: $sm) {
      margin-top: 40%;
      width: 65%;
    }

    .btn-book {
      margin-top: 15px;
      font-weight: 500;
      padding-left: 50px;
      padding-right: 50px;
      @media (max-width: $sm) {
        position: absolute;
        bottom: 5%;
        left: 7.5%;
        width: 85%;
      }
    }

    .section-info {
      position: relative;
      display: inline-flex;
      flex-direction: column;

      .section-title {
        position: relative;
        display: inline-flex;
        margin: 0 auto;

        &__text {
          font-size: 3.375rem;
          font-weight: 500;
          color: $white;
          @media (max-width: $sm) {
            font-size: 2rem;
          }
        }

        &__decor {
          position: absolute;
          top: -20px;
          left: -30px;
          width: 40px;
          height: 40px;
          stroke: $primary
        }
      }
    }

    .section-description__text {
      color: $white;
      font-size: 1.125rem;
      font-weight: lighter;
      margin-top: 15px;
      @media (max-width: $sm) {
        font-size: 1rem;
      }
    }
  }

  .not-found-intro-background {
    @extend %posABS;
    z-index: -5;

    &::before {
      content: '';
      @extend %posABS;
      background: rgba(#000, .5);
      z-index: 5;
    }

    img {
      @extend %posABS;
      @extend %img;
    }
  }
}


</style>

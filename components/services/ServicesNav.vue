<template>
  <nav class="services-nav">
    <h3 class="services-nav__title">{{title}}</h3>
    <ul class="services-nav-list">
      <li v-for="navItem in navList" :key="navItem.id">
        <nuxt-link :to="navItem.slug" class="services-nav-link">
          <div class="services-nav-link__icon">
            <img :src="getFullImageUrl(navItem.icon.url)" alt="nav item icon">
          </div>
          <span class="services-nav-link__text">{{navItem.title}}</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  import {helperImage} from "~/mixins/helperImage";

  export default {
    name: 'ServicesNav',
    mixins: [helperImage],
    props: {
      title: {
        type: String,
        default: 'Our services'
      },
      navList: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .services-nav {
    position: relative;
    padding: 20px 16px;
    background: $white;
    box-shadow: $box-shadow-primary;
    margin-bottom: 16px;

    &-list {
      li {
        margin-bottom: 10px;
      }
    }

    &-link {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 10px 16px;
      border-radius: 4px;
      background: $white;
      transition: $transition-time-main;

      &:hover,
      &.nuxt-link-active {
        background: $primary-dark;

        .services-nav-link__text {
          color: $white;
        }
      }

      &__icon {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        background: $white;
        border-radius: 2px;

        img {
          width: 100%;
          max-width: 100%;
        }
      }

      &__text {
        color: $dark;
        font-size: 1rem;
        font-weight: 500;
        transition: $transition-time-main;
      }
    }

    &__title {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 2rem;
      font-weight: normal;
    }
  }
</style>

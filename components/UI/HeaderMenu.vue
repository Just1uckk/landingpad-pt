<template>
  <div class="header-menu" :class="{'is-active': value}">
    <div class="header-menu-content">
      <header-nav :nav-list="navList" @onClickLink="closeMenu"/>
      <nuxt-link to="#book" class="btn btn-primary btn-book" @click.native="closeMenu">{{ textButtonBook }}</nuxt-link>
    </div>
    <div class="header-menu-mask" @click="closeMenu"></div>
  </div>
</template>

<script>
import HeaderNav from "~/components/UI/HeaderNav";

export default {
  name: 'HeaderMenu',
  components: {HeaderNav},
  props: {
    value: {
      type: Boolean,
      required: true
    },
    navList: {
      type: Array,
      required: true
    },
    textButtonBook: {
      type: String,
      default: 'Book an online'
    }
  },
  methods: {
    closeMenu() {
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.header-menu {
  @extend %posABS;
  position: fixed;
  transform: translateX(100%);
  transition: $transition-time-main;
  z-index: 10;

  @media (min-width: $lg) {
    display: none;
  }

  &.is-active {
    transform: translateX(0);

    .header-menu-mask {
      opacity: 1;
      transition: $transition-time-main;
      transition-delay: $transition-time-main;
    }
  }

  &-content {
    position: absolute;
    top: 0;
    right: 0;
    width: 80%;
    height: 100%;
    display: flex;
    padding: 40px 25px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: $white;
    z-index: 10;

    ::v-deep {

      .header-nav {

        &-list {
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: column;

          li {
            margin-bottom: 24px;

            &:last-of-type {
              margin-bottom: 0;
            }

            a {
              color: $dark;
              font-size: 1.5rem;

              &.nuxt-link-exact-active {
                color: $primary;
              }
            }

            .menu-button {
              color: $dark;
              font-size: 1.5rem;

              &__chevron {
                fill: $dark;
              }
            }
          }
        }
      }
    }

    .btn-book {
      position: absolute;
      left: 25px;
      bottom: 60px;
    }
  }

  &-mask {
    @extend %posABS;
    background: rgba(#000, .5);
    cursor: pointer;
    opacity: 0;
    transition-delay: 0s;
    transition: 0s;
    z-index: 5;
  }
}
</style>

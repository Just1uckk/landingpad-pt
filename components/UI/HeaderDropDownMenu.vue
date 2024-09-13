<template>
  <div v-click-outside="closeMenu" class="menu-wrapper">
    <button class="menu-button" @click="toggleMenu">{{ text }}
      <ArrowBottomSvg
        class="menu-button__chevron" :class="{'menu-button__chevron--active': showMenu}"/>
    </button>
    <ul v-if="showMenu" class="menu">
      <li v-for="navItem in navList"
          :key="navItem.id" class="menu__item">
        <nuxt-link
          :to="navItem.link"
          @click.native="handleClickLink">
          {{ navItem.text }}
        </nuxt-link>
      </li>

    </ul>
  </div>
</template>

<script>
import ArrowBottomSvg from '~/components/svg/ArrowBottomSvg.vue'

export default {
  name: 'HeaderDropDownMenu',
  components: {ArrowBottomSvg},
  props: {
    navList: {
      type: Array,
      required: true
    },
    text: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    handleClickLink() {
      this.$emit('onClickLink')
      this.showMenu = false;
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      this.showMenu = false;
    }
  },

}
</script>

<style lang="scss" scoped>
.menu-wrapper {
  position: relative;

  .menu-button {
    padding: 0;
    background: transparent;
    border: none;
    white-space: nowrap;
    color: $white;
    font-size: 1.25rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: $transition-time-main;

    @media (min-width: $lg) {
      font-size: 1.125rem;
    }
    @media (min-width: $xl) {
      font-size: 1.25rem;
    }

    &__chevron {
      margin-left: 13px;
      width: 14px;
      height: 25px;
      fill: $white;
      transition: $transition-time-main;

      &:hover {
        cursor: pointer;
      }

      &--active {
        transform: rotate(180deg);
      }
    }
  }
}

.menu {
  position: relative;
  padding: 0 5px;

  @media (min-width: $lg) {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: $white;
    box-shadow: 0px 3px 28px rgba(203, 203, 203, 0.25);
    border-radius: 4px;
    padding: 12px 13px;
    z-index: 1;
    min-width: 113px;
  }

  &__item {
    margin-top: 0;

    &:first-child {
      margin-top: 25px;
    }

    @media (min-width: $lg) {
      &:first-child {
        margin-top: 0px;
      }
    }

    &:last-child {
      margin-bottom: 0 !important;
    }

    a {
      background: transparent;
      border: none;
      white-space: nowrap;
      color: $dark;
      font-size: 1.25rem;
      line-height: 0;
      padding-left: 15px;
      @extend %decorLink;

      @media (min-width: $lg) {
        font-size: 1.125rem;
        line-height: 150%;
        padding: 5px;
      }

      @media (min-width: $xl) {
        font-size: 1.25rem;
      }

      &.nuxt-link-active {
        font-weight: bold;
      }
    }
  }

}

</style>

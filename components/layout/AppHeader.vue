<template>
  <header class="app-header" :class="headerClasses">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-6 col-lg-9 col-xl-10 d-flex align-items-center">
          <nuxt-link to="/#home-intro" class="logo" :class = "headerLogoClasses" >
            <logo-svg />
          </nuxt-link>
          <header-nav
            class="d-none d-lg-block"
            :nav-list="navList"
            @onClickLink="switchShowedMenu"
          />
        </div>
        <div class="col-6 col-lg-auto d-flex justify-content-end">
          <nuxt-link
            to="#book"
            class="btn btn-primary btn-book d-none d-lg-inline-flex"
          >
            {{ textButtonBook }}
          </nuxt-link>
          <burger-menu
            class="d-lg-none"
            :class="{ 'is-active': isActiveMenu }"
            @click="switchShowedMenu"
          />
        </div>
      </div>
    </div>
    <header-menu
      v-model="isActiveMenu"
      :nav-list="navList"
      :text-button-book="textButtonBook"
    />
  </header>
</template>

<script>
import { mapState } from 'vuex'
import LogoSvg from '~/components/svg/LogoSvg'
import BurgerMenu from '~/components/UI/BurgerMenu'
import HeaderNav from '~/components/UI/HeaderNav'
import HeaderMenu from '~/components/UI/HeaderMenu'
import { navigationList } from '~/constants/NavigationList'

export default {
  name: 'AppHeader',
  components: { HeaderMenu, HeaderNav, BurgerMenu, LogoSvg },
  props: {
    navList: {
      type: Array,
      required: false,
      default() {
        return navigationList()
      },
    },
  },
  data() {
    return {
      headerData: {},
      isActiveMenu: false,
      isWindowScrolling: false,
    }
  },
  async fetch() {
    this.headerData = await this.$api.sectionService.getHeader()
  },
  computed: {
    ...mapState({
      headerConfig: (state) => state.layout.header,
    }),
    headerLogoClasses(){
      const logoClasses = []
      if (this.$route.name === 'index') {
        logoClasses.push(`logo--home`)
      }
      return logoClasses
    },
    headerClasses() {
      const headerClasses = []
      if (this.headerConfig?.color) {
        headerClasses.push(`is-${this.headerConfig.color}`)
      }
      if (this.isWindowScrolling) {
        headerClasses.push('is-background is-dark is-fixed')
      }
      return headerClasses
    },
    textButtonBook() {
      return this.headerData?.bookButtonText || 'Get in touch'
    },
  },
  mounted() {
    this.handleWindowScroll()
    this.detectIsWindowScrolling()
  },
  unmounted() {
    this.removeWindowScroll()
  },
  methods: {
    switchShowedMenu() {
      this.isActiveMenu = !this.isActiveMenu
    },
    detectIsWindowScrolling() {
      this.isWindowScrolling = window.pageYOffset > 0
    },
    handleWindowScroll() {
      window.addEventListener('scroll', this.detectIsWindowScrolling)
    },
    removeWindowScroll() {
      window.removeEventListener('scroll', this.detectIsWindowScrolling)
    },
  },
}
</script>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 0;
  z-index: 100;

  @media (min-width: $sm) {
    padding: 20px 0;
  }

  &::before {
    content: '';
    @extend %posABS;
    transform: translateY(-100%);
    opacity: 0;
    background: #fff;
    box-shadow: $box-shadow-primary;
    z-index: -5;
    transition: $transition-time-main;
  }

  &.is-dark {
    /deep/ .menu-button {
      color: $dark;

      &__chevron {
        fill: $dark;
      }
    }

    .logo {
      svg {
        fill: $primary-logo;
      }
      &--home{
        svg {
          fill: $dark;
        }
      }
    }

    ::v-deep {
      .header-nav {
        &-list {
          li {
            a {
              @media (min-width: $lg) {
                color: $dark;
              }
            }
          }
        }
      }

      .burger-menu {
        .line {
          background: $dark;
        }
      }
    }
  }

  &.is-background {
    &::before {
      transform: translateY(0);
      opacity: 1;
    }
  }

  &.is-fixed {
    .logo {
      width: 150px;
      height: 40px;
    }
  }

  .logo {
    display: inline-flex;
    width: 150px;
    height: 40px;
    margin-right: 0;
    transition: $transition-time-main;

    @media (min-width: $lg) {
      margin-right: 60px;
    }

    @media (min-width: $xl) {
      width: 195px;
      height: 45px;
      margin-right: 70px;
    }

    svg {
      width: 100%;
      max-width: 100%;
      fill: $white;
      transition: $transition-time-main;
    }
  }

  .btn-book {
    padding: 5px 30px;
    font-size: 1rem;
  }
}
</style>

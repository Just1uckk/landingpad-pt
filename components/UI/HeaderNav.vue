<template>
  <nav class="header-nav">
    <ul class="header-nav-list">
      <li v-for="navItem in navList" :key="navItem.id">
        <nuxt-link
          v-if="!navItem.linkList"
          :to="navItem.link"
          @click.native="handleClickLink"
        >{{ navItem.text }}
        </nuxt-link>
        <HeaderDropDownMenu
          v-else
          :text="navItem.text"
          :nav-list="navItem.linkList"
          @onClickLink="handleClickLink"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
import HeaderDropDownMenu from '~/components/UI/HeaderDropDownMenu.vue'

export default {
  name: 'HeaderNav',
  components: {HeaderDropDownMenu},
  props: {
    navList: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleClickLink() {
      this.$emit('onClickLink')
    }
  }
}
</script>

<style lang="scss" scoped>
.header-nav {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &-list {
    display: flex;
    align-items: center;
    width: 100%;
    max-height: 60vh;
    overflow-y: auto;

    @media (min-width: $lg) {
      overflow-y: visible;
    }
    li {
      margin-right: 0;

      @media (min-width: $lg) {
        margin-right: 15px;
      }

      @media (min-width: $xl) {
        margin-right: 30px;
      }

      a {
        white-space: nowrap;
        color: $white;
        font-size: 1.25rem;
        @extend %decorLink;

        @media (min-width: $lg) {
          font-size: 1.125rem;
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
}
</style>

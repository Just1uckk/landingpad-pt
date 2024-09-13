<template>
  <ul :class="isJustify">
    <li v-for="link in links" :key="link.id" class="dropdown__btn">
      <div :class="rightClass(link)">
        {{ link.title }}
        <arrow-bottom-svg class="dropdown__btn__link__svg"/>
      </div>
      <div class="dropdown__btn__dropzone">
        <nuxt-link v-for="subtitle in sublinks(link)" :key="subtitle.id" class="dropdown__btn__dropzone__link"
                   :to="subtitle.slug">
          <div class="dropdown__btn__dropzone__link__text">{{ subtitle.name }}</div>
        </nuxt-link>
      </div>
    </li>
  </ul>
</template>

<script>
import ArrowBottomSvg from '~/components/svg/ArrowBottomSvg';

export default {
  name: 'DropdownNav',
  components: { ArrowBottomSvg },
  props: {
    navigationLinks: {
      type: Array,
      required: true,
    },
  },
  computed: {
    isJustify () {
      if (this.links.length >= 10) {
        return 'dropdown justify-content-between';
      } else {
        return 'dropdown justify-content-evenly';
      }
    },
    sublinks () {
      return (link) => {
        const listSubLinks = this.navigationLinks.filter((x) => x.seo?.slug === link.slug);
        return listSubLinks.sort((element, nextElement) => element.id > nextElement.id ? 1 : -1);
      };
    },
    links () {
      const listPages = [];
      this.navigationLinks.forEach((x) => {
        if (x.seo) {
          if (!listPages.some((el) => el.slug === x.seo.slug)) listPages.push(x.seo);
        }
      });
      return listPages.sort((element, nextElement) => element.id > nextElement.id ? 1 : -1);
    },
    rightClass () {
      return (link) => {
        const test = this.navigationLinks.find((x) => x.slug === this.$route.params.chapter);
        if (test.seo?.slug === link.slug) return 'dropdown__btn__link nuxt-link-exact-active';
        return 'dropdown__btn__link';
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.justify-content-evenly {
  justify-content: space-evenly;
}

.dropdown {
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  &__btn {
    position: relative;
    padding-top: 16px;
    padding-bottom: 13px;
    cursor: pointer;

    &:hover .dropdown__btn__dropzone {
      display: block;
    }

    &__link {
      font-weight: 500;
      font-size: 0.875rem;
      color: #0F0F10;

      &__svg {
        width: 16px;
        height: 8px;
        fill: $dark;
        transition: $transition-time-main;
      }
    }

    &__dropzone {
      display: none;
      position: absolute;
      top: 45px;
      z-index: 1;
      background: #FFFFFF;
      box-shadow: 5px 15px 28px rgba(161, 160, 185, 0.25);
      border-radius: 0px 0px 8px 8px;
      overflow: hidden;

      &__link {
        padding: 8px;
        transition: .6s;
        display: flex;
        white-space: nowrap;

        &__text {
          text-decoration: none;
          color: #0F0F10;
        }
      }

      &__link:hover .dropdown__btn__dropzone__link__text {
        color: $white;
      }

      &__link:hover {
        background: $primary;
      }
    }
  }
}

.nuxt-link-exact-active {
  color: #2967F0;
}

.dropdown__btn__dropzone {
  .nuxt-link-exact-active {
    background: $primary;

    .dropdown__btn__dropzone__link__text {
      color: $white;
    }
  }
}

li:last-child {

  .dropdown__btn__dropzone {
    transform: translateX(-40px);
  }
}
</style>

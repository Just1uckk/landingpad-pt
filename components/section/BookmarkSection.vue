<template>
  <section ref="block" class="bookmark d-lg-none">
    <div class="bookmark__block">
      <div class="bookmark__block__wrap">
        <div ref="head" class="bookmark__block__wrap__head" @click="openMenu">
          <arrow-bottom-svg class="bookmark__block__wrap__head__chevron"/>
        </div>
      </div>
      <div style="display: flex">
        <div v-if="!isShow" class="bookmark__block__body">
          <div v-for="link in links" :key="link.id" class="bookmark__block__body__wrap" @click="openSubMenu(link)">
            {{ link.title }}
          </div>
        </div>
        <div v-if="isShow" class="bookmark__block__body">
          <div v-for="sub in sublinks(singleLink)" :key="sub.id" class="bookmark__block__body__wrap">
            <nuxt-link :to="sub.slug">{{ sub.name }}</nuxt-link>
          </div>
        </div>
        <div ref="svgBack" class="bookmark__block__sub-body" @click="openSubMenu">
          <arrow-right-svg v-if="isShow" class="bookmark__block__sub-body__chevron"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ArrowBottomSvg from '~/components/svg/ArrowBottomSvg';
import ArrowRightSvg from '~/components/svg/ArrowRightSvg';

export default {
  name: 'BookmarkSection',
  components: { ArrowRightSvg, ArrowBottomSvg },
  props: {
    sectionData: {
      type: Array,
      required: true,
    },
  },
  data () {
    return {
      isShow: false,
      singleLink: {},
    };
  },
  computed: {
    sublinks () {
      return (link) => {
        const listSubLinks = this.sectionData.filter((x) => x.seo?.slug === link.slug);
        return listSubLinks.sort((element, nextElement) => element.id > nextElement.id ? 1 : -1);
      };
    },
    links () {
      const listPages = [];
      this.sectionData.forEach((x) => {
        if (x.seo && !listPages.some((el) => el.slug === x.seo.slug)) {
          listPages.push(x.seo);
        }
      });
      return listPages.sort((element, nextElement) => element.id > nextElement.id ? 1 : -1);
    },
  },
  methods: {
    openMenu () {
      if (this.$refs.block.classList.length === 2) {
        this.$refs.block.className = 'bookmark d-lg-none up';
      } else {
        this.$refs.block.className = 'bookmark d-lg-none';
      }
    },
    openSubMenu (link) {
      this.isShow = !this.isShow;
      if (!link.id) {
        this.singleLink = this.sectionData.find((x) => x.slug === this.$route.params.chapter).seo;
      } else {
        this.singleLink = link;
      }
      if (this.$refs.svgBack.classList.length === 1) {
        this.$refs.svgBack.className = 'bookmark__block__sub-body back';
      } else {
        this.$refs.svgBack.className = 'bookmark__block__sub-body';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bookmark {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  float: end;
  z-index: 1000;
  transition: $transition-time-main;
  transform: translateY(300px);
  @media (max-height: 425px) {
    transform: translateY(150px);
  }

  &__block {

    &__sub-body {
      background: $primary;
      width: 30px;
      height: 300px;
      transition: $transition-time-main;
      border-top-right-radius: 10px;
      display: flex;
      align-items: center;
      @media (max-height: 425px) {
        height: 150px;
      }

      &__chevron {
        width: 30px;
        height: 25px;
        fill: $white;
        transition: $transition-time-main;

        &:hover {
          cursor: pointer;
        }
      }
    }

    &__wrap {
      display: flex;
      justify-content: flex-end;

      &__head {
        background: $primary;
        height: 30px;
        width: 75px;
        border-radius: 20px 20px 0 0;
        margin-right: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: $transition-time-main;

        &:hover {
          cursor: pointer;
        }

        &__chevron {
          width: 30px;
          height: 10px;
          fill: $white;
          transition: $transition-time-main;
          transform: scale(-1);
        }
      }
    }

    &__body {
      background: $primary;
      width: 100%;
      height: 300px;
      transition: $transition-time-main;
      z-index: 500;
      border-top-left-radius: 10px;
      padding-top: 10px;
      align-items: center;
      @media (max-height: 425px) {
        height: 150px;
        overflow: scroll;
      }

      &__wrap {
        transform: translateX(30px);
        padding: 5px;
        text-align: center;
        color: $white;
        font-weight: 500;
        font-size: 1rem;

        &:hover {
          cursor: pointer;
        }

        a {
          color: $white;
          font-weight: 500;
          font-size: 1rem;
        }
      }
    }
  }
}

.up {
  transform: translateY(0);

  .bookmark {
    &__block {
      &__wrap__head {
        &__chevron {
          transform: scale(1);
        }
      }
    }
  }
}

.back {
  .bookmark__block__sub-body__chevron {
    transform: scale(-1);
  }
}

</style>

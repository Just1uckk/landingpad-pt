<template>
  <li class="accordion-item" :class="{'is-active': isVisible}">
    <button class="accordion-item-trigger accordion-item__title" @click="open">
        <slot name="accordion-title"></slot>
      <arrow-bottom-svg class="accordion-item__chevron"/>
    </button>
    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end">
      <div v-show="isVisible" class="accordion-item-body">
        <div class="accordion-item-content">
          <slot name="accordion-content"></slot>
        </div>
      </div>
    </transition>
  </li>
</template>

<script>
  import ArrowBottomSvg from "~/components/svg/ArrowBottomSvg";

  export default {
    name: 'AccordionItem',
    components: {ArrowBottomSvg},
    inject: ["accordion"],
    props: {
      id: {
        type: Number,
        required: true
      }
    },
    computed: {
      isVisible() {
        return Number(this.id) === Number(this.accordion.active);
      }
    },
    methods: {
      open() {
        if (this.isVisible) {
          this.accordion.active = null;
        } else {
          this.accordion.active = this.id;
        }
      },
      start(el) {
        el.style.height = el.scrollHeight + "px";
      },
      end(el) {
        el.style.height = "";
      }
    }
  }
</script>

<style lang="scss" scoped>
  .accordion-item {
    position: relative;
    background: $white;
    box-shadow: $box-shadow-primary;
    border-radius: 8px;
    padding-bottom: 15px;
    margin-bottom: 16px;

    &.is-active {

      .accordion-item__title {
        color: $primary;
      }

      .accordion-item__chevron {
        transform: scale(-1);
      }
    }

    &-trigger {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: none;
      background: transparent;
      outline: none;
      width: 100%;
      cursor: pointer;
      padding: 20px 15px 15px;

      @media (min-width: $sm) {
        padding: 30px 35px 15px;
      }
    }

    &-body {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 15px;
        right: 15px;
        border-top: 2px solid $lightness;

        @media (min-width: $sm) {
          left: 35px;
          right: 35px;
        }
      }
    }

    &-content {
      position: relative;
      padding: 16px 15px;

      @media (min-width: $sm) {
        padding: 16px 35px;
      }

      ::v-deep {
        p {
          line-height: 1.625rem;
          margin-bottom: 15px;

          &:last-of-type {
            margin-bottom: 0;
          }
        }
      }
    }

    &__title {
      font-size: 1.125rem;
      font-weight: 500;
      transition: $transition-time-main;

      * {
        margin-bottom: 0;
      }

      @media (min-width: $sm) {
        font-size: 1.125rem;

      }
    }

    &__chevron {
      width: 16px;
      height: 8px;
      fill: $dark;
      transition: $transition-time-main;

      @media (min-width: $sm) {
        width: 25px;
        height: 15px;
      }
    }
  }

  .accordion-enter-active,
  .accordion-leave-active {
    will-change: height, opacity;
    transition: height 0.3s ease, opacity 0.3s ease;
    overflow: hidden;
  }

  .accordion-enter,
  .accordion-leave-to {
    height: 0 !important;
    opacity: 0;
  }
</style>

<template>
  <div class="section">
    <div class="section-info" :class="classSectionInfo">
      <div v-if="changedTitleText" class="section-title">
        <div
          :is="tag"
          class="section-title__text"
          :class="{ isTitle: tag === 'h1', isTitleNotH2: tag !== 'h2' }"
          v-html="changedTitleText"
        ></div>
        <title-section-decor
          class="section-title__decor"
          :class="classDecorTitle"
        />
      </div>
      <div v-if="descriptionText" class="section-description">
        <h3
          v-for="item in splitDescription" :key="item"
          class="section-description__text mb-3"
          v-html="item"
        >{{ descriptionText }}</h3>
      </div>
    </div>
    <div v-if="introductionText" class="section-introduction">
      <p
        class="section-introduction__text"
        v-html="changedIntroductionText"
      ></p>
    </div>
  </div>
</template>

<script>
import insertMarkToString from '~/helpers/insertMarkToString'
import TitleSectionDecor from '~/components/svg/TitleSectionDecor'

export default {
  name: 'SectionInfo',
  components: {TitleSectionDecor},
  props: {
    tag: {
      type: String,
      default: 'h2',
    },
    titleText: {
      type: String,
      required: true,
    },
    descriptionText: {
      type: String,
      default: '',
    },
    introductionText: {
      type: String,
      default: '',
    },
    iconPosition: {
      type: String,
      default: 'left',
    },
    iconColor: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: 'normal',
    },
  },
  computed: {
    classSectionInfo() {
      return `is-size-${this.size}`
    },
    classDecorTitle() {
      return `is-color-${this.iconColor} is-position-${this.iconPosition}`
    },
    changedTitleText() {
      return insertMarkToString(this.titleText);
    },

    changedIntroductionText() {
      return insertMarkToString(this.introductionText);
    },
    splitDescription() {
      return this.descriptionText.split('\\&').map(item => insertMarkToString(item.trim()));
    },
  },
}
</script>

<style lang="scss" scoped>
.section-info {
  position: relative;
  display: inline-flex;
  flex-direction: column;

  &.is-size-mini {
    .section-title {
      &__decor {
        width: 23px;
        height: 24px;

        &.is-position-left {
          top: -10px;
          left: -20px;
        }

        &.is-position-right {
          top: -9px;
          right: -22px;
          transform: scaleX(-1);
        }
      }
    }

    .section-description__text,
    .section-title__text {
      font-size: 3.375rem;
      font-weight: bold;
      @media (max-width: $sm) {
        font-size: 2.25rem;
      }
    }

    .section-description {
      &__text {
        font-size: 1.5rem;
        margin-bottom: 0;
      }
    }
  }

  .section-title {
    position: relative;
    display: inline-flex;
    margin: 0 auto;

    &__decor {
      position: absolute;
      top: 0;
      width: 40px;
      height: 40px;

      &.is-color-primary {
        stroke: $primary;
      }

      &.is-color-white {
        stroke: $white;
      }

      &.is-color-dark {
        stroke: $dark;
      }

      &.is-position-left {
        top: -20px;
        left: -30px;
      }

      &.is-position-right {
        top: -15px;
        right: -35px;
        transform: scaleX(-1);
      }
    }
  }

  .section-description__text,
  .section-title__text {
    color: $dark;
    font-size: 2rem;
    font-weight: 500;

    ::v-deep {
      mark {
        color: $primary;
        background-color: transparent;
      }
    }
  }

  .isTitle {
    font-size: 3.375rem;
    font-weight: bold;
  }

  .isTitleNotH2 {
    margin-bottom: 20px;
  }

  .section-description {
    &__text {
      font-size: 1.5rem;
      margin-bottom: 0;
    }
  }
}

.section-introduction {
  &__text {
    font-size: 1.25rem;
    margin-bottom: 0;
    @media (max-width: $sm) {
      font-size: 1.125rem;
    }
  }
}
</style>

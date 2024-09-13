<template>
  <section id="services" class="services-section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <section-info
              :title-text="sectionData.title"
              :description-text="sectionData.description"
              icon-position="right"
            />
          </div>
          <div
            class="services-section__sub-description"
            v-html="convertMarkdownToHtml(sectionData.subDescription)"
          ></div>
        </div>
      </div>
      <div class="services-list row">
        <div
          v-for="service in servicesList"
          :key="service.id"
          class="services-list-item col-sm-6 col-lg-4 col-xl-3"
        >
          <services-card :service="service" />
        </div>
        <div
          class="services-list-item col-sm-6 col-lg-4 col-xl-3 d-none d-sm-block"
        >
          <help-find-card
            :question-button-text="sectionData.questionButtonText"
          />
        </div>
      </div>
    </div>
    <div class="services-section__background-decor"></div>
  </section>
</template>

<script>
import { sections } from '~/mixins/sections'
import ServicesCard from '~/components/card/ServicesCard'
import HelpFindCard from '~/components/card/HelpFindCard'
import { convertData } from '~/mixins/convertData'

export default {
  name: 'ServicesSection',
  components: { HelpFindCard, ServicesCard },
  mixins: [sections, convertData],
  props: {
    servicesList: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.services-section {
  padding: 60px 0 30px;

  @media (min-width: $md) {
    padding: 90px 0 60px;
  }

  ::v-deep {
    .section-info {
      .section-title {
        margin-bottom: 10px;
      }

      .section-description {
        max-width: 780px;
        margin: 0 auto;
      }
    }
  }

  &__sub-description {
    margin-top: 32px;
    margin-bottom: 20px;
    font-size: 1rem;
    text-align: center;

    p {
      margin-bottom: 10px;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  .services-list {
    &-item {
      margin-bottom: 30px;
    }
  }

  &__background-decor {
    @include circleDecor(50px, 255px, 255px, auto, auto, -20px, 30%);
  }
}
</style>

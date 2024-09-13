<template>
  <section id="apartment-section" class="apartment-section">
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
        </div>
      </div>
      <apartment-list
        :apartment-list="apartmentList"
        :apartment-slug="apartmentSlug"
      />
    </div>
    <div class="services-section__background-decor"></div>
  </section>
</template>

<script>
import ApartmentList from '~/components/apartment/ApartmentList'
import { sections } from '~/mixins/sections'
export default {
  name: 'ApartmentsSection',
  components: { ApartmentList },
  mixins: [sections],
  props: {
    apartmentList: {
      type: Array,
      required: true,
    },
    apartmentSlug: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.apartment-section {
  padding: 70px 0;

  @media (min-width: $md) {
    padding: 100px 0;
  }

  ::v-deep {
    .section-info {
      margin-bottom: 10px;

      @media (min-width: $md) {
        margin-bottom: 34px;
      }
    }

    .section-description {
      max-width: 780px;
      margin: 0 auto 20px;
    }
  }

  &__background-decor {
    @include circleDecor(50px, 255px, 255px, auto, auto, -20px, 30%);
  }
}
</style>

<template>
  <section v-if="!!descriptionData.length" class="service-description">
    <div class="container">
      <div
        v-for="(description, index) in descriptionData"
        :key="description.id"
        class="row description"
        :class="{ 'description-reverse': descriptionReverse(index) }"
      >
        <div class="col-lg-6 column-1">
          <div class="description__image">
            <img :src="description.image.url" alt="description image" />
          </div>
        </div>
        <div class="col-lg-6 column-2">
          <h3 class="description__title">{{ description.title }}</h3>
          <p class="description__text">{{ description.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiceDescriptionSection',

  props: {
    descriptionData: {
      type: Array,
      required: true,
    },
  },

  methods: {
    descriptionReverse(index) {
      return !!(index % 2)
    },
  },
}
</script>

<style lang="scss" scoped>
.service-description {
  padding: 70px 0;

  @media (min-width: $md) {
    padding: 100px 0;
  }
}
.description {
  margin: -15px;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 45px;
  }

  @media (min-width: $lg) {
    flex-direction: row;

    &.description-reverse {
      flex-direction: row-reverse;
    }

    &:not(:last-child) {
      margin-bottom: 90px;
    }
  }
  .column-1,
  .column-2 {
    padding-bottom: 15px;
    padding-top: 15px;
  }

  &__image {
    position: relative;
    padding-top: calc(100% * 0.66);
    border-radius: 8px;
    overflow: hidden;

    @media (min-width: $lg) {
      height: 100%;
      min-height: 360px;
      max-height: 460px;
      padding: 0;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      max-width: none;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }

  &__title {
    position: relative;
    color: $dark;

    font-size: 1.5rem;
    line-height: 1.75rem;
    font-weight: 500;
    margin-bottom: 16px;

    @media (min-width: $md) {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }

  &__text {
    position: relative;
    color: $dark;
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 400;
    margin: 0;

    @media (min-width: $md) {
      font-size: 1.25rem;
      line-height: 1.625rem;
    }
  }
}
</style>

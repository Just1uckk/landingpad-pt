<template>
  <article class="rent-info">
    <h1 class="rent-info__title">{{ info.title}}</h1>
    <p
      v-for="text in splitLocation"
      :key="text"
      class="rent-info__description">
      {{ text }}
    </p>
    <p
      v-for="text in splitBuilding"
      :key="text"
      class="rent-info__description">
      {{ text }}
    </p>

  </article>
</template>

<script>

export default {
  name: 'ApartmentInfo',
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  computed: {
    splitLocation() {
      return this.info.location_info.split('\\&').map(item => item.trim());
    },
    splitBuilding() {
      return this.info.building.split('\\&').map(item => item.trim());
    },
  }
}
</script>

<style lang="scss" scoped>
.rent-info {
  @media (max-width: $xxl) {
    margin-top: 64px;
  }

  &__title {
    font-size: 42px;
    margin-bottom: 24px;
    text-transform: capitalize;
  }

  &__subtitle {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 8px;
  }

  &__description {
    margin-bottom: 18px;
  }
}
</style>

<template>
  <section class="apartment-features">
    <h2 class="apartment-features__title">Main Features:</h2>
    <div class="apartment-features__grid">
      <p v-for="item in featuresList"
         :key="item.id" class="apartment-features__item"
      >{{ item.Feature }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ApartmentFeatures',
  props: {
    featuresList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.apartment-features {
  margin-bottom: 76px;

  &__tetle {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 8px;
  }

  &__grid {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    background-color: $primary;
    color: $white;
    padding: 8px 16px;
    border-radius: 90px;
    margin-right: 16px;
    margin-bottom: 24px;
  }
}
</style>

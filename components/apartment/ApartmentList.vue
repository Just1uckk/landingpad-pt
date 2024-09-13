<template>
  <div class="row apartment-row">
    <template v-if="sortedApartmentList?.length">
      <div
        v-for="apartment in sortedApartmentList"
        :key="apartment.id"
        class="col-sm-6 col-lg-4"
      >
        <apartment-card
          :apartment-data="apartment"
          :apartment-slug="apartmentSlug"
        />
      </div>
    </template>
    <template v-else>
      <div class="col-12">
        <p class="apartment-empty">Not found</p>
      </div>
    </template>
  </div>
</template>
  
  <script>
import ApartmentCard from '~/components/card/ApartmentCard'
export default {
  name: 'ApartmentList',
  components: { ApartmentCard },
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
  computed: {
    sortedApartmentList() {
      if (this.apartmentList.length) {
        const list = this.apartmentList.map(el => el.apartment_list)
        return list.filter(arr => Object.keys(arr).length > 0)
      } else {
        return []
      }
    }
  }
}
</script>
  
<style lang="scss" scoped>
::v-deep {
  .apartment-card {
    margin-bottom: 30px;
  }
}
.apartment-row {
  margin-bottom: -30px;
}

.apartment-empty {
  color: $dark;
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 500;
}
</style>
  
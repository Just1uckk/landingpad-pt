<template>
  <div class="pagination">
    <ul class="pagination-list">
      <li class="pagination-list__item">
        <button class="pagination-control pagination-control--prev"
                :disabled="isPrevDisabled"
                type="button"
                @click="handleClickPaginationControl(prevPaginationItem)">
          <arrow-left-svg/>
        </button>
      </li>
      <li v-for="paginationItem in total" :key="paginationItem" class="pagination-list__item">
        <button class="pagination-control"
                :class="{'is-current': +current === +paginationItem}"
                @click="handleClickPaginationControl(paginationItem)">
          {{paginationItem}}
        </button>
      </li>
      <li class="pagination-list__item">
        <button class="pagination-control pagination-control--next"
                :disabled="isNextDisabled"
                type="button"
                @click="handleClickPaginationControl(nextPaginationItem)">
          <arrow-right-svg/>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
  import ArrowLeftSvg from "~/components/svg/ArrowLeftSvg";
  import ArrowRightSvg from "~/components/svg/ArrowRightSvg";

  export default {
    name: 'AppPagination',
    components: {ArrowRightSvg, ArrowLeftSvg},
    props: {
      total: {
        type: Number || String,
        required: true
      },
      current: {
        type: Number || String,
        default: 1
      }
    },
    computed: {
      isPrevDisabled() {
        return +this.prevPaginationItem === +this.current
      },
      isNextDisabled() {
        return +this.nextPaginationItem === +this.current
      },
      prevPaginationItem() {
       return this.current <= 1 ? 1 : this.current - 1;
      },
      nextPaginationItem() {
        return this.current >= this.total ? this.total : this.current + 1;
      }
    },
    methods: {
      handleClickPaginationControl(index) {
        this.$emit('changePagination', index)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pagination {

    &-list {
      display: flex;

      &__item {
        margin: 0 5px;
      }
    }

    &-control {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      font-size: .875rem;
      font-weight: bold;
      color: $dark;
      transition: $transition-time-main;
      background: $white;
      user-select: none;
      border: none;
      border-radius: 8px;
      cursor: pointer;

      &:hover,
      &:focus-visible,
      &.is-current {
        background: $primary;
        color: $white;

        svg {
          fill: $white;
        }
      }

      &:disabled {
        pointer-events: none;
        color: $gray;

        svg {
          fill: $gray;
        }
      }

      svg {
        width: 5px;
        height: 10px;
        fill: $dark;
        transition: $transition-time-main;
      }
    }
  }
</style>

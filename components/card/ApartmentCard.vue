<template>
  <nuxt-link :to="singleApartmentLink" class="apartment-card">
    <div class="apartment-card-head">
      <img
        :src="apartmentData.images[0].url"
        class="apartment-card__prev"
        alt="apartment image"
      />
      <div class="apartment-card__type">
        <p>{{ apartmentData.apartment_type }}</p>
      </div>
      <div class="apartment-card-inner">
        <h3 class="apartment-card__title">{{ apartmentData.title }}</h3>
        <p class="apartment-card__numder">
          {{ apartmentData.apartment_numder }}
        </p>
      </div>
    </div>
    <div class="apartment-card-body">
      <div class="apartment-card__location">
        <app-icon component-name="LocationSvg" />
        <p>{{ apartmentData.address }}</p>
      </div>
      <div class="apartment-card__details">
        <ul>
          <li>
            <app-icon component-name="SizeSvg" />
            <p>{{ apartmentData.area }}</p>
          </li>
          <li>
            <app-icon component-name="BedSvg" />
            <p>{{ apartmentData.seats }}</p>
          </li>
        </ul>
      </div>
    </div>
  </nuxt-link>
</template>

<script>

import AppIcon from '~/components/UI/AppIcon'

export default {
  name: 'ApartmentCard',
  components: { AppIcon },
  props: {
    apartmentData: {
      type: Object,
      required: true,
    },
    apartmentSlug: {
      type: String,
      required: true,
    },
  },
  computed: {
    singleApartmentLink() {
      return `${this.apartmentSlug}/${this.apartmentData?.slug}`
    },
  },
}
</script>

<style lang="scss" scoped>
.apartment-card {
  position: relative;
  display: block;
  background: $white;
  border-radius: 8px;
  box-shadow: $box-shadow-secondary;
  overflow: hidden;

  &:hover {
    .apartment-card__prev {
      transform: scale(1.1);
    }
  }

  &-head {
    position: relative;
    padding-top: calc(100% * 0.66);
    overflow: hidden;
  }

  &-inner {
    position: absolute;
    padding: 24px;
    width: 100%;
    bottom: 0;
    left: 0;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 150%;
      bottom: 0;
      left: 0;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.6) 0%,
        rgba(38, 38, 38, 0) 100%
      );
    }
  }

  &-body {
    padding: 24px;
  }

  &__title {
    position: relative;
    color: $white;
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 500;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__numder {
    position: relative;
    color: $white;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__type {
    position: absolute;
    top: 24px;
    right: 24px;
    display: flex;
    align-items: center;
    padding: 2px 16px;
    height: 28px;
    border-radius: 50px;
    background: $primary;

    p {
      color: $white;
      font-size: 1rem;
      line-height: 1;
      font-weight: 400;
      margin: 0;
    }
  }

  &__prev {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: none;
    object-fit: cover;
    object-position: 50% 50%;
    transition: 0.5s;
  }

  &__location {
    display: flex;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1px solid #e7e7e7;
    color: $primary;

    p {
      margin: 0 0 0 16px;
      font-size: 1rem;
      line-height: 1;
      font-weight: 500;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    svg {
      flex-shrink: 0;
    }
  }

  &__details {
    padding-top: 16px;

    ul {
      display: flex;
      align-items: center;

      & > *:not(:last-child) {
        margin-right: 32px;
      }
    }

    li {
      display: flex;
      align-items: center;

      p {
        margin: 0 0 0 8px;
        font-size: 1rem;
        line-height: 1;
        font-weight: 400;
        color: #a7a9bc;
      }

      svg {
        flex-shrink: 0;
        color: #a7a9bc;
      }
    }
  }
}
</style>

<template>
  <div class="card-item col-md-6 col-xl-6 col-xxl-3" :class="primaryColor">
    <div class="card">
      <h4 class="card__title">{{ title || 'TITLE' }}</h4>
      <div class="card__description-wrapp">
        <p class="card__description">
          {{
            description ||
            'your first Portugal pad from our portfolio of design apartments, or via a targeted market search'
          }}
        </p>
      </div>
      <nuxt-link :to="path" class="btn">Learn more</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroServiceCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    primaryColor: {
      description: {
        type: String,
        required: true,
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.card-item {
  width: 100%;
  min-height: 285px;
  margin-bottom: 32px;
}

.card {
  display: flex;
  flex-direction: column;
  height: 217px;
  padding: 32px 24px 24px;
  border-top: 8px solid $primary;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 16px;
  text-align: center;
  transition: background-color 0.3s ease-out, height 0.3s ease-out,
  color 0.3s ease-out;

  @media (max-width: $xl) {
    height: 100%;
    padding: 32px 16px 16px;
    background-color: #FFFFFFC7;
  }

  &:hover {
    height: 100%;
    background-color: #FFFFFFC7;

    .card__title {
      color: $dark;
    }

    .card__description {
      color: $dark;
    }

    .btn {
      transition: opacity 0.1s ease-in;
      visibility: visible;
      opacity: 1;
    }
  }

  &__title {
    margin: 0;
    color: rgba(255, 255, 255, 0.5);
    line-height: 0.8;
    font-size: 84px;
    font-weight: 700;

    @media (max-width: $xl) {
      color: $dark;
    }
  }

  &__description-wrapp {
    display: flex;
    min-height: 80px;
    margin-top: 5px;
  }

  &__description {
    width: 100%;
    margin: auto 0;
    color: $white;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    @include lineClamp(3);

    @media (max-width: $xl) {
      color: $dark;
    }
  }

  .btn {
    margin: auto 0 0;
    color: $white;
    background-color: $primary;
    opacity: 0;
    visibility: hidden;
    transition: 0.2s ease-out;
    @media (max-width: $xl) {
      visibility: visible;
      opacity: 1;
    }

    &:hover {
      background: $primary-light;
      border-color: $primary-light;
    }
  }
}
</style>

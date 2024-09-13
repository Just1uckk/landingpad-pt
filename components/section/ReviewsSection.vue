<template>
  <div id="reviews" class="reviews-section">
    <div class="reviews-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- <div class="text-center">
              <section-info :title-text="sectionData.title"/>
            </div> -->
            <div class="reviews-list">
              <app-loader v-if="isLoading"/>
              <vue-slick-carousel v-bind="carouselSetting" ref="reviewsCarousel" @init="onInitCarousel">
                <div v-for="review in reviewsList" :key="review.id" class="reviews-list-item">
                  <reviews-card :review="review"/>
                </div>
              </vue-slick-carousel>
              <carousel-control class="d-none d-lg-flex" @showPrevSlider="showPrevSlider"
                                @showNextSlider="showNextSlider"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="reviews-section__background-decor"></div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import lodash from 'lodash';
import ReviewsCard from "~/components/card/ReviewsCard";
import CarouselControl from "~/components/carousel/CarouselControl";
import AppLoader from "~/components/UI/AppLoader";

export default {
  name: 'ReviewsSection',
  components: {AppLoader, CarouselControl, ReviewsCard, VueSlickCarousel,},
  props: {
    reviewsList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isLoading: true,
      carouselSetting: {
        dots: false,
        arrows: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchMove: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true,
              touchMove: true
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              touchMove: true
            }
          },
        ]
      }
    }
  },
  methods: {
    onInitCarousel() {
      this.isLoading = false
    },
    showPrevSlider: lodash.debounce(function () {
      this.$refs.reviewsCarousel.prev()
    }, 500),
    showNextSlider: lodash.debounce(function () {
      this.$refs.reviewsCarousel.next()
    }, 500),
  }
}
</script>

<style lang="scss" scoped>
.reviews-section {
  padding: 0;
  overflow: visible;


  .reviews-wrapper {
    overflow: hidden;
  }

  .reviews-list {
    position: relative;
    margin: 0 -20px;

    ::v-deep {
      .slick-track {
        display: flex;
        align-items: center;
      }
    }

    &-item {
      padding: 20px 20px 30px;

      @media (min-width: $sm) {
        padding: 40px 20px 60px;
      }
    }
  }

  &__background-decor {
    @include circleDecor(115px, 380px, 380px, 40px, -120px);

    @media (max-width: $sm) {
      width: 160px;
      height: 160px;
      top: 50%;
      transform: translateY(-50%);
      filter: blur(50px);
      left: -20px;
    }
  }
}
</style>

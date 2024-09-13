<template>
  <article v-if="imageList.length">
    <div class="apartment-slider">
      <hooper ref="carousel" group="group1" :infinite-scroll="true" @slide="updateCarousel">
        <slide v-for="slide in imageList" :key="slide.id">
          <img :src="previewImageUrl(slide.url)"
               alt="slide.image"
               class="hooper-img"
               @click="openModal"/>
        </slide>
        <hooper-pagination slot="hooper-addons" mode="fraction" class="slide-counter"></hooper-pagination>
      </hooper>
      <button class="arrow arrow--prev" @click.prevent="slidePrev">
        <ArrowLeftSvg class="arrow-svg"/>
      </button>
      <button class="arrow arrow--next" @click.prevent="slideNext">
        <ArrowRightSvg class="arrow-svg"/>
      </button>
    </div>

    <portal to="destination">
      <AppModal :visible="modalVisible" @close="closeModal">
        <div class="modal-hooper">
          <hooper group="group1" :items-to-show="1" :infinite-scroll="true">
            <slide v-for="slide in imageList" :key="slide.id">
              <img :src="previewImageUrl(slide.url)"
                   class="modal-hooper__img"
                   alt="slide.image"/>
            </slide>
            <hooper-pagination slot="hooper-addons" mode="fraction" class="slide-counter"></hooper-pagination>
          </hooper>
          <button class="arrow arrow--prev" @click.prevent="slidePrev">
            <ArrowLeftSvg class="arrow-svg"/>
          </button>
          <button class="arrow arrow--next" @click.prevent="slideNext">
            <ArrowRightSvg class="arrow-svg"/>
          </button>
        </div>
      </AppModal>
    </portal>
  </article>
</template>

<script>
import {Hooper, Slide, Pagination as HooperPagination} from 'hooper';
import 'hooper/dist/hooper.css';
import AppModal from '~/components/modal/AppModal.vue'
import ArrowLeftSvg from '~/components/svg/ArrowLeftSvg.vue'
import ArrowRightSvg from "~/components/svg/ArrowRightSvg.vue";
import {helperImage} from "~/mixins/helperImage";

export default {
  name: 'ApartmentsSlider',
  components: {
    Hooper,
    Slide,
    AppModal,
    ArrowLeftSvg,
    ArrowRightSvg,
    HooperPagination
  },
  mixins: [helperImage],
  props: {
    imageList: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      modalVisible: false,
      carouselData: 0,
    };
  },
  computed: {},
  watch: {
    carouselData() {
      this.$refs.carousel.slideTo(this.carouselData);
    },

  },
  methods: {

    previewImageUrl(url) {
      return url && this.getFullImageUrl(url)
    },
    openModal() {
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    updateCarousel(payload) {
      this.carouselData = payload.currentSlide;
    }
  }
};
</script>

<style scoped lang="scss">
.hooper {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.modal-hooper {
  height: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  max-width: 1100px;


  @media (max-width: $sm) {
    .arrow {
      top: 50%;
      transform: translateY(-50%);

      &--prev {
        left: 0px;
      }

      &--next {
        right: 0px;
      }
    }
  }

  .hooper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

  }

  &__img {
    height: 100%;
    object-fit: cover;
    width: 100%;
    border-radius: 10px;
    //@media (max-width: $sm) {
    //  width: 100%;
    //  height: auto;
    //  object-fit: cover;
    //}
  }


}

.hooper-img {
  cursor: pointer;
  border-radius: 10px;
  width: 100%;
  max-height: 424px;
  object-fit: cover;
}

.apartment-slider {
  position: relative;
  z-index: 0;
  max-height: 424px;

  .hooper-slide {
    height: auto;

    img {
      height: 100%;
    }

  }
}

.arrow {
  position: absolute;
  top: 41%;
  z-index: 10;
  background: rgba(15, 15, 16, 0.74);
  backdrop-filter: blur(2px);
  border-radius: 8px;
  padding: 11px 7px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-out;

  &:hover {
    background: rgba(57, 57, 59, 0.74);
  }

  &--prev {
    left: 10px;
  }

  &--next {
    right: 10px;
  }
}

.arrow-svg {
  width: 18.67px;
  height: 9.56px;
  fill: #fff;
}

.slide-counter {
  z-index: 10;
  box-sizing: border-box;
  //position: absolute;
  bottom: 16px;
  //left: 50%;
  //transform: translateX(-50%);
  color: #FFFFFF;
  font-size: 16px;
  line-height: 21px;
  padding: 7px 11px;
  border-radius: 8px;
  background: rgba(15, 15, 16, 0.74);
  backdrop-filter: blur(2px);


  p {
    margin-bottom: 0;
  }

}


</style>

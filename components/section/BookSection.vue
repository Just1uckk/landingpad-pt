<template>
  <div id="book" class="book-section">
    <app-loader v-if="isLoading"/>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <section-info :title-text="sectionData.title" :tag="'div'"/>
          </div>
          <book-form :submit-button-text="sectionData.submitButtonText"
                     @onLoading="changeLoading"
                     @formSubmit="handlerFormSubmit"/>
        </div>
      </div>
      <book-form-submitted :is-active="isFormSubmit"/>
    </div>
  </div>
</template>

<script>
  import {sections} from "~/mixins/sections";
  import BookForm from "~/components/form/BookForm";
  import BookFormSubmitted from "~/components/form/BookFormSubmitted";
  import AppLoader from "~/components/UI/AppLoader";

  export default {
    name: 'BookSection',
    components: {AppLoader, BookFormSubmitted, BookForm},
    mixins: [sections],
    data() {
      return {
        isLoading: false,
        isFormSubmit: false
      }
    },
    methods: {
      changeLoading(isLoading) {
        this.isLoading = isLoading;
      },
      handlerFormSubmit() {
        this.isFormSubmit = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .book-section {
    padding: 0 0 20px;

    ::v-deep {
      .section-info {
        margin-bottom: 40px;

        .section-title {
          &__text {
            @media (max-width: $sm) {
              font-size: 2rem;
            }
          }
        }
      }
    }

    .container {
      position: relative;
      padding: 50px 15px 40px;
      background: $light;
      border-radius: 8px;
      overflow: hidden;

      @media (min-width: $sm) {
        padding: 50px 15px 60px;
      }
    }
  }
</style>

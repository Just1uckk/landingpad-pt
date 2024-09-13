<template>
  <form class="book-form" @submit.prevent="formSubmit">
    <div class="book-form__inner mb-5">
      <div class="col-md-5">
        <form-group v-model="formData.name"
                    :error="validationFieldErrorMessage('name')"
                    type="text"
                    class="mb-5"
                    placeholder="Enter your name">
          Name
        </form-group>
        <form-group v-model="formData.phone"
                    :error="validationFieldErrorMessage('phone')"
                    type="tel"
                    class="mb-5"
                    placeholder="Enter phone">
          Phone number
        </form-group>
        <form-group v-model="formData.email"
                    :error="validationFieldErrorMessage('email')"
                    type="email"
                    class="mb-5 "
                    placeholder="Enter email">
          Email
        </form-group>
        <form-group v-model="formData.message"
                    :error="validationFieldErrorMessage('message')"
                    tag="textarea"
                    class="book-form__textarea"
                    placeholder="Enter message">
          Additional Information
        </form-group>
        <button class="btn btn-primary d-flex w-100" type="submit">{{ submitButtonText }}</button>
      </div>
    </div>

  </form>
</template>

<script>
import FormGroup from "~/components/UI/form/FormGroup";

export default {
  name: 'BookForm',
  components: {FormGroup},
  props: {
    submitButtonText: {
      type: String,
      default: 'Book an online'
    }
  },
  data() {
    return {
      isLoading: false,
      formData: {
        name: '',
        phone: '',
        email: '',
        message: ''
      },
      eventFormSubmitStatusList: {
        failed: 'Failed',
        success: 'Success'
      },
      gtagEventFormSubmitOption: {
        event_label: 'Book form submit',
        event_category: 'form'
      },
      validationErrors: []
    }
  },
  watch: {
    isLoading() {
      this.$emit('onLoading', this.isLoading)
    }
  },
  methods: {
    validationFieldErrorMessage(fieldName) {
      return this.validationErrors.find(error => error.param === fieldName)?.msg || null;
    },
    changeEventFormSubmitStatus(status) {
      this.gtagEventFormSubmitOption.value = status;
    },
    formSubmit() {
      if (this.isLoading) {
        return;
      }
      const formLocation = window.location.pathname === '/' ? 'Home' : `${window.location.pathname}`.substring(1)
      this.isLoading = true;
      this.validationErrors = [];
      this.$api.mailSendService.sendToEmail({ ...this.formData, from: formLocation })
        .then(() => {
          this.changeEventFormSubmitStatus(this.eventFormSubmitStatusList.success)
          this.$api.gtagService.gtagEvent('book_form_submit', this.gtagEventFormSubmitOption)
          this.$emit('formSubmit');
        })
        .catch(({response}) => {
          // this.changeEventFormSubmitStatus(this.eventFormSubmitStatusList.failed)
          // this.$api.gtagService.gtagEvent('book_form_submit', this.gtagEventFormSubmitOption)

          if (response?.data?.errors) {
            this.$set(this, 'validationErrors', response.data.errors)
            // this.validationErrors = response.data.errors;
            return;
          }
          this.$toast.global.default_error()
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.book-form {
  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__textarea {
    height: 100px;
    margin-bottom: 32px;
  }

  ::v-deep {
    .form-group {
      textarea {
        height: 100%;
      }
    }
  }
}
</style>

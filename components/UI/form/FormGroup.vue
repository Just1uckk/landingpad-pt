<template>
  <label class="form-group" :class="{'is-focus': isFocus, 'is-error': error}">
    <span class="form-label">
      <slot></slot>
    </span>
    <component :is="tag"
               :type="type"
               :disabled="disabled"
               :autocomplete="autocomplete"
               :placeholder="placeholder"
               class="form-control"
               @focus="handlerFocus"
               @blur="handlerBlur"
               @input="updateInput">
    </component>
    <span v-if="error" class="error-message">
      <error-svg/>
      {{error}}
    </span>
  </label>
</template>

<script>
  import ErrorSvg from "~/components/svg/ErrorSvg";

  export default {
    name: 'FormGroup',
    components: {ErrorSvg},
    props: {
      tag: {
        type: String,
        default: 'input'
      },
      value: {
        type: String || Number || null,
        default: ''
      },
      type: {
        type: String || null,
        default: null
      },
      placeholder: {
        type: String,
        default: ''
      },
      error: {
        type: String || null,
        default: null
      },
      autocomplete: {
        type: Boolean || String,
        default: false
      },
      disabled: {
        type: Boolean || String,
        default: false
      },
    },
    data() {
      return {
        isFocus: false
      }
    },
    methods: {
      updateInput(event) {
        this.$emit('input', event.target.value)
      },
      handlerFocus() {
        this.isFocus = true;
      },
      handlerBlur() {
        this.isFocus = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .form-group {
    position: relative;
    display: block;
    width: 100%;
    padding: 14px 33px 14px 14px;
    z-index: 10;

    &.is-focus {

      &::before {
        box-shadow: 0 0 0 2px $primary;
      }

      .form-label {
        color: $primary-dark;
      }
    }

    &.is-error {

      &::before {
        box-shadow: 0 0 0 2px $danger;
      }

      .form-label {
        color: $danger;
      }
    }

    &::before {
      content: '';
      @extend %posABS;
      box-shadow: 0 0 0 1px $primary;
      border-radius: 4px;
      transition: 0.5s linear;
      z-index: -2;
    }

    .form-label {
      position: absolute;
      top: -10px;
      left: 12px;
      padding: 0 3px;
      color: $primary;
      background: $light;
      transition: $transition-time-main;
      z-index: 5;
    }

    .form-control {
      font-size: 1rem;
      font-weight: normal;
      color: $dark;
      caret-color: $primary;
      width: 100%;
      border: none;
      background: transparent;
      outline: none;

      &::placeholder {
        color: $gray;
      }
    }

    .error-message {
      position: absolute;
      left: 0;
      bottom: -25px;
      display: flex;
      align-items: center;
      color: $danger;
      font-size: .875rem;

      svg {
        fill: $danger-dark;
        width: 14px;
        height: 14px;
        margin-right: 5px;
      }
    }
  }
</style>

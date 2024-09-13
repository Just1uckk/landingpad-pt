<template>
  <div class="accordion">
    <ul class="accordion-list">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Accordion',
    provide() {
      return { accordion: this.accordion };
    },
    props: {
      idActiveElement: {
        type: Number,
        default: null
      }
    },
    data() {
      return {
        accordion: {
          active: null
        },
      };
    },
    mounted() {
      this.accordion.active = this.idActiveElement
    }
  }
</script>

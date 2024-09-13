<template>
  <div class="services-list">
    <accordion :id-active-element="initIdActiveElement">
      <accordion-item v-for="service in services" :id="service.id" :key="service.id">
        <template slot="accordion-title">
          <div>{{service.name}}</div>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template slot="accordion-content">
          <div v-html="convertMarkdownToHtml(service.description)"></div>
        </template>
      </accordion-item>
    </accordion>
  </div>
</template>

<script>
  import Accordion from "~/components/UI/accordion/Accordion";
  import AccordionItem from "~/components/UI/accordion/AccordionItem";
  import {convertData} from "~/mixins/convertData";

  export default {
    name: 'ServicesList',
    mixins: [convertData],
    components: {AccordionItem, Accordion},
    props: {
      initIdActiveElement: {
        type: Number || null,
        default: null
      },
      services: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>

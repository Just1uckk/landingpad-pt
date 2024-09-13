<template>
  <aside class="services-sidebar">
    <services-nav :nav-list="navList" />
    <help-find-card :is-small="true" :question-button-text="questionButtonText"/>
  </aside>
</template>

<script>
  import ServicesNav from "~/components/services/ServicesNav";
  import HelpFindCard from "~/components/card/HelpFindCard";
  export default {
    name: 'ServicesSidebar',
    components: {HelpFindCard, ServicesNav},
    props: {
      navList: {
        type: Array,
        required: true
      },
      questionButtonText: {
        type: String,
        default: 'Ask a question'
      }
    }
  }
</script>

<style scoped>

</style>

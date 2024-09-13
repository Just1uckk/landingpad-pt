<template>
  <section id="services-single" class="services-single-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-11 col-md-12">
          <app-page-navigation :navigation-data="navigationData" class="mb-4"/>
          <section-info :title-text="sectionData.title" icon-position="right" tag="h1"/>
        </div>
        <div class="col-sm-11 col-md-7 col-lg-8 col-xl-9">
          <services-list :init-id-active-element="initIdActiveElement" :services="sectionData.services_lists"/>
        </div>
        <div class="col-sm-11 col-md-5 col-lg-4 col-xl-3">
          <services-sidebar :nav-list="sectionData.navList" :question-button-text="sectionData.questionButtonText"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import SectionInfo from "~/components/UI/SectionInfo";
  import ServicesList from "~/components/services/ServicesList";
  import ServicesSidebar from "~/components/services/ServicesSidebar";
  import AppPageNavigation from "~/components/UI/AppPageNavigation";
  import {sections} from "~/mixins/sections";

  export default {
    name: 'ServicesSingleSection',
    components: {ServicesSidebar, ServicesList, SectionInfo,AppPageNavigation},
    mixins: [sections],
    props: {
      initIdActiveElement: {
        type: Number || null,
        default: null
      },
      navigationData: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .services-single-section {
    padding: 100px 0 60px;

    ::v-deep {
      .section-info {
        margin-bottom: 30px;

        .section-title {
          &__text {
            @media (max-width: $sm) {
              font-size: 2.25rem;
            }
          }
        }
      }
    }
  }
</style>

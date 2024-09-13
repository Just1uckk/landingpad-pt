<template>
  <section id="team" class="team-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 text-center">
          <section-info :title-text="sectionData.title" :description-text="sectionData.description"/>
        </div>
        <div v-for="team in teamList" :key="team.id" class="col-sm-6 col-lg-5">
          <team-card :team="team"/>
        </div>
      </div>
      <div class="team-section__background-decor-top"></div>
      <div class="team-section__background-decor-bottom"></div>
    </div>
  </section>
</template>

<script>
import {sections} from "~/mixins/sections";
import TeamCard from "~/components/card/TeamCard";

export default {
  name: 'TeamSection',
  components: {TeamCard},
  mixins: [sections],
  props: {
    teamList: {
      type: Array,
      required: true
    },
  },
}
</script>

<style lang="scss" scoped>
.team-section {
  margin: 80px 0 60px;

  @media (min-width: $sm) {
    margin: 140px 0 100px;
  }

  ::v-deep {

    .section-info {
      margin-bottom: 60px;

      .section-title {
        margin-bottom: 10px;
      }

      .section-description {
        max-width: 350px;
        margin: 0 auto;
      }
    }
  }

  .container {
    position: relative;
    border-radius: 16px;
    background: $primary-lighten-40;
    padding: 60px 15px 30px;
    overflow: hidden;
    z-index: 5;

    @media (min-width: $sm) {
      padding: 80px 15px 50px;
    }
  }

  &__background-decor-top {
    @include circleDecor(100px, 190px, 190px, -30px, -30px, auto, auto, $primary-lighten-10);
  }

  &__background-decor-bottom {
    @include circleDecor(150px, 250px, 250px, auto, auto, -90px, -90px, $primary-lighten-10);
  }
}
</style>

<template>
  <div class="team-card">
    <div v-if="team.team.image" class="team-card-prev">
      <img :src="getFullImageUrl(team.team.image.url)" :alt="team.team.name">
    </div>
    <div class="team-card-body">
      <h4 class="team-card__name">
        {{team.team.name}}
      </h4>
      <div class="team-card__position">
        {{team.team.position}}
      </div>
      <div class="team-card__description" v-html="convertMarkdownToHtml(team.team.description)"></div>
    </div>
  </div>
</template>

<script>
  import {helperImage} from "~/mixins/helperImage";
  import {convertData} from "~/mixins/convertData";

  export default {
    name: 'TeamCard',
    mixins: [helperImage, convertData],
    props: {
      team: {
        type: Object,
        required: true
      }
    },
  }
</script>

<style lang="scss" scoped>
  .team-card {
    position: relative;
    max-width: 340px;
    margin: 0 auto 64px;

    &-prev {
      position: relative;
      width: 190px;
      height: 190px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto 25px;

      img {
        @extend %posABS;
        @extend %img;
        border-radius: 50%;
      }
    }

    &-body {
      text-align: center;
    }

    &__name {
      font-size: 1.125rem;
      font-weight: bold;
      margin-bottom: 5px;
    }

    &__position {
      color: $primary;
      font-size: .875rem;
      font-weight: 500;
      margin-bottom: 20px;
      min-height: 18px;
    }

    &__description {
      font-size: .875rem;
      line-height: 1.8125rem;

      ::v-deep {

        p {

          &:last-of-type {
            margin-bottom: 0;
          }
        }

        a {
          color: $primary;
          @extend %decorLink;
        }
      }
    }
  }
</style>

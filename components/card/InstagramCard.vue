<template>
  <a :href="link" target="_blank" rel="noopener noreferrer" title="Instagram photo" class="insta-card">
    <img :src="mediaLink" alt="Instagram photo" class="insta-card__img">

    <div class="insta-card-placeholder">
      <LinkSvg class="insta-card-placeholder__icon" />
      <p class="insta-card-placeholder__title">View post</p>

    </div>
  </a>
</template>

<script>
import LinkSvg from "~/components/svg/LinkSvg";

export default {
  name: "InstagramCard",
  components: { LinkSvg },
  props: {
    link: {
      type: String,
      required: true
    },
    mediaLink: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.insta-card {
  display: inline-flex;
  width: 100%;
  padding-top: 100%;
  position: relative;
  border-radius: 13px;
  overflow: hidden;
  margin-bottom: 30px;

  &__img {
    @extend %posABS;
    @extend %img;
    transition: transform 0.5s ease;
  }
}

.insta-card-placeholder {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(41, 103, 240, 0.8);
  opacity: 0;
  transition: opacity, 0.5s ease;

  &__icon {
    fill: #fff;
    width: 25px;
    height: 25px;
    margin-bottom: 12px;
  }

  &__title {
    font-size: 19px;
    color: #ffffff;
    font-weight: 500;
  }
}

.insta-card:hover {
  .insta-card__img {
    transform: scale(1.1);
  }

  .insta-card-placeholder {
    opacity: 1;
  }
}
</style>

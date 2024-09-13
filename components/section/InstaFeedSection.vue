<template>
  <div id="insta" class="insta-section text-center" v-if="sectionData.instaFeed.length">
    <div class="container-lg text-center">
      <section-info :title-text="sectionData.title"
                    :tag="'div'"
                    icon-position="right" class="insta-section-title" />

      <div class="insta-feed-wrap ">
        <div class="row justify-content-center">
          <div v-for="instaPost in sectionData.instaFeed" :key="instaPost.id" class="col-10 col-sm-6 col-lg-4">
            <InstagramCard :link="instaPost.permalink" :media-link="instaPost.media_url" />
          </div>
        </div>

        <a :href="instaAccountLink" class="insta-profile-link" target="_blank" rel="noopener noreferrer">View all
          posts</a>
      </div>

    </div>
  </div>
</template>

<script>
import { sections } from "~/mixins/sections";
import InstagramCard from "~/components/card/InstagramCard";

const instaAccountLink = process.env.VUE_APP_INSTAGRAM_ACCOUNT_LINK;

export default {
  name: "InstaFeedSection",
  components: { InstagramCard },
  mixins: [sections],
  data() {
    return {
      instaAccountLink
    };
  }
};
</script>

<style lang="scss" scoped>
.insta-section {
  padding-top: 80px;
  padding-bottom: 50px;
}

.insta-section-title {
  margin-bottom: 60px;
}

.insta-profile-link {
  display: inline-flex;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  color: $primary;
}
</style>

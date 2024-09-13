<template>
  <div class="seo-page">
    <seo-page-section :section-data="seoSectionSingleData" :navigation-links="seoSectionData"
                      :navigation-data="seoNavigationData"/>
    <reviews-section :section-data="reviewsSectionData" :reviews-list="reviewsSectionList"/>
    <book-section :section-data="bookSectionData"/>
    <bookmark-section :section-data="seoSectionData"/>
  </div>
</template>

<script>
import BookSection from '~/components/section/BookSection';
import ReviewsSection from '~/components/section/ReviewsSection';
import SeoPageSection from '~/components/section/SeoPageSection';
import BookmarkSection from '~/components/section/BookmarkSection';

export default {
  name: 'SeoPage',
  components: { SeoPageSection, ReviewsSection, BookSection, BookmarkSection },
  async asyncData ({ $api, route, store, error }) {
    let seoSectionData = [];
    seoSectionData = store.state.layout.sectionData.seoSectionData;
    let seoSectionSingleData = {};
    await seoSectionData.forEach((x) => {
      if (x.slug === route.params.chapter) {
        seoSectionSingleData = x;
      }
    });
    if (Object.keys(seoSectionSingleData).length === 0) {
      error({ statusCode: 404, message: 'Post not found' });
    }
    const seoNavigationData = $api.sectionService.getNavData(route);
    const bookSectionData = store.state.layout.sectionData.bookSectionData;
    const reviewsSectionData = await $api.sectionService.getReviewsSection();
    const reviewsSectionList = await $api.sectionService.getReviewsList();
    if (!seoSectionSingleData.contentNav) {
      seoSectionSingleData.contentNav = $api.sectionService.getContentList(seoSectionSingleData.PageComponents);
    }
    return {
      bookSectionData,
      reviewsSectionData,
      reviewsSectionList,
      seoNavigationData,
      seoSectionData,
      seoSectionSingleData,
    };
  },
  head () {
    return {
      title: this.seoSectionSingleData?.Meta?.title || 'LandingPad',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.seoSectionSingleData?.Meta?.description || 'LandingPad',
        },
      ],
    };
  },
};
</script>


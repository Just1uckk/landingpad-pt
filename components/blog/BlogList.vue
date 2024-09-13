<template>
  <div class="row">
    <div v-for="blog in list" :key="blog.id" class="col-xl-12 col-blog">
      <blog-card :blog="blog"/>
    </div>
  </div>
</template>

<script>
  import BlogCard from "~/components/card/BlogCard";
  export default {
    name: 'BlogList',
    components: {BlogCard},
    props: {
      list: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
.row {
  .col-blog {
    ::v-deep {
      .blog-card {
        margin-bottom: 24px;
      }
    }
  }
}
</style>

<template>
  <footer class="app-footer">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <div class="app-footer__copyright">
            ©LandingPad. All rights reserved
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

  export default {
    name: 'AppFooter',
  }
</script>

<style lang="scss" scoped>
.app-footer {
  padding: 20px 0;

  &__copyright {
    font-size: .875rem;
  }
}
</style>

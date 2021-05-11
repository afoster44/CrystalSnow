<template>
  <div class="container-fluid">
    <div class="row">
      <div class="home container-fluid main-picture">
        <div class="row">
          <div class="col-sm-12">
            <!-- <img src="https://bcw.blob.core.windows.net/public/img/8600856373152463" alt="CodeWorks Logo"> -->
            <div class="row">
              <div class="col-sm-3 mt-1">
                <h1 class="main-title bg-dark text-light p-3 rounded">
                  <span class="text-white">Crystal Snow Yes yes yes</span>
                  <p class="mt-5">
                    yo
                  </p>
                  <a class="btn btn-primary smooth-goto" @click="goto('about')">Discover More</a>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row about-section" ref="about">
      <AboutSectionComponent />
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  name: 'Home',
  methods: {
    goto(refName) {
      const element = this.$refs[refName]
      const top = element.offsetTop

      window.scrollTo(0, top)
    }
  },
  setup() {
    const route = useRoute()
    return {
      route

      // resetRoute() {
      // //   $('.smooth-goto').on('click', function() {
      // //     $('html, body').animate({ scrollTop: $(this.hash).offset().top - 50 }, 1000)
      // //     return false
      // //   })
      // // }
    }
  }
}
</script>

<style scoped lang="scss">

.main-picture {
  min-width: 100vw;
  min-height: 100vh;
  background-image: url('https://assets-publicworks.elpasoco.com/wp-content/uploads/Road-Fleet-Photos/SnowPlowStreet.jpg');

  background-size: cover;
}

.main-title {
  min-height: 100vh;
  min-width: 10vh;

}

// .about-section {
//   min-height: 50vh;
// }

</style>

<template>
  <div class="home container-fluid img-fluid ">
    <div class="row">
      <div class="col-sm-12 main-picture">
        <!-- <img src="https://bcw.blob.core.windows.net/public/img/8600856373152463" alt="CodeWorks Logo"> -->
        <div class="row">
          <div class="col-sm-3 mt-1">
            <h1 class="main-title bg-dark text-light p-3 rounded">
              <span class="text-white">Crystal Snow Yes yes yes</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.main-picture {
  min-height: 100vh;
  background-image: url('https://assets-publicworks.elpasoco.com/wp-content/uploads/Road-Fleet-Photos/SnowPlowStreet.jpg');

  background-size: cover;
}

.main-title {
  min-height: 100vh;
  min-width: 10vh;

}

</style>

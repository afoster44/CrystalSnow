<template>
  <div class="container-fluid">
    <div class="row about-section" ref="about">
      <div class="col-6 bg-success">
        <h1>hello</h1>
      </div>
      <div class="col-6 bg-primary">
        <h1>
          hello
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSectionComponent',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

.about-section {
  min-height: 50vh;
}
</style>

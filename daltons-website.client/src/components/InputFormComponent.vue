<template>
  <div class="input-form-component">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Company</label>
        <input type="text" class="form-control" placeholder="Company">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Description</label>
        <input type="text" class="form-control" placeholder="Description">
        <small>Please leave us a description of your needs</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Phone</label>
        <input type="number" class="form-control" placeholder="Phone">
        <small>Ex. ########## (no - or ())</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Email</label>
        <input type="email" class="form-control" placeholder="Email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Location</label>
        <input type="text" class="form-control" placeholder="Location">
        <small>Please leave us your street address for our records</small>
      </div>
      <button type="submit" class="btn btn-success btn-block">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'InputFormComponent',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <div class="input-form-component">
    <form @submit.prevent="createWorkOrder">
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input type="text" class="form-control" placeholder="Enter name" id="name" v-model="state.workOrder.name">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Company</label>
        <input type="text" class="form-control" placeholder="Company" id="company" v-model="state.workOrder.company">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Description</label>
        <input type="text" class="form-control" placeholder="Description" id="description" v-model="state.workOrder.description">
        <small>Please leave us a description of your needs</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Phone</label>
        <input type="number" class="form-control" placeholder="Phone" id="phone" v-model="state.workOrder.phone">
        <small>Ex. ########## (no - or ())</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Email</label>
        <input type="email" class="form-control" placeholder="Email" id="email" v-model="state.workOrder.email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Location</label>
        <input type="text" class="form-control" placeholder="Location" id="location" v-model="state.workOrder.location">
        <small>Please leave us your street address for our records</small>
      </div>
      <button type="submit" class="btn btn-success btn-block">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { logger } from '../utils/Logger'
export default {
  name: 'InputFormComponent',
  setup() {
    const state = reactive({
      workOrder: {}
    })
    return {
      state,
      createWorkOrder() {
        logger.log(state.workOrder)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>

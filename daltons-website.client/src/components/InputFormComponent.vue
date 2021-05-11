<template>
  <div class="input-form-component">
    <form @submit.prevent="createWorkOrder">
      <div class="form-group my-3">
        <label for="exampleInputEmail1">Name</label>
        <input type="text" class="form-control" placeholder="Enter name" id="name" v-model="state.workOrder.name">
      </div>
      <div class="form-group my-3">
        <label for="exampleInputPassword1">Company</label>
        <input type="text" class="form-control" placeholder="Company" id="company" v-model="state.workOrder.company">
      </div>
      <div class="form-group my-3">
        <label for="exampleInputPassword1">Description</label>
        <input type="text" class="form-control" placeholder="Description" id="description" v-model="state.workOrder.description">
        <small>Please leave us a description of your needs</small>
      </div>
      <div class="form-group my-3">
        <label for="exampleInputPassword1">Phone</label>
        <input type="number" class="form-control" placeholder="Phone" id="phone" v-model="state.workOrder.phone">
        <small>Ex. ########## (no - or ())</small>
      </div>
      <div class="form-group my-3">
        <label for="exampleInputPassword1">Email</label>
        <input type="email" class="form-control" placeholder="Email" id="email" v-model="state.workOrder.email">
      </div>
      <div class="form-group my-3">
        <label for="exampleInputPassword1">Location</label>
        <input type="text" class="form-control" placeholder="Location" id="location" v-model="state.workOrder.location">
        <small>Please leave us your street address for our records</small>
      </div>
      <button type="submit" class="btn btn-success btn-block my-3">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { workOrdersService } from '../services/WorkOrdersService'
import Swal from 'sweetalert2'

export default {
  name: 'InputFormComponent',
  setup() {
    const state = reactive({
      workOrder: {}
    })
    return {
      state,
      async createWorkOrder() {
        Swal.fire({
          title: 'Are you sure?',
          text: 'You will not be able to recover this imaginary file!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Please create my request!',
          cancelButtonText: 'I need to make a change'
        }).then(async(result) => {
          if (result.value) {
            await workOrdersService.createWorkOrder(state.workOrder)
            Swal.fire(
              'Work order recieved!',
              'Thank you for choosing Crystal Snow!',
              'success'
            )
            // For more information about handling dismissals please visit
            // https://sweetalert2.github.io/#handling-dismissals
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Cancelled',
              'Please make your changes',
              'error'
            )
          }
        })
      }

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.input-form-component {
  margin-top: 3rem;
}

</style>

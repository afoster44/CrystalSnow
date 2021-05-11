<template>
  <div class="work-orders-page container-fluid">
    <div class="row">
      <div class="col-8 offset-2">
        <h3 class="text-center">
          Thank you for choosing Crystal Snow, we are looking forward to taking care of your snow removal needs
        </h3>
        <!-- I believe we should go with a straight up input
        form here...modals would look odd -->
        <div class="row">
          <div class="col-12 card">
            <InputFormComponent />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkOrdersPage',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>

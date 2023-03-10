<template>
  <div class="no-task absolute-center">
    <q-icon name="whatshot" size="150px" color="primary"></q-icon>
    <div class="text-h4 text-primary text-center text-capitalize">no tasks</div>
  </div>
</template>
<script>
export default {
  name: "TodoEmpty",
};
</script>

<style lang="scss">
.no-task {
  user-select: none;
  opacity: 0.5;
}
</style>

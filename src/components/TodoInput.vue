<template>
  <q-input
    @keyup.enter="addTask"
    filled
    class="col"
    label="Add your task"
    dense
  >
    <template v-slot:append>
      <q-btn @click="addTask" round flat dense icon="add" />
    </template>
  </q-input>
</template>
<script>
export default {
  name: "TodoInput",

  setup(_, { emit }) {
    const addTask = () => {
      emit("addTask");
    };
    return {
      addTask,
    };
  },
};
</script>

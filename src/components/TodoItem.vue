<template>
  <q-item>
    <q-item-section avatar>
      <q-checkbox
        class="no-pointer-events"
        v-model="task_data.done"
        color="primary"
      />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ task_data.title }}</q-item-label>
    </q-item-section>
    <q-item-section v-if="task_data.done" side>
      <q-btn
        @click.stop="deleteTask"
        dense
        round
        color="primary"
        icon="delete"
      />
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    task_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  setup(props, { emit }) {
    const deleteTask = () => {
      emit("deleteTask");
    };
    return {
      deleteTask,
    };
  },
};
</script>

<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: $primary;
  }
}
</style>

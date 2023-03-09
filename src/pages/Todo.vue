<template>
  <q-page class="q-pa-lg column">
    <div class="row q-pa-sm q-mb-md bg-red-1">
      <q-input
        @keyup.enter="addTask"
        filled
        v-model="newTask"
        class="col"
        label="Add your task"
        dense
      >
        <template v-slot:append>
          <q-btn
            :disabled="!newTask"
            @click="addTask"
            round
            flat
            dense
            icon="add"
          />
        </template>
      </q-input>
    </div>
    <q-list separator bordered>
      <q-item
        @click="task.done = !task.done"
        clickable
        :class="{ 'done bg-red-1': task.done }"
        v-for="(task, index) in tasks"
        :key="task.title"
        v-ripple
      >
        <q-item-section avatar>
          <q-checkbox
            class="no-pointer-events"
            v-model="task.done"
            val="teal"
            color="primary"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done" side>
          <q-btn
            @click.stop="deleteTask(index)"
            dense
            round
            color="primary"
            icon="delete"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
export default {
  setup() {
    const newTask = ref("");
    const tasks = ref([]);
    const $q = useQuasar();
    return {
      tasks,
      newTask,
      addTask() {
        tasks.value.push({
          title: newTask.value,
          done: false,
        });
        newTask.value = "";
      },
      deleteTask(index) {
        $q.dialog({
          title: "Confirm",
          message: "Are you sure you want to delete the task?",
          cancel: true,
          persistent: true,
        }).onOk(() => {
          tasks.value.splice(index, 1);
          $q.notify({
            type: "positive",
            message: "Your task has been deleted.",
          });
        });
      },
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

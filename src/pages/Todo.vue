<template>
  <q-page class="q-pa-lg column">
    <div class="row q-pa-sm q-mb-md">
      <q-input
        @keyup.enter="addTask"
        filled
        v-model="newTask"
        class="col"
        label="Add your task"
        dense
      >
        <template v-slot:append>
          <q-btn @click="addTask" round flat dense icon="add" />
        </template>
      </q-input>
    </div>
    <q-list separator bordered>
      <TodoItem
        v-for="task in tasks"
        :key="task.id"
        :task_data="task"
        @toggleDone="toggleDone(task.id)"
        @deleteTask="deleteTask(task.id)"
      />
    </q-list>
    <TodoEmpty v-if="!tasks.length" />
  </q-page>
</template>

<script>
import { ref, onMounted } from "vue";
import { useQuasar } from "quasar";
import {
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase";
import TodoItem from "../components/TodoItem.vue";
import TodoEmpty from "../components/TodoEmpty.vue";

export default {
  components: { TodoItem, TodoEmpty },
  setup() {
    const tasksCollectionRef = collection(db, "tasks");
    const tasksCollectionQuery = query(
      tasksCollectionRef,
      orderBy("date", "desc")
    );
    const newTask = ref("");
    const tasks = ref([]);
    const $q = useQuasar();
    onMounted(() => {
      onSnapshot(tasksCollectionQuery, (querySnapshot) => {
        const fbTasks = [];
        querySnapshot.forEach((doc) => {
          const task = {
            id: doc.id,
            title:
              doc.data().title.charAt(0).toUpperCase() +
              doc.data().title.slice(1),
            done: doc.data().done,
          };
          fbTasks.push(task);
        });
        tasks.value = fbTasks;
      });
    });
    return {
      tasks,
      newTask,
      addTask() {
        if (newTask.value.trim() === "") {
          $q.notify({
            type: "negative",
            message: "Your task is empty",
          });
        } else if (
          tasks.value.some(
            (el) =>
              el.title.trim().toLowerCase() ===
              newTask.value.trim().toLowerCase()
          )
        ) {
          $q.notify({
            type: "negative",
            message: "Your task has already been added",
          });
        } else {
          addDoc(tasksCollectionRef, {
            title: newTask.value,
            done: false,
            date: Date.now(),
          });
          newTask.value = "";
          $q.notify({
            type: "positive",
            message: "Your task has been added.",
          });
        }
      },
      deleteTask(id) {
        $q.dialog({
          title: "Confirm",
          message: "Are you sure you want to delete the task?",
          cancel: true,
          persistent: true,
        }).onOk(() => {
          deleteDoc(doc(tasksCollectionRef, id));
          $q.notify({
            type: "positive",
            message: "Your task has been deleted.",
          });
        });
      },
      toggleDone(id) {
        const index = tasks.value.findIndex((task) => task.id === id);
        updateDoc(doc(tasksCollectionRef, id), {
          done: !tasks.value[index].done,
        });
      },
    };
  },
};
</script>

<style lang="scss">
// .done {
//   .q-item__label {
//     text-decoration: line-through;
//     color: $primary;
//   }
// }
.no-task {
  opacity: 0.5;
}
</style>

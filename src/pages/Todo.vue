<template>
  <q-page class="q-pa-lg column">
    <q-list separator bordered>
      <q-item
        @click="task.done = !task.done"
        clickable
        :class="{ 'done bg-red-1': task.done }"
        v-for="task in tasks"
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
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          title: "one",
          done: true,
        },
        {
          title: "two",
          done: false,
        },
        {
          title: "three",
          done: false,
        },
      ],
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

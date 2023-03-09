<template>
  <q-header reveal class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="sendLeftDrawer" />
    </q-toolbar>
    <div class="q-pt-md q-px-lg q-mb-md">
      <div class="text-h3 text-weight-bolder">TODO List</div>
      <div class="text-subtitle1">{{ todaysDate }}</div>
    </div>
    <q-img class="header-img absolute-top" src="~/assets/dragon.jpg" />
  </q-header>
</template>

<script>
import { date } from "quasar";

export default {
  name: "MainHeader",
  computed: {
    todaysDate() {
      const timeStamp = Date.now();
      return date.formatDate(timeStamp, "dddd DD-MM-YYYY");
    },
  },
  setup(_, { emit }) {
    const sendLeftDrawer = (e) => {
      emit("toggleLeftDrawer");
    };
    return {
      sendLeftDrawer,
    };
  },
};
</script>

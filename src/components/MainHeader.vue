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

<style lang="scss">
.header-img {
  height: 100%;
  z-index: -1;
  &::after {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: inset 25em 0 10em rgba(0, 0, 0, 0.5);
  }
}
</style>

<template>
  <q-layout view="lHh lpr fFf">
    <MainHeader @toggleLeftDrawer="toggleLeftDrawer" />

    <NavLinks v-model="leftDrawerOpen" />

    <MainContent />

    <MainFooter />
  </q-layout>
</template>

<script>
import { ref } from "vue";
import MainHeader from "src/components/MainHeader.vue";
import NavLinks from "src/components/NavLinks.vue";
import MainFooter from "src/components/MainFooter.vue";
import MainContent from "src/components/MainContent.vue";

export default {
  name: "MainLayout",
  components: { MainHeader, NavLinks, MainContent, MainFooter },
  setup() {
    const leftDrawerOpen = ref(false);
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

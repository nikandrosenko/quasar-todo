<template>
  <q-layout view="lHh lpr fFf">
    <MainHeader @toggleLeftDrawer="toggleLeftDrawer" />

    <NavLinks v-model="leftDrawerOpen" />

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition mode="out-in" appear @enter="enter">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </q-page-container>

    <MainFooter />
  </q-layout>
</template>

<script>
import { ref } from "vue";
import gsap from "gsap";
import MainHeader from "src/components/MainHeader.vue";
import NavLinks from "src/components/NavLinks.vue";
import MainFooter from "src/components/MainFooter.vue";

export default {
  name: "MainLayout",
  components: { MainHeader, NavLinks, MainFooter },
  setup() {
    const leftDrawerOpen = ref(false);
    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      enter(el) {
        gsap.fromTo(
          el,
          {
            y: -100,
            opacity: 0,
          },
          {
            delay: 0.5,
            duration: 1,
            y: 0,
            opacity: 1,
          }
        );
      },
    };
  },
};
</script>

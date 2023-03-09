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

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toggle
          class="absolute-right q-px-md"
          v-model="value"
          :label="value"
          @click="$q.dark.toggle()"
          color="dark"
          false-value="Light"
          true-value="Dark"
          keep-color
        />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { useQuasar, date } from "quasar";
import gsap from "gsap";
import MainHeader from "src/components/MainHeader.vue";
import NavLinks from "src/components/NavLinks.vue";

export default {
  name: "MainLayout",
  components: { MainHeader, NavLinks },
  setup() {
    const leftDrawerOpen = ref(false);
    const $q = useQuasar();
    $q.dark.set(true);
    $q.dark.toggle();

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      value: ref("Light"),
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
.avatar-bg-shadow {
  z-index: 0;
  &::after {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: inset 0 -5em 3em -7px rgba(0, 0, 0, 0.8);
  }
}
</style>

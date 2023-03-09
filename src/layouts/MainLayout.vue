<template>
  <q-layout view="lHh lpr fFf">
    <q-header reveal class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
      </q-toolbar>
      <div class="q-pt-md q-px-lg q-mb-md">
        <div class="text-h3 text-weight-bolder">TODO List</div>
        <div class="text-subtitle1">{{ todaysDate }}</div>
      </div>
      <q-img class="header-img absolute-top" src="~/assets/dragon.jpg" />
    </q-header>

    <NavLinks
      v-model="leftDrawerOpen"
      show-if-above
      side="left"
      elevated
      :width="250"
      :breakpoint="600"
    />

    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <transition mode="out-in" appear @enter="enter">
            <component :is="Component" />
          </transition>
        </keep-alive>
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
import { watch, ref } from "vue";
import { useQuasar, date } from "quasar";
import gsap from "gsap";
import NavLinks from "src/components/NavLinks.vue";

export default {
  name: "MainLayout",
  components: { NavLinks },
  computed: {
    todaysDate() {
      const timeStamp = Date.now();
      return date.formatDate(timeStamp, "dddd DD-MM-YYYY");
    },
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);
    const $q = useQuasar();
    $q.dark.set(true);
    $q.dark.toggle();
    watch(
      () => $q.dark.isActive,
      (val) => {
        console.log(val ? "On dark mode" : "On light mode");
      }
    );

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      drawer: ref(false),
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

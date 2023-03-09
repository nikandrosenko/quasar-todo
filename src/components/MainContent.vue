<template>
  <q-page-container>
    <router-view v-slot="{ Component }">
      <transition mode="out-in" appear @enter="enter">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </q-page-container>
</template>

<script>
import gsap from "gsap";

export default {
  name: "MainContent",
  setup() {
    return {
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

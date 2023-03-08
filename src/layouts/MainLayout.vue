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

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      elevated
      :width="250"
      :breakpoint="600"
    >
      <q-scroll-area
        style="
          height: calc(100% - 160px);
          margin-top: 160px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding class="menu-list">
          <q-item to="/" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="format_list_bulleted" />
            </q-item-section>
            <q-item-section> Todo </q-item-section>
          </q-item>
          <q-item to="/about" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="info_outline" />
            </q-item-section>
            <q-item-section> About </q-item-section>
          </q-item>
          <q-item to="/help" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help_outline" />
            </q-item-section>
            <q-item-section> Help </q-item-section>
          </q-item>
          <q-item to="/contacts" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="mail_outline" />
            </q-item-section>
            <q-item-section> Contacts </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <q-img
        class="absolute-top avatar-bg-shadow"
        src="~/assets/dungeon.jpg"
        style="height: 160px"
      >
        <div class="absolute-bottom bg-transparent" style="z-index: 1">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="~/assets/avatar-nik.jpg" />
          </q-avatar>
          <div class="text-weight-bold">Nikita Androsenko</div>
          <div>@nikita</div>
        </div>
      </q-img>
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered>
      <!-- drawer content -->
    </q-drawer>

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
import { watch, defineComponent, ref } from "vue";
import { useQuasar, date } from "quasar";
import gsap from "gsap";

export default defineComponent({
  name: "MainLayout",
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
    };
  },
  computed: {
    todaysDate() {
      const timeStamp = Date.now();
      return date.formatDate(timeStamp, "dddd DD-MM-YYYY");
    },
  },
  methods: {
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
  },
});
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

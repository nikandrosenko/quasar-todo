<template>
  <q-layout view="lHh lpr fFf">
    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title> TODO List </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" elevated>
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding class="menu-list">
          <q-item active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="looks_one" />
            </q-item-section>

            <q-item-section> One </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="looks_two" />
            </q-item-section>

            <q-item-section> Two </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="looks_3" />
            </q-item-section>

            <q-item-section> Three </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="looks_4" />
            </q-item-section>

            <q-item-section> Four </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
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
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>Quasar project 1T</div>
        </q-toolbar-title>
        <q-toggle
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
import { useQuasar } from "quasar";

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
});
</script>

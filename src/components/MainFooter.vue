<template>
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
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";

export default {
  name: "MainFooter",
  setup() {
    const $q = useQuasar();
    $q.dark.set(true);
    $q.dark.toggle();

    return {
      value: ref("Light"),
    };
  },
};
</script>

<template>
  <q-drawer>
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
</template>

<script>
export default {
  name: "NavLinks",
};
</script>

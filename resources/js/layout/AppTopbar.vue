<template>
  <div :class="layoutClass">
    <button class="p-link layout-menu-button" @click="onMenuToggle">
      <span class="pi pi-bars"></span>
    </button>
    <div class="layout-topbar-icons">
      <span class="layout-topbar-search">
        <InputText type="text" placeholder="Search" />
        <span class="layout-topbar-search-icon pi pi-search"></span>
      </span>
      <button class="p-link">
        <span class="layout-topbar-item-text">Events</span>
        <span class="layout-topbar-icon pi pi-calendar"></span>
        <!-- <span class="layout-topbar-badge">5</span> -->
      </button>
      <button class="p-link">
        <span class="layout-topbar-item-text">User</span>
        <span class="layout-topbar-icon pi pi-user"></span>
      </button>
      <button class="p-link" @click="onToggleConfig">
        <span class="layout-topbar-item-text">Settings</span>
        <span class="layout-topbar-icon pi pi-cog"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    colorMode: String,
  },
  computed: {
    layoutClass() {
      return ["layout-topbar", "p-shadow-5", "layout-topbar-" + this.colorMode];
    },
  },
  methods: {
    onMenuToggle(event) {
      this.$emit("menu-toggle", event);
    },
    onToggleConfig(event) {
      this.$emit("configToggle", event);
    },
  },
};
</script>

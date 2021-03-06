<template>
  <Toast />
  <div :class="containerClass" @click="onWrapperClick">
    <AppTopBar @menu-toggle="onMenuToggle" @config-toggle="onToggleConfig" :colorMode="layoutColorMode" />

    <transition name="layout-sidebar">
      <div :class="sidebarClass" @click="onSidebarClick" v-show="isSidebarVisible()">
        <div class="layout-logo">
          <inertia-link href="/">
            <img alt="Logo" :src="logo" style="width: 50%" />
          </inertia-link>
        </div>

        <AppProfile />
        <AppMenu :model="menu" @menuitem-click="onMenuItemClick" />
      </div>
    </transition>

    <div class="layout-main">
      <slot />
    </div>

    <AppConfig :layoutMode="layoutMode" ref="appConfig" :layoutColorMode="layoutColorMode" @layout-change="onLayoutChange" @layout-color-change="onLayoutColorChange" />

    <AppFooter :colorMode="layoutColorMode" :appName="settings.app_name" :appVersion="settings.app_version" />
  </div>
</template>

<script>
import AppTopBar from "./AppTopbar.vue";
import AppProfile from "./AppProfile.vue";
import AppMenu from "./AppMenu.vue";
import AppConfig from "./AppConfig.vue";
import AppFooter from "./AppFooter.vue";

export default {
  props: {
    settings: Object,
  },
  data() {
    return {
      layoutMode: "static",
      layoutColorMode: "dark",
      staticMenuInactive: false,
      overlayMenuActive: false,
      mobileMenuActive: false,
      menu: [
        { label: "Dashboard", icon: "pi pi-fw pi-home", to: "dashboard" },
        { label: "Users", icon: "pi pi-fw pi-users", to: "users" },
        { label: "Categories", icon: "pi pi-fw pi-list", to: "categories" },
        { label: "Posts", icon: "pi pi-fw pi-book", to: "posts" },
        { label: "Settings", icon: "pi pi-fw pi-cog", to: "settings" },
        { label: "Media", icon: "pi pi-fw pi-images", to: "media" },
      ],
    };
  },
  methods: {
    onToggleConfig(event) {
      this.$refs.appConfig.toggleConfigurator(event);
    },
    onWrapperClick() {
      if (!this.menuClick) {
        this.overlayMenuActive = false;
        this.mobileMenuActive = false;
      }

      this.menuClick = false;
    },
    onMenuToggle() {
      this.menuClick = true;

      if (this.isDesktop()) {
        if (this.layoutMode === "overlay") {
          if (this.mobileMenuActive === true) {
            this.overlayMenuActive = true;
          }

          this.overlayMenuActive = !this.overlayMenuActive;
          this.mobileMenuActive = false;
        } else if (this.layoutMode === "static") {
          this.staticMenuInactive = !this.staticMenuInactive;
        }
      } else {
        this.mobileMenuActive = !this.mobileMenuActive;
      }

      event.preventDefault();
    },
    onSidebarClick() {
      this.menuClick = true;
    },
    onMenuItemClick(event) {
      if (event.item && !event.item.items) {
        this.overlayMenuActive = false;
        this.mobileMenuActive = false;
      }
    },
    onLayoutChange(layoutMode) {
      this.layoutMode = layoutMode;
      this.saveSetting("menu_type", layoutMode);
    },
    onLayoutColorChange(layoutColorMode) {
      this.layoutColorMode = layoutColorMode;
      this.saveSetting("menu_theme", layoutColorMode);
    },
    addClass(element, className) {
      if (element.classList) element.classList.add(className);
      else element.className += " " + className;
    },
    removeClass(element, className) {
      if (element.classList) element.classList.remove(className);
      else element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    },
    isDesktop() {
      return window.innerWidth > 1024;
    },
    saveSetting(setting, value) {
      this.$inertia.visit(route("settings.store"), {
        method: "post",
        preserveState: true,
        preserveScroll: true,
        data: {
          key: setting,
          value: value,
        },
        onSuccess: () => {
          this.$toast.add({severity: 'info', summary: 'Success', detail: 'Layout changed', life: 2000});
        }
      });
    },
    isSidebarVisible() {
      if (this.isDesktop()) {
        if (this.layoutMode === "static") return !this.staticMenuInactive;
        else if (this.layoutMode === "overlay") return this.overlayMenuActive;
        else return true;
      } else {
        return true;
      }
    },
  },
  computed: {
    containerClass() {
      return [
        "layout-wrapper",
        {
          "layout-overlay": this.layoutMode === "overlay",
          "layout-static": this.layoutMode === "static",
          "layout-static-sidebar-inactive": this.staticMenuInactive && this.layoutMode === "static",
          "layout-overlay-sidebar-active": this.overlayMenuActive && this.layoutMode === "overlay",
          "layout-mobile-sidebar-active": this.mobileMenuActive,
          "p-input-filled": this.$appState.inputStyle === "filled",
          "p-ripple-disabled": this.$primevue.config.ripple === false,
        },
      ];
    },
    sidebarClass() {
      return [
        "layout-sidebar",
        {
          "layout-sidebar-dark": this.layoutColorMode === "dark",
          "layout-sidebar-deluxe": this.layoutColorMode === "deluxe",
        },
      ];
    },
    topbarClass() {
      return [
        "layout-sidebar",
        {
          "layout-topbar-dark": this.layoutColorMode === "dark",
          "layout-topbar-deluxe": this.layoutColorMode === "deluxe",
        },
      ];
    },
    logo() {
      return this.settings.admin_logo && this.settings.admin_logo !== "" ? "storage/" + this.settings.admin_logo : "assets/layout/images/v-logo.png";
    },
  },
  beforeUpdate() {
    if (this.mobileMenuActive) this.addClass(document.body, "body-overflow-hidden");
    else this.removeClass(document.body, "body-overflow-hidden");
  },
  mounted() {
    this.layoutMode = this.settings.menu_type;
    this.layoutColorMode = this.settings.menu_theme;
  },
  components: {
    AppTopBar: AppTopBar,
    AppProfile: AppProfile,
    AppMenu: AppMenu,
    AppConfig: AppConfig,
    AppFooter: AppFooter,
  },
};
</script>

<style lang="scss">
@import "@/assets/layout/App.scss";
</style>

<template>
  <div :class="layoutClass">
    <span class="footer-text" style="margin-right: 5px">{{ appName }} | version: {{ appVersion }} - MIT License</span>
    <span class="footer-text" style="margin-left: 5px"></span>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  props: {
    appName: String,
    appVersion: String,
    colorMode: String,
  },
  computed: {
    layoutClass() {
      return ["layout-footer", "layout-footer-" + this.colorMode];
    },
  },
};
</script>

<style scoped>
.layout-footer {
  text-align: center;
}
</style>

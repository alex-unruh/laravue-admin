<template>
  <div class="p-grid crud-demo">
    <div class="p-col-12">
      <Breadcrumb :model="breadcrumb" :title="title" :icon="icon" />
      <div class="card">
        <p>Settings Page</p>
      </div>
    </div>
  </div>
</template>

<script>
import Layout from "@/layout/App";
export default {
  layout: Layout,
  data() {
    return {
      title: "Settings",
      icon: "pi pi-fw pi-book",
      breadcrumb: [{ label: "Settings", route: "settings" }],
    };
  },
};
</script>

<style scoped lang="scss"></style>

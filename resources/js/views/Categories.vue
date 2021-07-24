<template>
  <div class="p-grid crud-demo">
    <div class="p-col-12">
      <Breadcrumb :model="breadcrumb" :title="title" :icon="icon" />
      <div class="card">
        <p>Categories Page</p>
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
      title: "Categories",
      icon: "pi pi-fw pi-book",
      breadcrumb: [{ label: "Categories", route: "categories" }],
    };
  },
};
</script>

<style scoped lang="scss"></style>

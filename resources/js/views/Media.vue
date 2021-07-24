<template>
  <div class="p-grid crud-demo">
    <div class="p-col-12">
      <Breadcrumb :model="breadcrumb" :title="title" :icon="icon" />
      <div class="card">
        <p>Media And Galleries Page</p>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from "@/service/ProductService";
import Layout from "@/layout/App";
export default {
  layout: Layout,
  data() {
    return {
      title: "Media",
      icon: "pi pi-fw pi-images",
      breadcrumb: [{ label: "Media", route: "media" }],
    };
  },
};
</script>

<style scoped lang="scss"></style>

<template>
  <div class="p-grid crud-demo">
    <div class="p-col-12">
      <Breadcrumb :model="breadcrumb" :title="title" :icon="icon" />
      <div class="card">
        <p>Posts Page</p>
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
      title: "Posts",
      icon: "pi pi-fw pi-book",
      breadcrumb: [{ label: "Posts", route: "posts" }],
    };
  },
};
</script>

<style scoped lang="scss"></style>

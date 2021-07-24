<template>
  <div class="p-grid">
    <div class="p-col-12">
      <Breadcrumb :model="breadcrumb" :title="title" :icon="icon" />
      <div class="card">
        <p>Dashboard Page</p>
      </div>
    </div>
  </div>
</template>

<script>
import Layout from "@/layout/App";
export default {
  layout: Layout,
  data(){
    return {
      title: 'Dashboard',
      icon: 'pi pi-fw pi-home',
      breadcrumb: []
    }
  }
};
</script>

<style scoped></style>

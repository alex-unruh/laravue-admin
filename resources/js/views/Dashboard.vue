<template>
  <inertia-head :title="title" />
  <div class="p-grid">
    <div class="p-col-12">
      <Breadcrumb :model="breadcrumb" />
      <div class="card">
        <h5>{{ title }}</h5>
        <p>Use this page to start from scratch and place your custom content.</p>
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
      breadcrumb: []
    }
  }
};
</script>

<style scoped></style>

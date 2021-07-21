<template>
  <nav class="p-breadcrumb p-component" aria-label="Breadcrumb">
    <ul>
      <li class="p-breadcrumb-home">
        <inertia-link :href="route('dashboard')" class="p-menuitem-link">
          <i class="pi pi-fw pi-home"></i>
        </inertia-link>
      </li>
      <li v-if="model.length > 0" v-for="(item, index) in model" :key="index" class="p-breadcrumb-chevron">
        <inertia-link v-if="item.route" :href="route(item.route)" class="p-menuitem-link">
          <i class="pi pi-chevron-right"></i>
          <i v-if="item.icon" :class="item.icon"></i><span class="p-menuitem-text">{{ item.label }}</span>
        </inertia-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    model: Array
  },
  computed: {
    containerClass() {
      return [{ "p-disabled": this.item.disabled }, this.item.class];
    },
    iconClass() {
      return ["p-menuitem-icon", this.item.icon];
    },
  },
};
</script>

<style>
.p-breadcrumb{
  margin-bottom: 10px;
}

.p-breadcrumb ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.p-breadcrumb .p-menuitem-text {
  line-height: 1;
}

.p-breadcrumb .p-menuitem-link {
  text-decoration: none;
  color: #999;
}

.pi-chevron-right{
  font-size: 12px;
  margin-right: 5px;
}
</style>

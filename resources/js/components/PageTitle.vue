<template>
  <inertia-head>
    <title v-if="pageInfo">{{ pageInfo.title }}</title>
    <meta v-if="pageInfo" name="description" content="{{ pageInfo.desc }}" />
  </inertia-head>

  <Breadcrumb :model="pageInfo" />
</template>

<script>
export default {
  props: {
    pageInfo: Object,
  },
};
</script>

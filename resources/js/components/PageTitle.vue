<template>
  <inertia-head>
    <title v-if="info">{{ info.title }}</title>
    <meta v-if="info" name="description" content="{{ info.desc }}" />
  </inertia-head>
</template>

<script>
export default {
  props: {
    info: Object,
  }
};
</script>

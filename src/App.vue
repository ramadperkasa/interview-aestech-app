<template>
  <component :is="layout" />
</template>

<script lang="ts" setup>
// Vue
import { computed } from 'vue'

// Route
import { useRoute } from 'vue-router'

const route = useRoute()

const layout = computed(() => {
  return (route.meta?.layout ?? 'empty') + '-layout'
})
</script>

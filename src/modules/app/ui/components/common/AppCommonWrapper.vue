<template>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// Flowbite
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite()
})
</script>

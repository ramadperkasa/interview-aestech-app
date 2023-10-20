<template>
  <AppBaseNavbar />
  <AppBaseSidebar />

  <div class="lg:ml-64">
    <div
      id="main-content"
      class="pt-20 container mx-auto px-6 relative h-full bg-gray-50 overflow-y-auto dark:bg-gray-900"
    >
      <main>
        <RouterView />
      </main>

      <AppBaseFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppBaseNavbar from '../base/AppBaseNavbar.vue'
import AppBaseSidebar from '../base/AppBaseSidebar.vue'
import AppBaseFooter from '../base/AppBaseFooter.vue'
</script>

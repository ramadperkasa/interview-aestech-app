<template>
  <nav aria-label="Page navigation example">
    <ul class="inline-flex -space-x-px text-base h-10">
      <li>
        <a
          href="#"
          class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >Previous</a
        >
      </li>
      <li v-for="index in props.pagination.total / props.pagination.perPage" :key="index">
        <a
          href="#"
          class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          :class="[{ 'text-secondary !bg-secondary/20': props.pagination.page === index }]"
          >{{ index }}</a
        >
      </li>
      <li>
        <a
          href="#"
          class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >Next</a
        >
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps({
  pagination: {
    type: Object,
    required: true
  }
})
</script>

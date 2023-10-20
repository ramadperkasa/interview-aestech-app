<template>
  <button
    type="button"
    :disabled="props.loading"
    class="text-black hover:bg-gray-100 hover:text-gray-900 focus:ring-0 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
    :class="[computeColor, { 'opacity-50 cursor-not-allowed': props.loading }]"
  >
    <slot> Button </slot>
  </button>
</template>

<script setup lang="ts">
// Vue
import { computed } from 'vue'

// Constants
import { BUTTON_COLOR_SOLID, BUTTON_COLOR_OUTLINED } from '@/modules/app/constants/color.constant'

const props = defineProps({
  color: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'solid'
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const computeColor = computed(() => {
  return props.type === 'solid'
    ? BUTTON_COLOR_SOLID[props.color]
    : BUTTON_COLOR_OUTLINED[props.color]
})
</script>

<template>
  <div class="w-full p-5 rounded-xl items-center bg-white flex relative z-10 shadow-lg gap-5">
    <slot name="image"> </slot>
    <slot></slot>
    <slot name="action"> </slot>
  </div>
</template>

<script setup lang="ts"></script>

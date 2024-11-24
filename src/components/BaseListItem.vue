<script setup lang="ts">
defineProps<{
  label: string
  value: string
}>()
</script>
<template>
  <li class="flex flex-col gap-2 rounded bg-neutral-700 p-2.5">
    <span class="font-bold">{{ label }}</span>
    <span>{{ value || '-' }}</span>
  </li>
</template>

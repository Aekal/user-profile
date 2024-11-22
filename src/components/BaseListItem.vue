<script setup lang="ts">
defineProps<{
  label: string
  value: string
}>()
</script>
<template>
  <li class="flex flex-col gap-2">
    {{ label }}
    <div class="rounded bg-neutral-700 p-2.5">
      {{ value || '-' }}
    </div>
  </li>
</template>

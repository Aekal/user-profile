<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
defineProps<{
  label: string
}>()
const model = defineModel<string>()
</script>

<template>
  <label class="flex flex-col gap-1.5">
    {{ label }}
    <textarea
      v-bind="$attrs"
      v-model="model"
      class="rounded border p-1.5 text-neutral-700"
      rows="3"
    />
  </label>
</template>

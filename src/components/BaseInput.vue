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
    <input
      v-bind="$attrs"
      v-model="model"
      class="w-full rounded border p-1.5 text-neutral-700 placeholder:text-neutral-400"
    />
  </label>
</template>

<style scoped>
input[type='date']:invalid::-webkit-datetime-edit {
  @apply text-neutral-400;
}
</style>

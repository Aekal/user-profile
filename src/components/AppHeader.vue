<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="border-b border-neutral-600 gap-4 py-4 flex items-center justify-between px-4">
    <RouterLink :to="{ name: 'profile' }" class="shrink-0">
      <img src="@/assets/logo.svg" alt="Vue logo" class="w-8" />
    </RouterLink>
    <nav class="flex gap-x-10 gap-y-2 justify-center w-full flex-wrap">
      <RouterLink
        class="hover:underline hover:underline-offset-4"
        :to="{ name: 'profile' }"
        active-class="text-emerald-400"
        >Profile</RouterLink
      >
      <RouterLink
        class="hover:underline hover:underline-offset-4"
        :to="{ name: 'edit' }"
        active-class="text-emerald-500"
        >Edit Profile</RouterLink
      >
    </nav>
  </header>
</template>

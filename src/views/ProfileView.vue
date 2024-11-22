<script setup lang="ts">
import { useProfileStore } from '@/stores/profile'
const { avatarImage, firstName, lastName, email, phone, birthday, about } = useProfileStore()
</script>

<template>
  <h1 class="mb-8 text-2xl">Profile</h1>
  <div class="flex flex-col items-center py-4">
    <img
      :src="avatarImage"
      alt="Profile picture"
      class="mb-6 h-32 w-32 rounded-full border border-neutral-100"
    />
    <ul class="flex flex-col gap-4">
      <li>First name: {{ firstName }}</li>
      <li>Last name: {{ lastName }}</li>
      <li>Email: {{ email }}</li>
      <li>Phone: {{ phone }}</li>
      <li>Birthday: {{ birthday }}</li>
      <li>About: {{ about }}</li>
    </ul>
  </div>
</template>

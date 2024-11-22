<script setup lang="ts">
import { useProfileStore } from '@/stores/profile'
import BaseListItem from '@/components/BaseListItem.vue'
const { avatarImage, firstName, lastName, email, phone, birthday, about } = useProfileStore()
</script>

<template>
  <h1 class="mb-4 text-2xl">Profile</h1>
  <div class="mx-auto flex max-w-80 flex-col gap-4">
    <img
      v-if="avatarImage"
      :src="avatarImage"
      alt="User avatar"
      class="mx-auto mb-2 h-32 w-32 rounded-full border border-neutral-100"
    />
    <img
      v-else
      src="@/assets/avatar.svg"
      alt="Avatar placeholder"
      class="fill-red mx-auto mb-2 h-32 w-32 rounded-full border border-neutral-100 bg-neutral-100 fill-white"
    />
    <ul class="flex flex-col gap-4">
      <BaseListItem label="First name" :value="firstName" />
      <BaseListItem label="Last name" :value="lastName" />
      <BaseListItem label="Email" :value="email" />
      <BaseListItem label="Phone" :value="phone" />
      <BaseListItem label="Birthday" :value="birthday" />
      <BaseListItem label="About me" :value="about" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseInput from '@/components/BaseInput.vue'
import BaseTextarea from '@/components/BaseTextarea.vue'
import { useProfileStore } from '@/stores/profile'

const router = useRouter()

const profileStore = useProfileStore()
const firstName = ref(profileStore.firstName)
const lastName = ref(profileStore.lastName)
const email = ref(profileStore.email)
const phone = ref(profileStore.phone)
const birthday = ref(profileStore.birthday)
const about = ref(profileStore.about)

const onSubmit = () => {
  profileStore.saveProfileData({
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
    birthday: birthday.value,
    about: about.value,
  })
  router.push({ name: 'profile' })
}
</script>

<template>
  <h1 class="mb-8 text-2xl">Edit Profile</h1>
  <form class="mx-auto flex max-w-80 flex-col gap-4" @submit.prevent="onSubmit">
    <BaseInput v-model="firstName" label="First name" placeholder="Joe" />
    <BaseInput v-model="lastName" label="Last name" placeholder="Doe" />
    <BaseInput v-model="email" type="email" label="Email" placeholder="joe.doe@example.com" />
    <BaseInput v-model="phone" label="Phone" placeholder="(123) 456-7890" />
    <BaseInput v-model="birthday" label="Birthday" placeholder="MM/DD/YYYY" />
    <BaseTextarea v-model="about" label="About me" placeholder="Tell us about yourself" />
    <button type="submit" class="mt-2 rounded bg-emerald-800 py-2 hover:bg-emerald-700">
      Save
    </button>
  </form>
</template>

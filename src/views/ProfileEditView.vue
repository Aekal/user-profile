<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseInput from '@/components/BaseInput.vue'
import BaseTextarea from '@/components/BaseTextarea.vue'
import { useProfileStore } from '@/stores/profile'
import AvatarUpload from '@/components/AvatarUpload.vue'

const router = useRouter()

const profileStore = useProfileStore()
const avatarFile = ref<Blob>()
const firstName = ref(profileStore.firstName)
const lastName = ref(profileStore.lastName)
const email = ref(profileStore.email)
const phone = ref(profileStore.phone)
const birthday = ref(profileStore.birthday)
const about = ref(profileStore.about)
const uploadError = ref<boolean>(false)

const createAvatarPreview = (file: Blob) => {
  profileStore.avatarImage = URL.createObjectURL(file)
}
const onSubmit = () => {
  if (uploadError.value) {
    return
  }
  if (avatarFile.value) {
    createAvatarPreview(avatarFile.value)
  }
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
    <AvatarUpload v-model:avatar-file="avatarFile" v-model:upload-error="uploadError" />
    <BaseInput
      v-model="firstName"
      type="text"
      label="First name"
      placeholder="Joe"
      autocomplete="given-name"
      required
    />
    <BaseInput
      v-model="lastName"
      type="text"
      label="Last name"
      placeholder="Doe"
      autocomplete="family-name"
      required
    />
    <BaseInput
      v-model="email"
      type="email"
      label="Email"
      placeholder="joe.doe@example.com"
      autocomplete="email"
      required
    />
    <BaseInput
      v-model="phone"
      type="text"
      label="Phone"
      placeholder="(123) 456-7890"
      autocomplete="tel"
      required
    />
    <BaseInput
      v-model="birthday"
      type="text"
      label="Birthday"
      placeholder="MM/DD/YYYY"
      autocomplete="bday"
      required
    />
    <BaseTextarea
      v-model="about"
      label="About me"
      placeholder="Tell us about yourself"
      autocomplete="off"
    />
    <button type="submit" class="mt-2 rounded bg-emerald-800 py-2 hover:bg-emerald-700">
      Save
    </button>
  </form>
</template>

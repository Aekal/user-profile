import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', () => {
  const avatarImage = ref<string>()
  const firstName = ref<string>('')
  const lastName = ref<string>('')
  const email = ref<string>('')
  const phone = ref<string>('')
  const birthday = ref<string>('')
  const about = ref<string>('')

  const uploadAvatar = (file: Blob) => {
    avatarImage.value = URL.createObjectURL(file)
  }
  const saveProfileData = (data: {
    firstName: string
    lastName: string
    email: string
    phone: string
    birthday: string
    about: string
  }) => {
    firstName.value = data.firstName
    lastName.value = data.lastName
    email.value = data.email
    phone.value = data.phone
    birthday.value = data.birthday
    about.value = data.about
  }

  return {
    avatarImage,
    firstName,
    lastName,
    email,
    phone,
    birthday,
    about,
    uploadAvatar,
    saveProfileData,
  }
})

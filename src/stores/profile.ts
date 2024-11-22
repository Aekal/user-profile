import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', () => {
  const avatarImage = ref<string>('')
  const firstName = ref<string>('')
  const lastName = ref<string>('')
  const email = ref<string>('')
  const phone = ref<string>('')
  const birthday = ref<string>('')
  const about = ref<string>('')

  return { avatarImage, firstName, lastName, email, phone, birthday, about }
})

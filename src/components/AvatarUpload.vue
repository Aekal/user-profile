<script setup lang="ts">
const uploadError = defineModel<boolean>('uploadError')
const avatarFile = defineModel<Blob>('avatarFile')

const onUpload = (e: Event) => {
  const file = (e.target as EventTarget & { files: FileList }).files[0]
  if (file.size > 1024 * 1024) {
    uploadError.value = true
    return
  }
  uploadError.value = false
  avatarFile.value = file
}
</script>

<template>
  <div>
    <label class="avatar-label">
      Avatar
      <input type="file" accept="image/*" class="avatar-input" @change="onUpload" />
      <span v-if="uploadError" class="avatar-error">File size should be less than 1MB</span>
    </label>
  </div>
</template>

<!-- Intentional use of styles w/o css framework -->
<style lang="css" scoped>
.avatar-label {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.avatar-input {
  border-radius: 0.25rem;
  border-width: 1px;
  padding: 0.375rem;
  color: #f5f5f5;
}
.avatar-error {
  font-size: 0.875rem;
  color: #ef4444;
}
</style>

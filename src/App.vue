<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <main class="container mx-auto px-2 py-8">
    <RouterView />
  </main>
  <AppFooter />
</template>

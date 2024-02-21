<script setup lang="ts">
import HeaderNavigation from '@/components/header/HeaderNavigation.vue'
import HeaderLogo from '@/components/header/HeaderLogo.vue'
</script>

<template>
  <header class="bg-gradient-to-r from-primary to-brown p-7">
    <div class="container flex justify-between items-center">
      <header-logo />
      <header-navigation />
    </div>
  </header>
</template>

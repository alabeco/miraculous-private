<script setup lang="ts">
useHead({
  titleTemplate: (pageTitle?: string) => pageTitle ? `${pageTitle} - Miraculous Private` : 'Miraculous Private',
})
</script>

<template>
  <v-app>
    <LayoutHeader />
    <slot />
  </v-app>
</template>

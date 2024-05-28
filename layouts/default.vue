<script setup lang="ts">
useHead({
  titleTemplate: (pageTitle?: string) => pageTitle ? `${pageTitle} - Miraculous Private` : 'Miraculous Private',
})
</script>

<template>
  <v-app class="bg-primary">
    <LayoutHeader />
    <slot />
    <GeneralContact />
    <NotificationContainer />
    <LayoutFooter />
  </v-app>
</template>

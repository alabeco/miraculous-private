<script setup lang="ts">
  const drawer: Ref<boolean> = ref(false)
  const links = [
    { icon: 'mdi-information', title: 'About', to: '/about' },
    { icon: 'mdi-contacts', title: 'Contacts', to: '/contacts' },
  ]
</script>

<template>
  <v-app-bar app elevation="0" color="transparent">
    <v-app-bar-nav-icon @click="drawer = !drawer" color="surface" />
    <v-spacer />
    <v-app-bar-title class="tw-flex tw-justify-center">
      <NuxtLink to="/">
        <v-img src="/logo.png" width="80" height="80" />
      </NuxtLink>
    </v-app-bar-title>
    <v-spacer />
    <template v-slot:append>
      <v-btn icon color="surface">
        <v-icon>mdi-phone</v-icon>
      </v-btn>
    </template>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary sticky location="left" color="rgba(0,0,0, 0.4)">
    <v-list color="surface" base-color="surface">
      <v-list-item
        v-for="link in links"
        :key="link.title"
        :prepend-icon="link.icon"
        :to="link.to"
        color="primary"
        :title="link.title"
      >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

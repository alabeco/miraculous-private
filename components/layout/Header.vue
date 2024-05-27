<script setup lang="ts">
  import PubSub from 'pubsub-js'

  const drawer: Ref<boolean> = ref(false)
  const links = [
    { icon: 'mdi-home', title: 'Home', to: '/' },
    { icon: 'mdi-information', title: 'About', to: '/about' },
  ]

  function requestContacts() {
    PubSub.publish('request-contacts')
  }
</script>

<template>
  <v-app-bar app :elevation="drawer ? 1 : 0" :color="drawer ? 'primary' : 'transparent'">
    <v-app-bar-nav-icon @click="drawer = !drawer" color="surface" />
    <v-spacer />
    <v-app-bar-title class="tw-flex tw-justify-center">
      <NuxtLink to="/">
        <v-img src="/logo.png" width="80" height="80" />
      </NuxtLink>
    </v-app-bar-title>
    <v-spacer />
    <template v-slot:append>
      <v-btn icon color="surface" @click.prevent.stop="requestContacts">
        <v-icon>mdi-phone</v-icon>
      </v-btn>
    </template>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary elevation="2" location="left" color="primary"> <!--rgba(26, 59, 134, 0.9)-->
    <v-list color="surface" base-color="surface">
      <v-list-item
        v-for="link in links"
        :key="link.title"
        :prepend-icon="link.icon"
        :to="link.to"
        color="surface"
        :title="link.title"
      />

      <v-list-item
        prepend-icon="mdi-contacts"
        @click.prevent.stop="requestContacts"
        color="surface"
        title="Contact Us"
      />
    </v-list>
  </v-navigation-drawer>
</template>

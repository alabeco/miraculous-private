<script setup lang="ts">
import { useAlertsStore } from '~/store/alerts'

const alertsStore = useAlertsStore()
</script>

<template>
  <div class="alerts tw-w-full tw-flex tw-flex-col tw-items-center tw-gap-2">
    <NotificationAlert
      v-for="alert in alertsStore.alerts"
      :key="alert.id"
      :alert="alert"
    />
  </div>
</template>

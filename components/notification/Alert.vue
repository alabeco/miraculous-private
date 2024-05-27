<script setup lang="ts">
import { useAlertsStore } from '~/store/alerts'

const props = defineProps({
  alert: {
    type: Object as PropType<Alert>,
    required: true,
  },
})

const timeout: Ref<ReturnType<typeof setTimeout> | null> = ref(null)
const alertsStore = useAlertsStore()

onMounted(() => {
  timeout.value = setTimeout(() => {
    alertsStore.remove(props.alert.id!)
  }, 4000)
})

onBeforeUnmount(() => {
  if (timeout.value) {
    clearTimeout(timeout.value)
  }
})
</script>

<template>
  <v-alert
    :type="alert.type"
    :title="alert.title"
    closable
    border="start"
    class="tw-w-auto"
    max-width="400"
  >
    {{ alert.text }}
  </v-alert>
</template>

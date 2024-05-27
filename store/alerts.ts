import { defineStore } from 'pinia'

export const useAlertsStore = defineStore('alerts', () => {
  const alerts: Ref<Alert[]> = ref([])

  const add = (alert: Alert) => {
    alerts.value.push({
      ...alert,
      id: Math.random().toString(36).substring(2, 9),
    })
  }

  const remove = (id: string) => {
    alerts.value = alerts.value.filter((n) => n.id !== id)
  }

  return {
    alerts,
    add,
    remove,
  }
})

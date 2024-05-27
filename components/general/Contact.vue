<script setup lang="ts">
import PubSub from 'pubsub-js'
import { useAlertsStore } from '~/store/alerts'

const services = [
  "Elderly Care",
  "Child Care",
  "House Cleaning",
  "Non-Emergency Medical",
  "Transportation",
  "Housemaking/Housekeeping"
]
const alertsStore = useAlertsStore()

const dialog = ref(false)
const name = ref('')
const email = ref('')
const phone = ref('')
const service = ref('')
const message = ref('')
const sending = ref(false)
const valid = ref(false)
const title = ref('')

const phones = [
  "+18622244177",
  "+19734492046"
]

onMounted(() => {
  PubSub.subscribe('request-contacts', (_msg, data) => {
    dialog.value = true
    service.value = data.service
  })
})

function closeDialog() {
  dialog.value = false
}

async function sendMessage() {
  sending.value = true

  const body: Record<string, string> = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    service: service.value,
    message: message.value
  }

  if (title.value) body.title = title.value

  await $fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  }).then(() => {
    alertsStore.add({
      type: 'success',
      text: 'Message sent successfully!'
    })

    dialog.value = false
    name.value = ''
    email.value = ''
    phone.value = ''
    service.value = ''
    message.value = ''

  }).catch(() => {
    alertsStore.add({
      type: 'error',
      text: 'Failed to send message. Please try again later'
    })
  })
  sending.value = false
}
</script>

<template>
  <v-dialog v-model="dialog" max-width="720">
    <v-card color="primary" class="tw-relative">
      <v-btn icon class="d-close-btn" color="error" @click.prevent.stop="closeDialog">
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <v-card-text class="tw-text-center">
        <div class="tw-flex tw-flex-wrap tw-justify-center tw-gap-4">
          <p class="tw-w-full tw-text-center tw-text-xl ubuntu-bold">
            Our Phone Numbers
          </p>

          <v-text-field v-for="phone in phones" :model-value="phone" :key="phone" readonly density="compact" variant="outlined">
            <template #append-inner>
              <v-btn :href="`tel:${phone}`" size="small">
                <v-icon>mdi-phone</v-icon>
              </v-btn>
            </template>
          </v-text-field>
        </div>

        <div class="tw-flex tw-flex-wrap tw-justify-center tw-gap-4 tw-mt-4">
          <p class="tw-w-full tw-text-center tw-text-xl ubuntu-bold">
            Our Email
          </p>

          <v-text-field model-value="miraculousprivatecaregivers@gmail.com" readonly density="compact" variant="outlined">
            <template #append-inner>
              <v-btn href="mailto:miraculousprivatecaregivers@gmail.com" size="small">
                <v-icon>mdi-email</v-icon>
              </v-btn>
            </template>
          </v-text-field>
        </div>

        <hr class="tw-mt-4" />

        <div class="tw-mt-4">
          <p class="tw-w-full tw-text-center tw-text-xl ubuntu-bold tw-mb-4">
            Send Us a Message
          </p>
          <v-form v-model="valid" @submit.prevent.stop="sendMessage">
            <v-text-field
              label="Your Name"
              v-model="name"
              variant="outlined"
              :rules="[(v) => !!v || 'Your name is required' ]"
            />
            <v-text-field
              label="Your Email"
              v-model="email"
              variant="outlined"
              type="email"
              :rules="[(v) => !!v || 'Your email is required', (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid']"
            />

            <v-text-field
              label="Your Phone"
              v-model="phone"
              variant="outlined"
            />

            <v-select
              label="Service"
              v-model="service"
              variant="outlined"
              :items="services"
            />

            <v-textarea
              label="Your Message"
              v-model="message"
              variant="outlined"
              :rules="[(v) => !!v || 'Your message is required']"
            />

            <input v-model="title" type="hidden" name="title" />

            <v-btn type="submit" size="large" :disabled="!valid" :loading="sending" class="tw-mt-4 tw-w-full">
              Send
            </v-btn>
          </v-form>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

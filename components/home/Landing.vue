<script setup lang="ts">
  import { useIntersectionObserver } from '@vueuse/core'

  const services = [
    { title: 'Elderly Care', image: '/images/elderly_man.jpg', section: 'elderly-care' },
    { title: 'Child Care', image: '/images/child_care.jpg', section: 'child-care' },
    { title: 'House Cleaning', image: '/images/cleaning.jpg', section: 'house-cleaning' },
    { title: 'Non-Emergency Medical', image: '/images/paramedic.jpg', section: 'medical' },
    { title: 'Transportation', image: '/images/courier.jpg', section: 'transportation' },
    { title: 'Housemaking/Housekeeping', image: '/images/carpenter_1.jpg', section: 'housemaking' },
  ]
  const currentService = ref(0)

  const section = ref<HTMLElement | null>(null)
  const sectionIsVisible = ref(false)

  const { stop } = useIntersectionObserver(
    section,
    ([{ isIntersecting }], observerElement) => {
      sectionIsVisible.value = isIntersecting
    },
  )
</script>

<template>
  <section ref="section" id="landing" class="main bg-primary tw-py-16 tw-relative tw-flex tw-justify-center tw-items-center overflow-hidden">
    <div class="veil veil--primary"></div>
    <div class="circle xxlarge shade1"></div>
    <div class="circle xlarge shade2"></div>
    <div class="circle small shade3"></div>
    <div class="tw-z-10 tw-w-full tw-flex tw-justify-center tw-flex-wrap tw-gap-8 tw-p-4">
      <div class="tw-w-full tw-text-center">
        <h1 :class="`tw-opacity-0 tw-text-4xl sm:tw-text-6xl ubuntu-bold ${ sectionIsVisible ? 'fade-down' : ''}`">
          Miraculous Private
        </h1>
        <p :class="`tw-opacity-0 tw-text-lg sm:tw-text-xl ubuntu-regular ${ sectionIsVisible ? 'fade-in-2' : ''}`">
          The best service provider for your needs
        </p>
        <p :class="`tw-opacity-0 tw-text-xl sm:tw-text-2xl ${ sectionIsVisible ? 'fade-down-3' : '' }`">
          <span class="ubuntu-regular"> in </span>
          <span class="ubuntu-bold tw-opacity-0 fade-in" :key="services[currentService].title" > {{ services[currentService].title }} </span>
        </p>
      </div>

      <v-window v-model="currentService" show-arrows continuous class="tw-w-full tw-max-w-lg">
        <v-window-item
          v-for="service, idx in services"
          :key="service.title"
        >
          <v-card rounded="lg" variant="outlined" class="tw-relative">
            <v-img cover width="100%" height="320px" :src="service.image" />
            <div class="learn-more-c tw-absolute tw-bottom-0 tw-text-center tw-w-full tw-pb-4 tw-pt-8">
              <v-btn :to="`#${service.section}`" color="surface" variant="outlined">
                Learn more
              </v-btn>
            </div>
          </v-card>
        </v-window-item>
      </v-window>

      <div :class="`tw-opacity-0 tw-w-full tw-flex tw-flex-wrap tw-justify-center tw-gap-4 ${ sectionIsVisible ? 'fade-up' : ''}`">
        <v-btn size="x-large" variant="outlined" to="/contacts">Get in touch</v-btn>
      </div>
    </div>
  </section>
</template>

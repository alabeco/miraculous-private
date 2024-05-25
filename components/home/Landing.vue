<script setup lang="ts">
  const services = [
    { title: 'Elderly Care', image: '/images/elderly_man.jpg', section: 'elderly-care' },
    { title: 'Child Care', image: '/images/child_care.jpg', section: 'child-care' },
    { title: 'House Cleaning', image: '/images/cleaning.jpg', section: 'house-cleaning' },
    { title: 'Non-Emergency Medical', image: '/images/paramedic.jpg', section: 'medical' },
    { title: 'Transportation', image: '/images/courier.jpg', section: 'transportation' },
    { title: 'Housemaking/Housekeeping', image: '/images/carpenter_1.jpg', section: 'housemaking' },
  ]
  const currentService = ref(0)
</script>

<template>
  <section id="landing" class="main bg-primary tw-py-16 tw-relative tw-flex tw-justify-center tw-items-center overflow-hidden">
    <div class="veil veil--primary"></div>
    <div class="circle xxlarge shade1"></div>
    <div class="circle xlarge shade2"></div>
    <div class="circle small shade3"></div>
    <div class="tw-z-10 tw-w-full tw-flex tw-justify-center tw-flex-wrap tw-gap-8 tw-p-4">
      <div class="tw-w-full tw-text-center">
        <h1 class="tw-text-6xl ubuntu-bold tw-animate-in tw-fade-in tw-zoom-in tw-duration-700">
          Miraculous Private
        </h1>
        <p class="tw-text-xl ubuntu-regular tw-animate-in tw-zoom-in-75 tw-duration-700">
          The best service provider for your needs
        </p>
        <p class="tw-text-2xl tw-animate-in tw-zoom-in-75 tw-duration-1000">
          <span class="ubuntu-regular"> in </span>
          <span class="ubuntu-bold"> {{ services[currentService].title }} </span>
        </p>
      </div>

      <v-window v-model="currentService" show-arrows continuous class="tw-w-full tw-max-w-lg">
        <v-window-item
          v-for="service, idx in services"
          :key="service.title"
        >
          <v-card rounded="pill" class="tw-relative">
            <v-img cover width="100%" height="320px" :src="service.image" />
            <div class="learn-more-c tw-absolute tw-bottom-0 tw-text-center tw-w-full tw-pb-4 tw-pt-8">
              <v-btn :to="`#${service.section}`" color="surface" variant="outlined">
                Learn more
              </v-btn>
            </div>
          </v-card>
        </v-window-item>
      </v-window>

      <div class="tw-w-full tw-flex tw-flex-wrap tw-justify-center tw-gap-4 tw-animate-in tw-fade-in tw-slide-in-from-bottom tw-duration-1000">
        <v-btn size="x-large" variant="outlined" to="/contacts">Get in touch</v-btn>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const services = [
    { title: 'Elderly Care', image: '/images/elderly_man.jpg' },
    { title: 'Child Care', image: '/images/child_care.jpg' },
    { title: 'House Cleaning', image: '/images/cleaning.jpg' },
    { title: 'Non-Emergency Medical', image: '/images/paramedic.jpg' },
    { title: 'Transportation', image: '/images/courier.jpg' },
    { title: 'Housemaker Housekeeper', image: '/images/carpenter_1.jpg' },
  ]
  const currentService = ref(0)
</script>

<template>
  <section class="main bg-primary tw-py-16 tw-relative tw-flex tw-justify-center tw-items-center overflow-hidden">
    <div class="circle xxlarge shade1"></div>
    <div class="circle xlarge shade2"></div>
    <div class="circle small shade3"></div>
    <div class="tw-z-10 tw-w-full tw-flex tw-justify-center tw-flex-wrap tw-gap-8 tw-p-4">
      <div class="tw-w-full tw-text-center">
        <h1 class="tw-text-6xl ubuntu-bold tw-animate-in tw-fade-in tw-zoom-in tw-duration-700">
          Miraculous Private
        </h1>
        <p class="tw-text-xl ubuntu-regular tw-animate-in tw-zoom-in-75 tw-duration-700">
          The best service provider for your needs in {{ services[currentService].title }}
        </p>
      </div>

      <v-window v-model="currentService" show-arrows continuous class="tw-w-full tw-max-w-lg">
        <v-window-item
          v-for="service, idx in services"
          :key="service.title"
        >
          <v-card rounded="pill">
            <v-img cover width="100%" height="320px" :src="service.image" />
          </v-card>
        </v-window-item>
      </v-window>

      <div class="tw-w-full tw-flex tw-flex-wrap tw-justify-center tw-gap-4 tw-animate-in tw-fade-in tw-slide-in-from-bottom tw-duration-1000">
        <v-btn size="x-large" variant="outlined" to="/contacts">Get in touch</v-btn>
      </div>
    </div>
  </section>
</template>

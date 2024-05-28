<script setup lang="ts">
  import { useIntersectionObserver } from '@vueuse/core'

  const section = ref<HTMLElement | null>(null)
  const sectionIsVisible = ref(false)
  const mainImage = ref(0)
  const secondaryImage1 = ref(1)
  const secondaryImage2 = ref(2)
  const interval1 = ref<NodeJS.Timeout | null>(null)

  const images = [
    '/images/house_keeper_1.jpg',
    '/images/house_keeper_2.jpg',
    '/images/house_keeper_3.jpg',
    '/images/house_keeper_4.jpg',
  ]

  const { stop } = useIntersectionObserver(
    section,
    ([{ isIntersecting }], observerElement) => {
      sectionIsVisible.value = isIntersecting
    },
  )

  function requestContacts() {
    PubSub.publish('request-contacts', {
      service: 'Housemaking/Housekeeping'
    })
  }

  onMounted(() => {
    interval1.value = setInterval(() => {
      mainImage.value = (mainImage.value + 1) % images.length
      secondaryImage1.value = (secondaryImage1.value + 1) % images.length
      secondaryImage2.value = (secondaryImage2.value + 1) % images.length
    }, 5000)
  })

  onBeforeUnmount(() => {
    if (interval1.value) clearInterval(interval1.value)
  })
</script>

<template>
  <section ref="section" id="housemaking" class="main bg-primary tw-py-16 tw-relative tw-w-full tw-flex tw-justify-center tw-items-center overflow-hidden">
    <div class="veil veil--primary"></div>
    <div class="tw-z-10 tw-w-full tw-flex tw-justify-center tw-items-center tw-flex-wrap tw-gap-8 tw-p-4">
      <div class="tw-w-full tw-text-center">
        <h2 :class="`tw-opacity-0 tw-text-4xl sm:tw-text-6xl ubuntu-bold ${ sectionIsVisible ? 'fade-down' : '' }`">
          Housemaking and Housekeeping
        </h2>
      </div>

      <div class="lg:tw-hidden tw-relative tw-w-full">
        <v-img
          lazy-src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          :src="images[mainImage]"
          width="200"
          height="200"
          rounded="circle"
          cover
          class="tw-mx-auto transition-7 hover:tw-z-10"
        />
        <v-img
          lazy-src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          :src="images[secondaryImage1]"
          width="100"
          height="100"
          rounded="circle"
          cover
          class="c-img c-img-r-1 transition-7"
        />
        <v-img
          lazy-src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          :src="images[secondaryImage2]"
          width="100"
          height="100"
          rounded="circle"
          cover
          class="c-img c-img-l-1 transition-7"
        />
      </div>

      <div class="tw-relative tw-hidden lg:tw-flex tw-w-auto tw-h-100 tw-flex-grow tw-max-w-lg">
        <v-img
          lazy-src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          :src="images[mainImage]"
          :key="mainImage"
          width="400"
          height="400"
          rounded="pill"
          cover
          class="transition-7 hover:tw-z-10"
        />
        <v-img
          lazy-src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          :src="images[secondaryImage2]"
          width="200"
          height="200"
          rounded="circle"
          cover
          class="c-img c-img-l-1 transition-7"
        />
      </div>

      <div :class="`tw-opacity-0 tw-w-full tw-max-w-lg tw-text-lg sm:tw-text-xl tw-text-center lg:tw-text-left ubuntu-regular ${ sectionIsVisible ? 'zoom-in' : '' }`">
        Our dedicated team of housekeeping professionals is here to take the burden of household chores off your shoulders, providing meticulous and reliable cleaning services that make your home shine.
      </div>

      <div :class="`tw-opacity-0 tw-w-full tw-flex tw-flex-wrap tw-justify-center tw-gap-4 ${ sectionIsVisible ? 'fade-up' : ''}`">
        <v-btn size="x-large" variant="outlined" @click.prevent.stop="requestContacts">
          Get in touch
        </v-btn>
      </div>
    </div>
  </section>
</template>

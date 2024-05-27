<script setup lang="ts">
  import { useIntersectionObserver } from '@vueuse/core'

  const images = [
    '/images/mopping.jpg',
    '/images/window-washing.jpg',
    '/images/cleaning-1.jpg',
    '/images/cleaning-2.jpg',
  ]

  const section = ref<HTMLElement | null>(null)
  const sectionIsVisible = ref(false)
  const mainImage = ref(0)
  const secondaryImage1 = ref(1)
  const secondaryImage2 = ref(2)
  const interval1 = ref<NodeJS.Timeout | null>(null)

  const { stop } = useIntersectionObserver(
    section,
    ([{ isIntersecting }], observerElement) => {
      sectionIsVisible.value = isIntersecting
    },
  )

  function requestContacts() {
    PubSub.publish('request-contacts', {
      service: 'House Cleaning'
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
  <section ref="section" id="house-cleaning" class="main bg-primary tw-py-16 tw-relative tw-w-full tw-flex tw-justify-center tw-items-center overflow-hidden">
    <div class="veil veil--secondary"></div>
    <div class="tw-z-10 tw-w-full tw-flex tw-justify-center tw-items-center tw-flex-wrap tw-gap-8 tw-p-4">
      <div class="tw-w-full tw-text-center">
        <h2 :class="`tw-opacity-0 tw-text-4xl sm:tw-text-6xl ubuntu-bold ${ sectionIsVisible ? 'fade-down' : '' }`">
          House Cleaning
        </h2>
      </div>

      <div :class="`tw-opacity-0 tw-w-full tw-max-w-lg tw-text-lg sm:tw-text-xl tw-text-center lg:tw-text-left ubuntu-regular ${ sectionIsVisible ? 'zoom-in' : '' }`">
        A clean and organized home is essential for your well-being and peace of mind.
        Our professional cleaning team is dedicated to providing top-notch, reliable cleaning services that leave your home looking and feeling its best.
      </div>

      <div class="lg:tw-hidden tw-relative tw-w-full">
        <v-img
          lazy-src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          :src="images[mainImage]"
          width="200"
          height="150"
          cover
          rounded="pill"
          class="tw-mx-auto fade-in hover:tw-z-10"
        />
        <v-img
          lazy-src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          :src="images[secondaryImage1]"
          :key="secondaryImage1"
          width="100"
          height="75"
          cover
          rounded="pill"
          class="hc-img hc-img-r-1 fade-in"
        />
        <v-img
          lazy-src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          :src="images[secondaryImage2]"
          :key="secondaryImage2"
          width="100"
          height="75"
          cover
          rounded="pill"
          class="hc-img hc-img-l-1 fade-in"
        />
      </div>

      <div class="tw-relative tw-hidden lg:tw-flex tw-w-auto tw-h-100 tw-flex-grow tw-max-w-lg">
        <v-img
          lazy-src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          :src="images[mainImage]"
          cover
          rounded="pill"
          height="300"
          class="tw-mx-auto fade-in hover:tw-z-10 transition-7"
        />
        <v-img
          lazy-src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          :src="images[secondaryImage1]"
          :key="secondaryImage1"
          width="200"
          height="150"
          cover
          rounded="pill"
          class="tw-opacity-0 hc-img hc-img-r-1 fade-in"
        />
        <v-img
          lazy-src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          :src="images[secondaryImage2]"
          :key="secondaryImage2"
          width="200"
          height="150"
          cover
          rounded="pill"
          class="tw-opacity-0 hc-img hc-img-l-1 fade-in"
        />
      </div>

      <div :class="`tw-opacity-0 tw-w-full tw-flex tw-flex-wrap tw-justify-center tw-gap-4 ${ sectionIsVisible ? 'fade-up' : ''}`">
        <v-btn size="x-large" variant="outlined" @click.prevent.stop="requestContacts">
          Get in touch
        </v-btn>
      </div>
    </div>
  </section>
</template>

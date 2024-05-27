<script setup lang="ts">
  import { useIntersectionObserver } from '@vueuse/core'

  const section = ref<HTMLElement | null>(null)
  const sectionIsVisible = ref(false)
  const mainImage1 = ref(1)
  const mainImage2 = ref(2)
  const secondaryImage1 = ref(0)
  const secondaryImage2 = ref(3)
  const interval1 = ref<NodeJS.Timeout | null>(null)

  const images = [
    '/images/medical_1.jpg',
    '/images/medical_2.jpg',
    '/images/medical_3.jpg',
    '/images/medical_4.jpg',
    '/images/medical_5.jpg',
    '/images/medical_6.jpg',
  ]

  const { stop } = useIntersectionObserver(
    section,
    ([{ isIntersecting }], observerElement) => {
      sectionIsVisible.value = isIntersecting
    },
  )

  function requestContacts() {
    PubSub.publish('request-contacts', {
      service: 'Elderly Care'
    })
  }

  onMounted(() => {
    interval1.value = setInterval(() => {
      mainImage1.value = (mainImage1.value + 1) % images.length
      mainImage2.value = (mainImage2.value + 1) % images.length
      secondaryImage1.value = (secondaryImage1.value + 1) % images.length
      secondaryImage2.value = (secondaryImage2.value + 1) % images.length
    }, 5000)
  })

  onBeforeUnmount(() => {
    if (interval1.value) clearInterval(interval1.value)
  })
</script>

<template>
  <section ref="section" id="medical" class="main bg-primary tw-py-16 tw-relative tw-w-full tw-flex tw-justify-center tw-items-center overflow-hidden">
    <div class="veil veil--primary"></div>
    <div class="tw-z-10 tw-w-full tw-flex tw-justify-center tw-items-center tw-flex-wrap tw-gap-8 tw-p-4">
      <div class="tw-w-full tw-text-center">
        <h2 :class="`tw-opacity-0 tw-text-4xl sm:tw-text-6xl ubuntu-bold ${ sectionIsVisible ? 'fade-down' : '' }`">
          Non-Emergency Medical
        </h2>
      </div>

      <div class="tw-relative tw-hidden lg:tw-flex tw-w-auto tw-h-100 tw-flex-grow tw-max-w-lg">
        <v-img
          lazy-src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          :src="images[mainImage1]"
          width="200"
          height="300"
          cover
          rounded="lg"
          class="tw-mx-auto fade-in hover:tw-z-10"
        />
        <v-img
          lazy-src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          :src="images[secondaryImage1]"
          width="150"
          height="150"
          cover
          rounded="lg"
          class="m-img m-img-l-1"
        />
      </div>

      <div :class="`tw-opacity-0 tw-w-full tw-max-w-lg tw-text-lg sm:tw-text-xl tw-text-center ubuntu-regular ${ sectionIsVisible ? 'zoom-in' : '' }`">
        At Miraculous Private, we are dedicated to providing accessible, compassionate, and professional care when you need it most.
        Our team of skilled medical professionals is here to support your health and well-being with a range of non-emergency medical services designed to fit your lifestyle.
      </div>

      <div class="tw-relative tw-hidden lg:tw-flex tw-w-auto tw-h-100 tw-flex-grow tw-max-w-lg">
        <v-img
          lazy-src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          :src="images[mainImage2]"
          width="200"
          height="300"
          cover
          rounded="lg"
          class="tw-mx-auto fade-in hover:tw-z-10"
        />
        <v-img
          lazy-src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          :src="images[secondaryImage2]"
          width="150"
          height="150"
          cover
          rounded="lg"
          class="m-img m-img-r-1"
        />
      </div>

      <div class="lg:tw-hidden tw-relative tw-w-full">
        <v-img
          lazy-src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          :src="images[mainImage1]"
          width="200"
          height="150"
          cover
          rounded="lg"
          class="tw-mx-auto hover:tw-z-10"
        />
        <v-img
          lazy-src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          :src="images[secondaryImage1]"
          width="100"
          height="75"
          cover
          rounded="lg"
          class="m-img m-img-l-1"
        />
        <v-img
          lazy-src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          :src="images[secondaryImage2]"
          width="100"
          height="75"
          cover
          rounded="lg"
          class="m-img m-img-r-1"
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

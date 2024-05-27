<script setup lang="ts">
  import { useIntersectionObserver } from '@vueuse/core'

  const images = [
    '/images/baby_1.jpg',
    '/images/baby_2.jpg',
    '/images/baby_3.jpg',
    '/images/child_care.jpg',
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
      service: 'Child Care'
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
  <section ref="section" id="child-care" class="main bg-primary tw-py-16 tw-relative tw-w-full tw-flex tw-justify-center tw-items-center overflow-hidden">
    <div class="veil veil--primary"></div>
    <div class="tw-z-10 tw-w-full tw-flex tw-justify-center tw-items-center tw-flex-wrap tw-gap-8 tw-p-4">
      <div class="tw-w-full tw-text-center">
        <h2 :class="`tw-opacity-0 tw-text-4xl sm:tw-text-6xl ubuntu-bold ${ sectionIsVisible ? 'fade-down' : '' }`">
          Child Care
        </h2>
      </div>

      <div class="lg:tw-hidden tw-relative tw-w-full">
        <v-img
          lazy-src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          :src="images[mainImage]"
          :key="mainImage"
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
          :src="images[secondaryImage1]"
          width="200"
          height="200"
          rounded="circle"
          cover
          class="c-img c-img-r-1 transition-7"
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
        At Miraculous Private, we believe that every child deserves a nurturing, stimulating, and safe environment to grow, learn, and thrive.
        Our dedicated team of caregivers and educators is committed to providing personalized care and early childhood education that sets the foundation for lifelong success.
      </div>

      <div :class="`tw-opacity-0 tw-w-full tw-flex tw-flex-wrap tw-justify-center tw-gap-4 ${ sectionIsVisible ? 'fade-up' : ''}`">
        <v-btn size="x-large" variant="outlined" @click.prevent.stop="requestContacts">
          Get in touch
        </v-btn>
      </div>
    </div>
  </section>
</template>

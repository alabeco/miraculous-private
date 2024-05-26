<script setup lang="ts">
  import { useIntersectionObserver } from '@vueuse/core'

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
  <section ref="section" id="elderly-care" class="main bg-secondary tw-py-16 tw-relative tw-w-full tw-flex tw-justify-center tw-items-center overflow-hidden">
    <div class="veil veil--secondary"></div>
    <div class="circle xxlarge-1 shade1"></div>
    <div class="circle xlarge-1 shade2"></div>
    <div class="circle small-1 shade3"></div>
    <div class="tw-z-10 tw-w-full tw-flex tw-justify-center tw-items-center tw-flex-wrap tw-gap-8 tw-p-4">
      <div class="tw-w-full tw-text-center">
        <h2 :class="`tw-opacity-0 tw-text-4xl sm:tw-text-6xl ubuntu-bold ${ sectionIsVisible ? 'fade-down' : '' }`">
          Elderly Care
        </h2>
      </div>
      <div :class="`tw-opacity-0 tw-w-full tw-max-w-lg tw-text-lg sm:tw-text-xl tw-text-center lg:tw-text-left ubuntu-regular ${ sectionIsVisible ? 'zoom-in' : '' }`">
        Let Miraculous Private be your partner in providing exceptional care for your loved ones.
        Contact us today to schedule a consultation and discover how we can help your family
        achieve peace of mind and a higher quality of life for your elderly loved ones.
      </div>
      <div class="lg:tw-hidden tw-relative tw-w-full">
        <v-img src="/images/elderly-care.jpg" width="200" height="150" cover rounded="lg" class="tw-mx-auto hover:tw-z-10" />
        <v-img src="/images/senior-patient.jpg" width="100" height="75" cover rounded="lg" class="e-img e-img-r-1" />
        <v-img src="/images/happy-grandmother.jpg" width="100" height="75" cover rounded="lg" class="e-img e-img-l-1" />
      </div>

      <div class="tw-relative tw-hidden lg:tw-flex tw-w-auto tw-h-100 tw-flex-grow tw-max-w-lg">
        <v-img src="/images/elderly-care.jpg" cover rounded="lg" class="tw-mx-auto hover:tw-z-10" />
        <v-img src="/images/senior-patient.jpg" width="200" height="150" cover rounded="lg" class="e-img e-img-r-1" />
        <v-img src="/images/happy-grandmother.jpg" width="200" height="150" cover rounded="lg" class="e-img e-img-l-1" />
      </div>

      <div :class="`tw-opacity-0 tw-w-full tw-flex tw-flex-wrap tw-justify-center tw-gap-4 ${ sectionIsVisible ? 'fade-up' : ''}`">
        <v-btn size="x-large" variant="outlined" to="/contacts">Get in touch</v-btn>
      </div>
    </div>
  </section>
</template>

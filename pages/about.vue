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

function requestContacts() {
  PubSub.publish('request-contacts')
}
</script>

<template>
  <section ref="section" class="tw-py-16">
    <div class="tw-z-10 tw-w-full tw-flex tw-justify-center tw-flex-wrap tw-gap-4 tw-p-4">
      <div class="circle xxlarge-1 shade1"></div>
      <div class="circle xlarge-1 shade2"></div>
      <div class="circle small-1 shade3"></div>
      <div class="tw-w-full tw-text-center">
        <h1 :class="`tw-opacity-0 tw-text-4xl sm:tw-text-6xl ubuntu-bold ${ sectionIsVisible ? 'fade-down' : ''}`">
          Miraculous Private
        </h1>
      </div>

      <div class="tw-w-full"></div>
      <div :class="`tw-opacity-0 tw-w-full tw-max-w-xl tw-text-lg sm:tw-text-xl tw-text-center ubuntu-regular ${ sectionIsVisible ? 'zoom-in' : '' }`">
        Miraculous Private was founded in 2007 by a small team of health and technology experts with one objective in mind:
        to make it easier for people to obtain high-quality healthcare services.
      </div>

      <div class="tw-w-full"></div>
      <div :class="`tw-opacity-0 tw-w-full tw-max-w-xl tw-text-lg sm:tw-text-xl tw-text-center ubuntu-regular ${ sectionIsVisible ? 'zoom-in-1' : '' }`">
        We adopt the latest, most advanced technologies in health and logistics to provide patients with a convenient and coordinated end-to-end healthcare experience that results in better health outcomes, healthier lives, and more time to spend on what matters to our patients.
      </div>

      <div class="tw-w-full"></div>
      <div :class="`tw-opacity-0 tw-w-full tw-max-w-xl tw-text-lg sm:tw-text-xl tw-text-center ubuntu-regular ${ sectionIsVisible ? 'zoom-in-2' : '' }`">
        We're a different kind of healthcare company and thrilled to be reshaping how people access healthcare service in the whole world.
      </div>


      <div class="tw-w-full"></div>
      <div :class="`tw-opacity-0 tw-w-full tw-max-w-xl tw-text-lg sm:tw-text-xl tw-text-center ubuntu-regular ${ sectionIsVisible ? 'zoom-in-2' : '' }`">
        Here at Miraculous Private, we know that meeting the challenges facing health and social care systems requires different and better ways of working.
        With growing demands on services than ever before.
      </div>

      <div class="tw-w-full"></div>
      <div :class="`tw-opacity-0 tw-w-full tw-max-w-xl tw-text-lg sm:tw-text-xl tw-text-center ubuntu-regular ${ sectionIsVisible ? 'zoom-in-2' : '' }`">
        Miraculous Private is a one-stop shop that offers a range of services tailored to the individual demands and needs of our clients which is committed to providing high-quality care to our clients towards meeting their needs 24 hours a day 7 days a week.
      </div>

      <div class="tw-w-full"></div>
      <div :class="`tw-opacity-0 tw-w-full tw-max-w-xl tw-text-lg sm:tw-text-xl tw-text-center ubuntu-regular ${ sectionIsVisible ? 'zoom-in-2' : '' }`">
        With our trained and committed staff, we will work with other healthcare professionals to ensure that the quality of care that you get is consistent and constantly reviewed. It is important to us that you get the service and care that meets your needs at all times.
      </div>
    </div>
  </section>
</template>

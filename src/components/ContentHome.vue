<script setup>
import BaseCard from './base/BaseCard.vue'
import FilmsService from '@/services/Films.service.js'
import { ref, onBeforeMount } from 'vue'

let displayMoovie = ref({})
let displayMoovieNow = ref({})
let loader = ref(false)

let getMoovie = async () => {
  const options = {
    query: 'bloodsport'
  }

  const optionsNow = {
    year: new Date().getYear()
  }
  const response = await FilmsService.getHomeMoovie(options)
  const responseNow = await FilmsService.getHomeMoovieNow(optionsNow)
  response && responseNow ? (loader.value = true) : (loader.value = false)
  displayMoovie.value = response.results[0]
  displayMoovieNow.value = responseNow.results.slice(0, 4)
}

onBeforeMount(async () => {
  getMoovie()
})
</script>

<template>
  <!-- Content -->
  <div v-if="loader">
    <div class="pattern flex flex-col items-center justify-center pb-4">
      <div class="relative">
        <div class="absolute bottom-0 text-right w-full mb-32 p-4">
          <button
            class="bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <svg
              class="w-3 h-3 text-gray-800 mr-2 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 14 16"
            >
              <path
                d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z"
              />
            </svg>
            <span>Lecture</span>
          </button>
        </div>
        <div class="absolute bottom-0 bg-gradient-to-t from-yellow-200 w-full h-32 opacity-80 p-4">
          <h2 class="text-white text-xl opacity-100">{{ displayMoovie.original_title }}</h2>
          <p class="text-gray-900 font-bold">{{ displayMoovie.overview.substring(0, 160) }}...</p>
        </div>
        <img
          :src="`https://image.tmdb.org/t/p/w500/${displayMoovie.poster_path}`"
          alt="background-image-moovie-home"
          class="object-contain h-auto w-full"
        />
      </div>
    </div>
    <div>
      <span class="titre mt-10 ml-10 text-xl">Les films du moment</span>
    </div>
    <div class="container mx-auto my-10 grid grid-cols-2 2xl:grid-cols-4 gap-4">
      <BaseCard
        v-for="(item, index) in displayMoovieNow"
        :key="index"
        :titre="item.original_title"
        :description="item.overview"
        :image="item.poster_path"
        :id="item.id"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;600;900&family=Permanent+Marker&display=swap');
.pattern {
  background-color: rgba(230, 230, 247, 0);
  opacity: 0.7;
  background-image: linear-gradient(#f7d245 1px, transparent 1px),
    linear-gradient(to right, #f7d245 1px, rgba(230, 230, 247, 0) 1px);
  background-size: 20px 20px;
}
h2,
.titre {
  font-family: 'Permanent Marker', cursive;
  background-image: url(https://global-uploads.webflow.com/625aea37d2019e1dd7782064/626293a2c28ce140ff9cc1ea_Vector%201.svg);
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 10em;
  display: inline-block;
}
</style>

<script setup>
import { ref } from 'vue'
import { useFavoriteStore } from '@/stores/favorite'
import FilmsService from '@/services/Films.service.js'
const props = defineProps({
  titre: String,
  description: String,
  image: String,
  id: Number
})
let favorite = useFavoriteStore()
const favoris = ref(false)
const check = ref(false)
const generateFavoris = async (favoris, id) => {
  const options = {
    media_id: id
  }
  if (favoris) {
    const response = await FilmsService.addFavoriteMoovie(options)

    if (response.success) {
      favorite.getFavoriteAll()
    }
  }
  if (!favoris) {
    const response = await FilmsService.removeFavoriteMoovie(options)

    if (response.success) {
      favorite.getFavoriteAll()
    }
  }
}

let checkFavorite = (id) => {
  let Findcheck = favorite.items.find((el) => el.id == id)

  check.value = Findcheck != undefined || favorite.value ? true : false
  return check.value
}
</script>

<template>
  <div class="p-10 mx-3 flex pattern">
    <img
      class="w-32 h-auto"
      :src="`https://image.tmdb.org/t/p/w500/${props.image}`"
      alt="film du moment"
    />
    <div
      class="min-h-48 overflow-hidden border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-2 flex flex-col justify-between leading-normal"
    >
      <div class="">
        <div class="text-gray-900 font-bold text-xs mb-2">{{ props.titre }}</div>
        <p class="text-gray-700 text-xs">
          {{ props.description.substring(0, 90) }}
        </p>
      </div>
      <div class="flex">
        <button
          class="bg-yellow-300 hover:bg-yellow-400 text-gray-800 text-xs font-bold py-1 px-2 rounded inline-flex items-center"
        >
          <svg
            class="w-2 h-2 text-gray-800 mr-2 dark:text-white"
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
        <button
          class="w-6 h-6 block ml-3"
          @click="(favoris = !checkFavorite(props.id)), generateFavoris(favoris, props.id)"
        >
          <svg
            v-if="checkFavorite(props.id)"
            class="w-6 h-6 text-yellow-300 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path
              d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"
            />
          </svg>
          <svg
            v-else
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 21 19"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.pattern {
  background-color: rgba(230, 230, 247, 0);
  opacity: 0.7;
  background-image: linear-gradient(#f7d245 1px, transparent 1px),
    linear-gradient(to right, #f7d245 1px, rgba(230, 230, 247, 0) 1px);
  background-size: 20px 20px;
}
</style>

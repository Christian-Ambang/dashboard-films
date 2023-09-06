<script setup>
import BaseCard from './base/BaseCard.vue'
import { useFavoriteStore } from '@/stores/favorite'
const favorite = useFavoriteStore()
</script>

<template>
  <div class="container mx-auto my-10 grid grid-cols-2 2xl:grid-cols-4 gap-4">
    <BaseCard
      v-for="(item, index) in favorite.items"
      :key="index"
      :titre="item.original_title"
      :description="item.overview"
      :image="item.poster_path"
      :id="item.id"
    />
  </div>
</template>

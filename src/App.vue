<script setup>
import { RouterView } from 'vue-router'
import { onBeforeMount } from 'vue'
import { useFavoriteStore } from '@/stores/favorite'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
const favorite = useFavoriteStore()
onBeforeMount(() => {
  favorite.getFavoriteAll()
})
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <RouterView />
  <FooterComponent></FooterComponent>
</template>

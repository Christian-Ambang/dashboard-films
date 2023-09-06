<script setup>
import { useTabStore } from '@/stores/tab'
import BaseCard from './BaseCard.vue'
import { onBeforeMount } from 'vue'
const tab = useTabStore()

onBeforeMount(async () => {
  tab.toggleTabs(1)
})
</script>

<template>
  <div class="w-full">
    <div class="relative flex flex-col min-w-0 break-words w-full">
      <div class="px-4 py-5 flex-auto">
        <div class="tab-content tab-space">
          <div
            v-for="(item, index) in 5"
            :key="index"
            v-bind:class="{ hidden: tab.openTab !== index + 1, block: tab.openTab === index + 1 }"
          >
            <div class="container mx-auto my-10 grid grid-cols-2 2xl:grid-cols-4 gap-4">
              <BaseCard
                v-for="(value, cle) in tab.contentTab"
                :key="cle"
                :titre="value.original_title"
                :description="value.overview"
                :image="value.poster_path"
                :id="value.id"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

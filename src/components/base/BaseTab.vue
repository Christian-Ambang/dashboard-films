<script setup>
import { useTabStore } from '@/stores/tab'

const tab = useTabStore()
</script>
<template>
  <div class="my-16 px-10">
    <div>
      <ul class="grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-full p-1">
        <li>
          <a
            v-on:click="tab.toggleTabs(1)"
            v-bind:class="{
              'text-gray-500 bg-gray-100 rounded-full': tab.openTab !== 1,
              'bg-white rounded-full shadow text-gray-900': tab.openTab === 1
            }"
            class="flex justify-center py-4 cursor-pointer"
            >Action</a
          >
        </li>
        <li>
          <a
            v-on:click="tab.toggleTabs(2)"
            v-bind:class="{
              'text-gray-500 bg-gray-100 rounded-full': tab.openTab !== 2,
              'bg-white rounded-full shadow text-gray-900': tab.openTab === 2
            }"
            class="flex justify-center py-4 cursor-pointer"
            >Animation</a
          >
        </li>
        <li>
          <a
            v-on:click="tab.toggleTabs(3)"
            v-bind:class="{
              'text-gray-500 bg-gray-100 rounded-full': tab.openTab !== 3,
              'bg-white rounded-full shadow text-gray-900': tab.openTab === 3
            }"
            class="flex justify-center py-4 cursor-pointer"
            >Aventure</a
          >
        </li>
        <li>
          <a
            v-on:click="tab.toggleTabs(4)"
            v-bind:class="{
              'text-gray-500 bg-gray-100 rounded-full': tab.openTab !== 4,
              'bg-white rounded-full shadow text-gray-900': tab.openTab === 4
            }"
            class="flex justify-center py-4 cursor-pointer"
            >Comédie</a
          >
        </li>
        <li>
          <a
            v-on:click="tab.toggleTabs(5)"
            v-bind:class="{
              'text-gray-500 bg-gray-100 rounded-full': tab.openTab !== 5,
              'bg-white rounded-full shadow text-gray-900': tab.openTab === 5
            }"
            class="flex justify-center py-4 cursor-pointer"
            >Documentaire</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

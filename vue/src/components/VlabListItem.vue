<template>
  <div class="col">
    <div class="card h-[550px] hover-shadow mb-4">
      <a
        :href="`/view/vlab/${vlab.slug}`"
        target="_blank">
        <img :src="vlab.image_url" class="card-img-top" alt="image"/>
      </a>
      <div class="card-body">
        <h5 class="card-title">
          <a
            :href="`/view/vlab/${vlab.slug}`"
            target="_blank"
            class="text-gray-900 hover:text-green-400">
            {{ vlab.title}}
          </a>
        </h5>

        <p class="card-text">{{ vlab.description }}</p>
        <div class="d-flex w-100 justify-content-end items-center mt-3">

          <router-link :to="{ name: 'VlabsView', params: { id: vlab.id } }"
                       class="flex py-1 px-3  text-md rounded-md text-indigo-500
                                  bg-white hover:bg-indigo-900">
            <svg xmins="http://www.w3.org/2000/svg"
                 class="h-6 w-6 mr-2"
                 fill="none"
                 viewbox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
            </svg>
          </router-link>
          <button v-if="vlab.id" type="button"
                  @click="emit('delete', vlab)"
                  class="trash h-8 w-8 flex items-center justify-center rounded-full text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <br>
</template>

<script setup>

import {defineEmits} from "vue";

const {vlab} = defineProps({
  vlab: Object
})
const emit = defineEmits(['delete'])

</script>

<style lang="scss" scoped>
.trash {
  color: red !important;
}
body {
  overflow-x: hidden;
}
nav {
  position: relative;
}

p {
  text-align: justify;
}
.fa {
  margin-right: 50px;
}
#name {
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
button {
  margin: 20px;
  outline: none;
  color: white;
}

.card-img-top {
  min-height: 230px;
  max-height: 230px;
  max-width: 600px;
}
</style>

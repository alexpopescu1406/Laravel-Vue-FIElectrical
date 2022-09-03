<template>
        <div class="col">
          <div class="card h-[550px] hover-shadow mb-4">
            <img :src="tool.image_url" class="card-img-top" alt="image"/>
            <div class="card-body">
              <h5 class="card-title">{{ tool.title}}</h5>
              <p class="card-text">{{ tool.description }}</p>
              <div class="d-flex w-100 justify-content-between items-center mt-3 mr-4">
              <a
            :href="`/view/tool/${tool.slug}`"
            target="_blank"
            class="h-6 w-6 flex items-center justify-center rounded-full border border-transparent text-sm text-gray-900 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <router-link :to="{ name: 'ToolsView', params: { id: tool.id } }"
                       class="flex py-1 px-3 ml-36 text-md rounded-md text-indigo-500
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
          <button v-if="tool.id" type="button"
                  @click="emit('delete', tool)"
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

const {tool} = defineProps({
  tool: Object
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

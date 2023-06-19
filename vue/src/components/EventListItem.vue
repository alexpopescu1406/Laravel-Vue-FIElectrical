<template>
  <div class="container card h-[450px] hover-shadow mb-4">
    <div class="row">
      <div class="col-md">
        <a
          :href="`/view/event/${event.slug}`"
          target="_blank">
      <img :src="event.image_url" class="card-img-top mt-4" alt="image"/>
        </a>
      </div>
        <div class="col-md">
        <h5 class="card-title mb-4 text-2xl d-flex justify-between">
          <a
            :href="`/view/event/${event.slug}`"
            target="_blank"
            class="text-gray-900 hover:text-green-400 mt-4">
            {{ event.title }}
            <span class="badge badge-primary">New</span>
          </a>
          <span class="mt-4 badge rounded-pill badge-success">{{event.type}}</span>
        </h5>
        <p id="name" class="card-text">{{ event.description }}</p>
        <div class="card-footer">
            <i class="fa-solid fa-location-dot"></i>
          <button type="button" class="text-black hover:text-red-800" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
            {{ event.location }}
          </button>
          <div class="modal fade" id="exampleModal" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">{{ event.location }}</h5>
                  <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <iframe :src=event.maplocation>
                  </iframe>
                  </div>
                <div class="modal-footer min-w-max">
                  <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          <p class="mb-0">
            <i class="fa-solid fa-calendar-days mr-2"></i> {{ event.date }}
          </p>
          <p class="mt-2">
            <i class="fa-solid fa-language mr-2"></i> {{event.language}}
          </p>
          <div class="d-flex w-100 justify-content-between items-center mt-2">
          <button v-if="event.id" type="button"
                  @click="emit('attend', event)"
                  class="btn btn-primary">
            <span>Attend</span>
          </button>
          <router-link :to="{ name: 'EventsView', params: { id: event.id } }"
                       class="flex py-1 px-3 ml-96 text-md rounded-md text-indigo-500
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

          <button v-if="event.id" type="button"
                  @click="emit('delete', event)"
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
  </div>
  <br>
</template>

<script setup>

import {defineEmits} from "vue";

const {event} = defineProps({
  event: Object
})
const emit = defineEmits(['delete', 'attend'])

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

iframe {
  width: 470px;
  height: 450px;
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
  min-height: 350px;
  max-height: 350px;
  max-width: 600px;
}
</style>

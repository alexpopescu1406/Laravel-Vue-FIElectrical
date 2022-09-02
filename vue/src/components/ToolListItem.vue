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

.post-content {
  text-align: justify;
}

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

.sidebar-widget .tags li a {
  background: #cfe0fc;
  color: #353535;
  padding: 4px 8px;
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
}

.sidebar-widget .tags li a:hover {
  background: #ffffff;
  color: #353535;
  padding: 4px 8px;
  border: 1px solid;
  border-color: #cfe0fc;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
}

ul li {
  padding: 0;
  margin: 0;
  line-height: 30px;
}

.list-inline-item {
  display: inline-block;
}

.sidebar-wdidget {
  background: #ffd200;
  padding: 4px 8px;
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;
}

.textcustom {
  color: rgb(0, 0, 0);
  font-family: 'Roboto', sans-serif;
  font-weight: normal;

}

.textcustom:hover {
  transition: 0.4s ease all;
  color: #1bc76e;
}

.horizline {
  display: block;
  max-width: 12%;
  margin-left: auto;
  margin-right: auto;
  padding: 1px;
}

.horizline2 {
  display: block;
  max-width: 25%;
  margin-right: auto;
  margin-bottom: 8px;
}

#textt {
  text-transform: uppercase;
  font-size: 40px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

.carousel .carousel-item {
  max-height: 550px;
}

.carousel-item img {
  object-fit: cover;
  max-height: 600px;
}

.post .post-meta {
  margin-bottom: 10px;
  margin-left: 80px;
}

.post .post-meta a {
  font-size: 14px;
  font-weight: 350;
  color: #555555;
  margin-right: 15px;
}

.post .post-meta a:hover {
  transition: 0.4s ease all;
  color: #1bc76e;
}

.post .post-details .title {
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 80px;
}

.titletext:hover {
  transition: 0.4s ease all;
  color: #148acb;
}

.post .post-meta a .fa {
  margin-right: 80px;
}

.fa {
  margin-right: 50px;
}

.post .post-content {
  margin-left: 80px;
}

.post .post-image + .post-date {
  margin-top: -20px;
  margin-left: 8px;
}

.post .post-date {
  font-size: 27px;
  font-weight: 600;
  color: #333333;
  background: #ffd200;
  display: inline-block;
  width: 60px;
  height: 85px;
  text-align: center;
  position: absolute;
  line-height: 55px;
}
#name {
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.post .post-date span {
  font-size: 13px;
  font-weight: normal;
  color: #ffffff;
  background: #323232;
  width: 60px;
  height: 32px;
  display: block;
  position: absolute;
  bottom: 0;
  letter-spacing: 1px;
  line-height: 32px;
}

.post .post-details a.button {
  margin-bottom: 0;
}

button {
  margin: 20px;
  outline: none;
  color: white;
}

.custom-btn {
  width: 120px;
  height: 35px;
  padding: 10px 25px;
  border: 1px solid #000;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  margin-left: 80px;
}

.btn-3 {
  line-height: 34px;
  padding: 0;
}

.btn-3:hover {
  background: transparent;
  color: #000;
}

.btn-3 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.btn-3:before,
.btn-3:after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  background: #000;
  transition: all 0.3s ease;
}

.btn-3:before {
  height: 0;
  width: 2px;
}

.btn-3:after {
  width: 0;
  height: 2px;
}

.btn-3:hover:before {
  height: 100%;
}

.btn-3:hover:after {
  width: 100%;
}

.btn-3 span:before,
.btn-3 span:after {
  position: absolute;
  content: "";
  right: 0;
  bottom: 0;
  background: #000;
  transition: all 0.3s ease;
}

.btn-3 span:before {
  width: 2px;
  height: 0;
}

.btn-3 span:after {
  width: 0;
  height: 2px;
}

.btn-3 span:hover:before {
  height: 100%;
}

.btn-3 span:hover:after {
  width: 100%;
}

header {
  position: fixed;
  z-index: 99;
  top: 0;
}
.card-img-top {
  min-height: 230px;
  max-height: 230px;
  max-width: 600px;
}
</style>

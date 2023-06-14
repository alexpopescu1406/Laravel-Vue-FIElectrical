<template>
  <div>
    <div class="post">
      <div class="post-image clearfix">
        <a
          :href="`/view/article/${article.slug}`"
          target="_blank">
          <img alt="article" :src="article.image_url" class="w-full h-full object-cover">
        </a>
      </div>
      <div class="post-date text-black">{{ article.dateday }}<span>{{ article.datemonth }}</span></div>
      <div class="post-details">
        <div class="post-title">
          <h4 class="pl-20 pt-3">
            <a
              :href="`/view/article/${article.slug}`"
              target="_blank"
              class="text-gray-900 hover:text-green-400">
              {{ article.title }}
            </a>
          </h4>
        </div>
        <div class="post-meta">
          <a href="#"><i class="fa-solid fa-user-tie"></i> Admin </a>
          <a href="#"><i class="fa-solid fa-heart"></i> {{ value4 }} Likes </a>
          <a href="#"><i class="fa-solid fa-comment"></i> Comments </a>
        </div>
        <div id="name" class="post-content">
          {{ article.description }}
        </div>
        <div class="d-flex w-100 justify-content-between items-center mt-3 mr-4">
          <router-link :to="{ name: 'ArticleView', params: { id: article.id } }"
                       class="flex py-2 px-4 border border-transparent text-md rounded-md text-white
                                  bg-indigo-600 hover:bg-indigo-700 ml-[660px] ">
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
            Edit
          </router-link>
          <button v-if="article.id" type="button"
                  @click="emit('delete', article)"
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
  <hr>
  <br>
</template>

<script setup>
function generateRandomInteger(max) {
  return Math.floor(Math.random() * max) + 1;
}

let value4 = generateRandomInteger(3430);

import {defineEmits} from "vue";

const {article} = defineProps({
  article: Object
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

nav {
  position: relative;
}

p {
  text-align: justify;
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
</style>

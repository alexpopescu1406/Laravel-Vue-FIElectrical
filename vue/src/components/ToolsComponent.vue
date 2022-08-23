<template>
  <section class="page-section-ptb pt-24">
      <div class="row">
        <div class="col-sm-12 mb-20">
          <div class="section-title text-center">
            <slot name="header"></slot>
            <h2 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl title">
              Best tools in Electrical Engineering</h2>
          </div>
        </div>
      </div>

      <div v-if="tools.loading" class="flex justify-center pb-96 pt-96">
        <div id="preloader">
          <div id="loader"></div>
        </div>
      </div>
      <div v-else>
        <div class="cards pr-36 pl-36">
          <div class="row row-cols-1 row-cols-md-4 g-5 ">
            <ToolListItem
              v-for="tool in tools.data"
              :key="tool.id"
              :tool="tool"
              @delete="deleteTool(tool)"
            />
          </div>
        </div>
            <br>
            <div class="flex justify-center mt-5">
              <nav
                class="relative z-0 inline-flex justify-center rounded-md  -space-x-px"
                aria-label="Pagination"
              >
                <a
                  v-for="(link, i) of tools.links"
                  :key="i"
                  :disabled="!link.url"
                  href="#"
                  @click="getForPage($event, link)"
                  aria-current="page"
                  class="relative inline-flex items-center px-4 py-2 border text-sm font-medium whitespace-nowrap"
                  :class="[
                    link.active
                      ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                      : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50',
                      i === 0 ? 'rounded-l-md bg-gray-100 text-gray-700' : '',
                      i === tools.links.length - 1 ? 'rounded-r-md' : '',
                    ]"
                  v-html="link.label"
                >
                </a>
              </nav>
            </div>
          </div>
  </section>
          <br>
          <br><br>
</template>

<script setup>
import store from "../store";
import {computed} from "vue";
import ToolListItem from "./ToolListItem.vue";

const tools = computed(() => store.state.tools);

store.dispatch('getTools')

const props = defineProps({
  title: String,
})

function deleteTool(tool) {
  if (
    confirm(
      `Are you sure you want to delete this tool? Operation can't be undone!`
    )
  ) {
    store.dispatch('deleteTool', tool.id)
      .then(() => {
        store.dispatch('getTools')
      })
  }
}

function getForPage(ev, link) {
  ev.preventDefault();
  if (!link.url || link.active) {
    return;
  }

  store.dispatch("getTools", { url: link.url });
}

</script>

<style lang="scss" scoped>
.card-header {
  margin-left: -25px;
  margin-bottom: 15px;
}

#preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#loader {
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #9370DB;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

#loader:before {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #2a32dc;
  -webkit-animation: spin 3s linear infinite;
  animation: spin 3s linear infinite;
}

#loader:after {
  content: "";
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #16b3e3;
  -webkit-animation: spin 1.5s linear infinite;
  animation: spin 1.5s linear infinite;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
p {
  text-align: justify;
}

h5 {
  text-transform: capitalize;
}

h3 {
  font-weight: 300;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
  text-transform: capitalize;
}
a {
  color: black !important;
}
.cards {
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
}

.textcustom {
  color: rgb(0, 0, 0);
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
  max-height: 400px;
}

.carousel-item img {
  object-fit: cover;
  max-height: 400px;
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
  border: none;
  font-family: 'Lato', sans-serif;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  font-weight: 400;
  display: block;
  margin: auto;
}

.btn-3 {
  line-height: 35px;
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

span {
  color: black;
}

.card-img-top + .post-date {
  margin-top: 0;
  margin-left: 0;
}

.col .post-date {
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

.col .post-date span {
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

.card-img-top {
  min-height: 230px;
  max-height: 230px;
  max-width: 600px;
}
</style>


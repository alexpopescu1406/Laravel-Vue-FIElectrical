<template>
  <div class="min-h-full">
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-14 w-14" src="../../src/assets/logodark.png" alt="logo"/>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <router-link
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.to"
                  :class="{
                    'bg-gray-900 text-white': item.name === $route.name,
                    'text-gray-300 hover:bg-gray-700 hover:text-white': $route.name !== item.to.name,
                    'px-3 py-2 rounded-md text-sm font-medium': true
                  }"
                >{{ item.name }}
                </router-link>
              </div>
            </div>
          </div>


          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <!-- Profile dropdown -->
              <Menu as="div" class="ml-3 relative">
                <div>
                  <MenuButton class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none
                                     focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt=""/>
                  </MenuButton>
                </div>
                <transition enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95">
                  <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1
                                    ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem v-slot="{ active }">
                      <a @click="logout"
                         :class="[ 'block px-4 py-2 text-sm text-gray-700 hover:text-gray-700 cursor-pointer']">
                        Sign out
                      </a>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400
                                    hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                                    focus:ring-offset-gray-800 focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true"/>
              <XIcon v-else class="block h-6 w-6" aria-hidden="true"/>
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.to"
            active-class="bg-gray-900 text-white"
            :class="[
              $route.name === item.to.name
                ? ''
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block px-3 py-2 rounded-md text-base font-medium',
            ]"
          >{{ item.name }}
          </router-link>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt=""/>
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">{{ user.name }}</div>
              <div class="text-sm font-medium leading-none text-gray-400">{{ user.email }}</div>
            </div>

          </div>
          <div class="mt-3 px-2 space-y-1">
            <DisclosureButton
              as="a"
              @click="logout"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white
                                      hover:bg-gray-700 cursor-pointer">
              Sign out
            </DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>

  <div id="carouselBasicExample" class="carousel slide carousel-fade" data-mdb-ride="carousel">
    <!-- Indicators -->
    <div class="carousel-indicators">
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>

    <!-- Inner -->
    <div class="carousel-inner">
      <!-- Single item -->
      <div class="carousel-item active bg-overlay-black-70">
        <img src="https://finleyusa.com/wp-content/uploads/2020/06/electrical-power-engineering.jpg"
             class="d-block w-100"
             alt=""/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Electrical Engineer</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>

      <!-- Single item -->
      <div class="carousel-item">
        <img src="https://previews.123rf.com/images/kinwun/kinwun1703/kinwun170300530/74705625-electrical-engineer-working-at-modern-thermal-power-plant.jpg"
             class="d-block w-100"
             alt=""/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Modern Power Plant</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <!-- Single item -->
      <div class="carousel-item ">
        <img src="https://media.wired.com/photos/5eb9c59f31ea8dc988a4feb9/4:3/w_2132,h_1599,c_limit/Transpo-teslafremont-1056653120.jpg"
             class="d-block w-100"
             alt=""/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Tesla Giga Factory</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
    </div>
    <!-- Inner -->

    <!-- Controls -->
    <button class="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div v-if="loading" class="flex justify-center mb-96 pb-96">
      <div id="preloader">
        <div id="loader"></div>
      </div>
    </div>
    <div v-else class="container pt-16">
      <div class="mb-96">
        <div class="post">
          <div class="post-image clearfix">
            <img alt="blog" :src="blog.image_url" class="w-full h-full object-cover">
          </div>
          <div class="post-date text-black">{{ blog.dateday }}<span>{{ blog.datemonth }}</span></div>
          <div class="post-details">
            <div class="post-title">
              <h4 class="pl-20 pt-3">
                <a
                  :href="`/view/blog/${blog.slug}`"
                  target="_blank"
                  class="text-gray-900 hover:text-green-400 text-3xl font-extrabold">
                  {{ blog.title }}
                </a>
              </h4>
            </div>
            <div class="post-meta">
              <a href="#"><i class="fa-solid fa-user-tie"></i> Admin </a>
              <a href="#"><i class="fa-solid fa-heart"></i> {{ value4 }} Likes </a>
              <a href="#"><i class="fa-solid fa-comment"></i> Comments </a>
            </div>
            <div id="name" class="post-content">
              {{ blog.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  <Footer/>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import Footer from "../components/Footer.vue";

const navigation = [
  {name: 'Home', to: {name: "Home"}},
  {name: 'Education', to: {name: "Education"}},
  {name: 'Blogs', to: {name: "Blogs"}},
  {name: 'Tools', to: {name: "Tools"}},
];

const route = useRoute();
const store = useStore();

const loading = computed(() => store.state.currentBlog.loading);
const blog = computed (() => store.state.currentBlog.data);

function generateRandomInteger(max) {
  return Math.floor(Math.random() * max) + 1;
}
let value4 = generateRandomInteger(3430);

store.dispatch("getBlogsBySlug", route.params.slug);

</script>

<style scoped>
#preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.carousel .carousel-item {
  max-height: 400px;
  background: black;
  overflow: hidden;
}

.carousel-item img {
  object-fit: cover;
  max-height: 400px;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0.45;
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
.post-content {
  text-align: justify;
}


ul li {
  padding: 0;
  margin: 0;
  line-height: 30px;
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
  white-space: pre-line;
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
</style>

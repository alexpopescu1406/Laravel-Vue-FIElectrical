<template>
  <div class="min-h-full">
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-14 w-14" src="../../src/assets/logogray.png" alt="logo"/>
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
  <div v-else class="bg-blue-800">

  <div  class="container mt-24 mb-24 pt-12 pb-12  ">
    <div class="row">
            <div class="col-md-8">
              <h4>
                <div class="d-flex justify-content-start mt-2 ml-12">
                  <span class="badge rounded-pill badge-info mb-4">{{ event.type }}</span>
                </div>
              </h4>
                  <h5 class="d-flex justify-content-start ml-12
                            text-gray-900 flex justify-center text-3xl text-light font-extrabold mb-4">
                    {{ event.title }}
                  </h5>
                  <div id="name" class="text-xl pl-12 text-light ">
                    {{ event.description }}
                  </div>
              <section class="text-center mt-24">
                <div class="row">
                  <div class="col-lg-4 col-md-6 mb-2 mb-md-2 mb-lg-0 position-relative">
                    <i class="fas fa-chalkboard-user fa-2x text-light mb-2"></i>
                    <h5 class=" fw-bold mb-3 text-light">Course Type</h5>
                    <h6 class="fw-normal mb-0 text-light">{{event.type}}</h6>
                    <div class="vr vr-blurry position-absolute my-0 h-100 d-none d-md-block text-light top-0 end-0"></div>
                  </div>

                  <div class="col-lg-4 col-md-6 mb-2 mb-md-2 mb-lg-0 position-relative">
                    <i class="fas fa-layer-group fa-2x text-light mb-2"></i>
                    <h5 class=" fw-bold mb-3 text-light">Product ID</h5>
                    <h6 class="fw-normal mb-0 text-light">{{event.id}}</h6>
                    <div class="vr vr-blurry position-absolute my-0 h-100 d-none text-light d-md-block top-0 end-0"></div>
                  </div>

                  <div class="col-lg-4 col-md-6 mb-2 mb-md-2 position-relative">
                    <i class="fas fa-graduation-cap fa-2x text-light mb-2"></i>
                    <h5 class="fw-bold mb-3 text-light">Credits</h5>
                    <h6 class="fw-normal mb-0 text-light">{{ event.credits }}</h6>
                  </div>

                </div>
              </section>
            </div>
                  <div class="col-md-4 bg-light pb-4 shadow rounded-xl pt-4">
                    <div class="text-center text-2xl text-dark fw-light">
                      Location & Date
                    </div>
                    <div id="name" class="text-xl text-center fw-light text-dark mt-4">
                      <i class="fas fa-calendar-days fw-light text-dark"></i>
                      {{ event.date }}
                    </div>
                    <div id="name" class="text-xl text-center fw-light text-dark mt-2 mb-2">
                      <i class="fas fa-location-dot text-dark "></i>
                    {{ event.location }}
                    </div>
                      <iframe :src=event.maplocation class="">
                      </iframe>
                  </div>

    </div>
  </div>
  </div>

  <div  id="containerright" class="container mt-24 mb-24 shadow">
    <div class="d-inline-flex p-3 bg-green-400 text-uppercase fw-bold text-light mb-2 ml-[-30px] mt-[20px]">
      DESCRIPTION
    </div>
    <div class="text-xl  text-dark mb-2 pb-2">
      {{ event.longdescription }}
    </div>

    </div>
  <Footer/>
</template>

<script setup>
import  { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import Footer from "../components/Footer.vue";

const navigation = [
  {name: 'Home', to: {name: "Home"}},
  {name: 'Education', to: {name: "Education"}},
  {name: 'Articles', to: {name: "Articles"}},
  {name: 'Tools', to: {name: "Tools"}},
  {name: 'Events', to: {name: "Events"}},

];

const route = useRoute();
const store = useStore();

const loading = computed(() => store.state.currentEvent.loading);
const event = computed (() => store.state.currentEvent.data)


store.dispatch("getEventsBySlug", route.params.slug);

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

iframe {
  width: 400px;
  height: 300px;
}

body {
  overflow-x: hidden !important;
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
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}


</style>

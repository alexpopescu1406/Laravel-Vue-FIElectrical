<template>
  <div id="carouselExampleCaptions" class="carousel slide mb-4" data-mdb-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-mdb-target="#carouselExampleCaptions"
        data-mdb-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-mdb-target="#carouselExampleCaptions"
        data-mdb-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-mdb-target="#carouselExampleCaptions"
        data-mdb-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active bg-black">
        <img src="https://www.teslarati.com/wp-content/uploads/2018/07/tesla-factory.jpg" class="w-100 opacity-70"
             alt="Wild Landscape"/>
        <div class="carousel-caption d-none d-md-block text-center ">
          <h5>EV Gigafactory</h5>
          <p class="text-center d-flex align-items-center justify-content-center">Inside an electrical vehicles
            fabrication factory.</p>
        </div>
      </div>
      <div class="carousel-item bg-black">
        <img src="https://wallpaperaccess.com/full/2183826.jpg" class="d-block w-100 opacity-70" alt="Camera"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Green energy</h5>
          <p class="text-center d-flex align-items-center justify-content-center">Better ways to produce electrical
            energy.</p>
        </div>
      </div>
      <div class="carousel-item bg-black">
        <img src="https://www.tesla.com/sites/default/files/images/roadster/roadster-social.jpg"
             class="d-block w-100 opacity-70" alt="Exotic Fruits"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Tesla Roadster</h5>
          <p class="text-center d-flex align-items-center justify-content-center">Fastest electrical vehicle.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <section class="page-section-ptb">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 mb-20">
          <div class="section-title text-center">
            <slot name="header"></slot>
            <h2 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 title">
              Latest Technical Articles in Electrical Engineering</h2>
          </div>
        </div>
      </div>
      <div class="text-xl font-extrabold text-end">
        Select Articles' Language:
        <button
          type="submit"
          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md
       text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          @click="callBoth">
          {{buttonText}}
        </button>
      </div>



      <div v-if="articles.loading" class="flex justify-center pb-96 pt-96">
        <div id="preloader">
          <div id="loader"></div>
        </div>
      </div>
      <div v-else>
        <div class="row">
          <div class="col-md-8 order-2 order-md-1 mt-5 mt-md-0 text-dark">
            <ArticleListItem
              v-for="article in articles.data"
              :key="article.id"
              :article="article"
              @delete="deleteArticle(article)"
            />
            <br>
            <div class="flex justify-center mt-5">
              <nav
                class="relative z-0 inline-flex justify-center rounded-md  -space-x-px"
                aria-label="Pagination"
              >
                <a
                  v-for="(link, i) of articles.links"
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
                      i === articles.links.length - 1 ? 'rounded-r-md' : '',
                    ]"
                  v-html="link.label"
                >
                </a>
              </nav>
            </div>
          </div>
          <br>
          <br><br>

          <div class="col-md-4 order-1 order-md-2">
            <div class="post-sidebar">
              <div class="sidebar-widget">
                <h4 class="widget-title">About Article</h4>
                <img src="../assets/horizline.png" alt="line" class="horizline2">
                <p>Get the latest informations in Electrical Engineering. Discuss with specialists around the globe
                  about
                  new discoveries. Publish your Technical Articles and get feedback from experts. <br>
                  Make use of many Tools to improve your work.</p>
              </div>

              <div class="sidebar-widget">
                <h4>Categories</h4>
                <img src="../assets/horizline.png" alt="line" class="horizline2">
                <ul class="widget-ul list-unstyled list-hand ">
                  <li><i class="fa-solid fa-hand-point-right"></i><a href="#" class="textcustom"> Microcontrollers </a>
                  </li>
                  <li><i class="fa-solid fa-hand-point-right"></i><a href="#" class="textcustom"> Circuits </a></li>
                  <li><i class="fa-solid fa-hand-point-right"></i><a href="#" class="textcustom">
                    Telecommunications </a></li>
                  <li><i class="fa-solid fa-hand-point-right"></i><a href="#" class="textcustom"> Digital
                    Communications </a></li>
                  <li><i class="fa-solid fa-hand-point-right"></i><a href="#" class="textcustom"> AC/DC Analysis</a>
                  </li>
                </ul>
              </div>
              <div class="sidebar-widget">
                <h4 class="widget-title">Recent Posts</h4>
                <img src="../assets/horizline.png" alt="line" class="horizline2">
                <ul class="list-group list-group-light">
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                      <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 45px; height: 45px"
                           class="rounded-circle"/>
                      <div class="ms-3">
                        <router-link to="/view/article/digital-logic-design" target="_blank"
                                     class="textcustom fw-bold mnb-1">
                          Digital Logic Design (DLD)
                        </router-link>
                        <p class="text-muted mb-0"><i class="fa-solid fa-calendar-days"></i> June 20, 2022</p>
                      </div>
                    </div>
                    <span class="badge rounded-pill badge-success">Student</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                      <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" class="rounded-circle" alt=""
                           style="width: 45px; height: 45px"/>
                      <div class="ms-3">
                        <router-link to="/view/article/power-electronics" target="_blank"
                                     class="textcustom fw-bold mb-1">
                          Power Electronics
                        </router-link>
                        <p class="text-muted mb-0"><i class="fa-solid fa-calendar-days"></i> June 29, 2022</p>
                      </div>
                    </div>
                    <span class="badge rounded-pill badge-primary">Univ. Teacher</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                      <img src="https://mdbootstrap.com/img/new/avatars/7.jpg" class="rounded-circle" alt=""
                           style="width: 45px; height: 45px"/>
                      <div class="ms-3">
                        <router-link to="/view/article/embedded-systems" target="_blank"
                                     class="textcustom fw-bold mb-1">
                          Embedded Systems
                        </router-link>
                        <p class="text-muted mb-0"><i class="fa-solid fa-calendar-days"></i> July 12, 2022</p>
                      </div>
                    </div>
                    <span class="badge rounded-pill badge-warning">Electrical Eng.</span>
                  </li>
                </ul>
              </div>
              <br>
              <div class="sidebar-widget archives-widget">
                <h4 class="widget-title">Archives</h4>
                <img src="../assets/horizline.png" alt="line" class="horizline2">
              </div>
              <ul class="list-group list-group-light">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <i class="fa-solid fa-box-archive"> <a href="#" class="textcustom"> June</a></i>
                  <span class="badge badge-primary rounded-pill">14</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <i class="fa-solid fa-box-archive"> <a href="#" class="textcustom"> July</a></i>
                  <span class="badge badge-primary rounded-pill">2</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  <i class="fa-solid fa-box-archive"> <a href="#" class="textcustom"> August</a></i>
                  <span class="badge badge-primary rounded-pill">21</span>
                </li>
              </ul>
              <br>
              <div class="sidebar-widget">
                <h4 class="widget-title">Tags</h4>
                <img src="../assets/horizline.png" alt="line" class="horizline2">
                <ul class="tags list-inline">
                  <li class="list-inline-item"><a href="#" class="textcustom">Design</a></li>
                  <li class="list-inline-item"><a href="#" class="textcustom">Applications</a></li>
                  <li class="list-inline-item"><a href="#" class="textcustom">Electromagnetism</a></li>
                  <li class="list-inline-item"><a href="#" class="textcustom">Systems</a></li>
                  <li class="list-inline-item"><a href="#" class="textcustom">Electronics</a></li>
                  <li class="list-inline-item"><a href="#" class="textcustom">Electricity</a></li>
                  <li class="list-inline-item"><a href="#" class="textcustom">Semiconductors</a></li>
                  <li class="list-inline-item"><a href="#" class="textcustom">Signals</a></li>
                  <li class="list-inline-item"><a href="#" class="textcustom">Circuit analysis</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br>
</template>

<script>
import store from "../store/index.js";

export default {
  data() {
    return {
      buttonText: 'English',
    };
  },
  methods: {
    changeText(){
      if (this.buttonText == 'English'){
        this.buttonText = 'All'
      }else
      {
        this.buttonText = 'English'
      }
    },
    callBoth(){
      this.toggleFilteredMutation();
      this.changeText();
    },
   toggleFilteredMutation(){
  store.dispatch('toggleFilteredMutation')
    .then(()=>{
      store.dispatch('getArticlesEn')
    })
}
  }
}
</script>
<script setup>
import {computed} from "vue";
import ArticleListItem from "./ArticleListItem.vue";

const articles = computed(() => store.state.articles);

store.dispatch('getArticles')


function deleteArticle(article) {
  if (
    confirm(
      `Are you sure you want to delete this Article? Operation can't be undone!`
    )
  ) {
    store.dispatch('deleteArticle', article.id)
      .then(() => {
        store.dispatch('getArticles')
      })
  }
}

function getForPage(ev, link) {
  ev.preventDefault();
  if (!link.url || link.active) {
    return;
  }

  store.dispatch("getArticles", {url: link.url});
}

</script>

<style lang="scss" scoped>

.post-content {
  text-align: justify;
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

.carousel .carousel-item {
  max-height: 500px;
}

.carousel-item img {
  object-fit: cover;
  max-height: 500px;
}

button {
  margin: 20px;
  outline: none;
  color: white;
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

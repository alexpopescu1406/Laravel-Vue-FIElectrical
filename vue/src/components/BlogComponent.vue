<template>
  <div id="carouselExampleInterval" class="carousel slide carousel-fade" data-mdb-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-mdb-interval="2000">
        <img
          src="https://www.sincoselectrical.com/wp-content/uploads/2021/10/Master-of-Engineering-Electrical-Systems-Engineer.jpg"
          class="d-block w-100" alt=""/>
      </div>
      <div class="carousel-item" data-mdb-interval="4000">
        <img src="https://www.enersolare.net/wp-content/uploads/2020/02/fotovoltaico-incentivi-2020-1.jpg"
             class="d-block w-100" alt=""/>
      </div>
      <div class="carousel-item" data-mdb-interval="5000">
        <img src="https://media-exp1.licdn.com/dms/image/C4E1BAQGpoD6OAi9CCA/company-background_10000/0/1550767306745?e=2147483647&v=beta&t=39eCNBskOTHD6p-WwGmiZHyx2Sav9htdtV9VA9FM8Zw
"
             class="d-block w-100" alt=""/>
      </div>
    </div>
    <button class="carousel-control-prev" data-mdb-target="#carouselExampleInterval" type="button"
            data-mdb-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" data-mdb-target="#carouselExampleInterval" type="button"
            data-mdb-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <br><br>

  <section class="page-section-ptb">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 mb-20">
          <div class="section-title text-center">
            <slot name="header"></slot>
            <h2 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl title">
              Latest News in Electrical Engineering</h2>
          </div>
        </div>
      </div>

      <div v-if="blogs.loading" class="flex justify-center pb-96 pt-96">
        <div id="preloader">
          <div id="loader"></div>
        </div>
      </div>
      <div v-else>
        <div class="row">
          <div class="col-md-8 order-2 order-md-1 mt-5 mt-md-0 text-dark">
            <BlogListItem
              v-for="blog in blogs.data"
              :key="blog.id"
              :blog="blog"
              @delete="deleteBlog(blog)"
            />
            <br>
            <div class="flex justify-center mt-5">
              <nav
                class="relative z-0 inline-flex justify-center rounded-md  -space-x-px"
                aria-label="Pagination"
              >
                <a
                  v-for="(link, i) of blogs.links"
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
                      i === blogs.links.length - 1 ? 'rounded-r-md' : '',
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
                <h4 class="widget-title">About Blog</h4>
                <img src="../assets/horizline.png" alt="line" class="horizline2">
                <p>Get the latest informations in Electrical Engineering. Discuss with specialists around the globe about
                new discoveries. Publish your Technical Articles and get feedback from experts. <br>
                Make use of many Tools to improve your work.</p>
              </div>
              <div class="sidebar-widget">
                <h4>Categories</h4>
                <img src="../assets/horizline.png" alt="line" class="horizline2">
                <ul class="widget-ul list-unstyled list-hand ">
                  <li><i class="fa-solid fa-hand-point-right"></i><a href="#" class="textcustom"> Microcontrollers </a></li>
                  <li><i class="fa-solid fa-hand-point-right"></i><a href="#" class="textcustom"> Circuits </a></li>
                  <li><i class="fa-solid fa-hand-point-right"></i><a href="#" class="textcustom"> Telecommunications </a></li>
                  <li><i class="fa-solid fa-hand-point-right"></i><a href="#" class="textcustom"> Digital Communications </a></li>
                  <li><i class="fa-solid fa-hand-point-right"></i><a href="#" class="textcustom"> AC/DC Analysis</a></li>
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
                       <router-link to="/view/blog/digital-logic-design" target="_blank" class="textcustom fw-bold mnb-1">
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
                        <router-link to="/view/blog/power-electronics" target="_blank" class="textcustom fw-bold mb-1">
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
                        <router-link to="/view/blog/embedded-systems" target="_blank" class="textcustom fw-bold mb-1">
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

<script setup>
import store from "../store";
import {computed} from "vue";
import BlogListItem from "./BlogListItem.vue";

const blogs = computed(() => store.state.blogs);

store.dispatch('getBlogs')

const props = defineProps({
  title: String,
})

function deleteBlog(blog) {
  if (
    confirm(
      `Are you sure you want to delete this blog? Operation can't be undone!`
    )
  ) {
    store.dispatch('deleteBlog', blog.id)
      .then(() => {
        store.dispatch('getBlogs')
      })
  }
}

  function getForPage(ev, link) {
    ev.preventDefault();
    if (!link.url || link.active) {
      return;
    }

    store.dispatch("getBlogs", { url: link.url });
  }

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
</style>

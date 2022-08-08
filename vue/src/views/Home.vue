<template>
  <div id="carouselExampleInterval" class="carousel slide carousel-fade" data-mdb-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-mdb-interval="2000">
        <img src="https://www.newclothmarketonline.com/wp-content/uploads/2021/09/Swiss-mechanical-and-electrical-engineering-industries2.jpg"
             class="d-block w-100" alt=""/>
      </div>
      <div class="carousel-item" data-mdb-interval="4000">
        <img src="https://www.enersolare.net/wp-content/uploads/2020/02/fotovoltaico-incentivi-2020-1.jpg"
             class="d-block w-100" alt=""/>
      </div>
      <div class="carousel-item" data-mdb-interval="5000" >
        <img src="https://www.sincoselectrical.com/wp-content/uploads/2021/10/Master-of-Engineering-Electrical-Systems-Engineer.jpg"
             class="d-block w-100" alt=""/>
      </div>
    </div>
    <button class="carousel-control-prev" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <br><br>
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Electrical Engineering</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">A better way to understand it</p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div><br>

  <div class="text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      From the Blog
    </div>
  <div class="cards">
  <div class="d-flex justify-content-center row row-cols-1 row-cols-sm-4 g-4 text-center">
    <div class="col">
      <div class="card h-100">
        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top" alt="Skyscrapers"/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top" alt="Los Angeles Skyscrapers"/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div class="card-footer">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="" style="width: 45px; height: 45px"
                   class="rounded-circle" />
              <div class="ms-3">
                <a href="#" class="textcustom fw-bold mb-1"> Digital Logic Design (DLD)</a>
                <p class="text-muted mb-0"><i class="fa-solid fa-calendar-days"></i> June 20, 2022</p>
              </div>
            </div>
          </li>
      </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top" alt="Palm Springs Road"/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to show
            that equal height action.
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import BlogComponent from '../components/BlogComponent.vue';
import { AnnotationIcon, ChipIcon, NewspaperIcon, AcademicCapIcon, UserGroupIcon } from '@heroicons/vue/outline'

const features = [
  {
    name: 'Latest news',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: NewspaperIcon,
  },
  {
    name: 'Education',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Domain related events',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: UserGroupIcon,
  },
  {
    name: 'Tehnical articles',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ChipIcon,
  },
]

export default {
  name: "Home",
  components: {
    BlogComponent,
   },
  setup() {
    return {
      features,
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  color: black;

}
nav {
  position: relative;
}
.cards {

  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
}
p {
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
.sidebar-wdidget{
    background: #ffd200;
    padding: 4px 8px;
    border: 1px solid transparent;
    transition: all 0.3s ease-in-out;
}
.textcustom {
    color:rgb(0, 0, 0);
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
    margin-bottom: 8px  ;
}
#textt {
  text-transform: uppercase;
  font-size: 40px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

.carousel .carousel-item {
    max-height:550px;
}
.carousel-item img {
    object-fit:cover;
    max-height:600px;
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
    color: #1bc76e;
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
  color:white;
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
.btn-3:hover{
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
</style>

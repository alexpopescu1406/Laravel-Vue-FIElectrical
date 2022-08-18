<template>
  <div id="carouselExampleInterval" class="carousel slide carousel-fade" data-mdb-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-mdb-interval="2000">
        <img
          src="https://www.newclothmarketonline.com/wp-content/uploads/2021/09/Swiss-mechanical-and-electrical-engineering-industries2.jpg"
          class="d-block w-100" alt=""/>
      </div>
      <div class="carousel-item" data-mdb-interval="4000">
        <img src="https://www.enersolare.net/wp-content/uploads/2020/02/fotovoltaico-incentivi-2020-1.jpg"
             class="d-block w-100" alt=""/>
      </div>
      <div class="carousel-item" data-mdb-interval="5000">
        <img
          src="https://www.sincoselectrical.com/wp-content/uploads/2021/10/Master-of-Engineering-Electrical-Systems-Engineer.jpg"
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
  <br>

  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Electrical
          Engineering</h2>
        <p class="text-base text-indigo-600 font-semibold tracking-wide uppercase">A better way to understand it</p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Lorem ipsum dolor sit amet consect adipisicing elit.
          Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
      </div>
      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <component :is="feature.icon" class="h-6 w-6" aria-hidden="true"/>
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
  </div>
  <br>

  <div class="text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
    Trusted by engineers around the world
  </div>
  <br>
  <div class="container hover-shadow-soft">
    <div class="row">
      <div
        class="border-end col-sm-4 text-base text-center text-indigo-600 font-semibold tracking-wide uppercase mt-2 text-4xl leading-8 font-extrabold">
        250+
        <div class="text-center text-sm leading-8 font-extrabold tracking-tight text-gray-500">
          Articles
        </div>
      </div>
      <div
        class="border-end col-sm-4 text-base text-center text-indigo-600 font-semibold tracking-wide uppercase mt-2 text-4xl leading-8 font-extrabold">
        230k
        <div class="text-center text-sm leading-8 font-extrabold tracking-tight text-gray-500">
          Users
        </div>
      </div>
      <div
        class="col-sm-4 text-base text-center text-indigo-600 font-semibold tracking-wide uppercase mt-2 text-4xl leading-8 font-extrabold">
        580
        <div class="text-center text-sm leading-8 font-extrabold tracking-tight text-gray-500">
          Tools
        </div>
      </div>
    </div>
  </div>
  <br><br><br>

  <div class="text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
    From the Blog
  </div>
  <br>
  <div class="cards">
    <div class="d-flex justify-content-center row row-cols-1 row-cols-sm-4 g-5 text-left">
      <div v-for="blog in blogs" :key="blog.title" class="relative">
        <div class="col">
          <router-link to="Blogs">
            <div class="card h-100 hover-shadow">
              <img :src="blog.image" class="card-img-top" alt="Power Electronics"/>
              <div class="card-body">
                <p class="text-base text-indigo-600 font-semibold tracking-wide uppercase">{{ blog.type }}</p>
                <h5 class="card-title">{{ blog.title }}</h5>
                <p class="card-text">{{ blog.description }}</p>
              </div>
              <div class="card-footer">
                <li class="d-flex justify-content-start">
                  <div class="d-flex align-items-center">
                    <img :src="blog.avatar" alt="" style="width: 45px; height: 45px" class="rounded-circle"/>
                    <div class="ms-3">
                      <p class="fw-bold mb-1 d-flex justify-content-start">{{ blog.person }}</p>
                      <p class="text-muted mb-0">
                        <i class="fa-solid fa-calendar-days"></i>{{ blog.date }} - {{ blog.time }}</p>
                    </div>
                  </div>
                </li>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <br><br>

  <div class="mb-7 text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
    Testimonials
  </div>
  <div class="imagine bg-indigo-600 rounded-xl text-center h-56 shadow">
    <div class="imagine2">
      <img class="rounded-xl" src="https://mdbootstrap.com/img/new/avatars/9.jpg" alt=""
           style="width: 300px; height: 300px">
    </div>
    <div>
      <i class="sm:text-5xl fa-solid fa-quote-left text-white mr-96 mb-2 mt-2"></i>
      <p class="ml-56 text-white sm:text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit estibulum, </p>
      <p class="ml-24 text-white sm:text-2xl"> curabitur sapien odio, commodo eu elementum sed.</p>
      <p class="text-md-between mr-72  text-gray-100"> - Judith Helen, Student</p>
    </div>
  </div>
  <br>
  <div class="imagine3 bg-indigo-600 rounded-xl text-center h-56 shadow mb-24">
    <div class="imagine4">
      <img class="rounded-xl " src="https://mdbootstrap.com/img/new/avatars/2.jpg" alt=""
           style="width: 300px; height: 300px">
    </div>
    <p class="pt-4 mt-4 mr-96 text-white sm:text-2xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit estibulum, </p>
    <p class="mr-96  text-white sm:text-2xl"> curabitur sapien odio, commodo eu elementum sed.</p>
    <p class="text-md-between ml-72 text-gray-100"> - Mark Steven, PHD</p>
    <i class="sm:text-5xl fa-solid fa-quote-right text-white ml-96"></i>
  </div>
  <br><br>

  <div class="pl-12 pr-12">
    <div class="cards bg-slate-900 pb-12 rounded-3xl shadow">
      <div class="text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl p-4 mr-4">
        Meet our Team
      </div>
      <br>
      <div class="d-flex justify-content-center row row-cols-1 row-cols-sm-4 g-2 text-left pl-12 pr-4 pb-4">
        <div v-for="team in teams" :key="team.name" class="relative">
          <div class="col">
            <div class="card h-100 bg-slate-800 w-96 mb-5">
              <div class="bg-slate-800 d-flex align-items-center justify-center pt-4">
                <img :src="team.image" style="width: 300px; height: 300px"
                     class="rounded-full d-flex align-items-center"
                     alt="avatar"/>
              </div>
              <div class="card-body bg-slate-800">
                <p class="card-text text-white">{{ team.name }}</p>
                <div class="d-flex">
                  <div class=" w-100 text-base text-indigo-500 text-md d-flex justify-content-between">
                    {{ team.role }}
                  </div>
                  <div class="w-20">
                    <a :href="team.twitter" target="_blank">
                      <i class="hover:text-blue-500 fa-brands mr-4 fa-twitter text-gray-300"></i>
                    </a>
                    <a :href="team.linkedin" target="_blank">
                      <i class="hover:text-blue-500 fa-brands fa-linkedin text-gray-300"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br><br>
</template>

<script>
import BlogComponent from '../components/BlogComponent.vue';
import {ChipIcon, NewspaperIcon, AcademicCapIcon, UserGroupIcon} from '@heroicons/vue/outline'

const teams = [
  {
    name: 'Maria Gomez',
    role: 'Designer',
    image: 'https://mdbootstrap.com/img/new/avatars/5.jpg',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Arthur Jordan',
    role: 'Copywriter',
    image: 'https://mdbootstrap.com/img/new/avatars/3.jpg',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Andrea Gonzalez',
    role: 'Front-End Developer',
    image: 'https://mdbootstrap.com/img/new/avatars/20.jpg',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Floyd John',
    role: 'VP, Human Resources',
    image: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Ly-Chan',
    role: 'Copywriter',
    image: 'https://mdbootstrap.com/img/new/avatars/18.jpg',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Maria Sol',
    role: 'Chief Editor',
    image: 'https://mdbootstrap.com/img/new/avatars/6.jpg',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'John Terry',
    role: 'Co-Founder / CEO',
    image: 'https://mdbootstrap.com/img/new/avatars/1.jpg',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Ariana Swift',
    role: 'Editor',
    image: 'https://mdbootstrap.com/img/new/avatars/14.jpg',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
]

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

const blogs = [
  {
    type: 'Article',
    title: 'Power Electronics',
    description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n' +
      '            Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione',
    date: 'March 15, 2022',
    image: 'https://www.powerelectronicsnews.com/wp-content/uploads/sites/3/2020/12/main-power-electronics-2021.jpg?fit=1754%2C1242',
    time: '48 min read',
    person: 'Daniela Metz',
    avatar: 'https://mdbootstrap.com/img/new/avatars/6.jpg',
  },
  {
    type: 'Video',
    title: 'Digital Logic Design (DLD)',
    description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n' +
      '            Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione',
    date: 'June 20, 2022',
    image: 'https://images.ctfassets.net/vne94x762vsn/3n5sFqaSY8M6YAMoYYYAuM/3d818783f2ad3d69c1174fc0b62cb667/digitallogic2.jpg',
    time: '32 min read',
    person: 'Martin Ross',
    avatar: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
  },
  {
    type: 'Case study',
    title: 'Electric Motors',
    description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n' +
      '            Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione',
    date: 'July 5, 2022',
    image: 'https://assets.new.siemens.com/siemens/assets/api/uuid:455c87973c6faad63ba5a7c4c95bf5a864b79852/width:1125/quality:high/simotics-electric-motors.jpg',
    time: '29 min read',
    person: 'Andrea Joseph',
    avatar: 'https://mdbootstrap.com/img/new/avatars/9.jpg',
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
      teams,
      blogs,
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  color: black;
}

.imagine {
  width: 70%;
  margin-left: 110px;
  z-index: 1;
  position: relative;
}

.imagine2 {
  left: 35px;
  top: -35px;
  position: absolute;
  z-index: 2;
}

.imagine3 {
  width: 70%;
  margin-left: 460px;
  z-index: 1;
  position: relative;
}

.imagine4 {
  left: 988px;
  top: -35px;
  position: absolute;
  z-index: 2;
}

.container {
  max-width: 40%;
}

nav {
  position: relative;
}

.card-img-top {
  min-height: 230px;
  max-height: 300px;
  max-width: 600px;
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
  max-height: 500px;
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
</style>

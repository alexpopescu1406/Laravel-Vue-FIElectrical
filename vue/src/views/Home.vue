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
        <p class="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">Becoming a good electrical engineer requires a lot of passion, training and commitment.
          This comprehensive site is prepared as a resource for individuals and professionals interested in the electrical engineering path.</p>
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

  <div class="text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 ">
    Latest Technical Articles
  </div>
  <br>
  <div class="container">
    <div class="cards">
      <div class="row row-cols-1 row-cols-md-3 g-5 text-left">
        <div v-for="article in articles" :key="article.title" class="relative">
          <div class="col">
            <router-link to="articles">
              <div class="card hover-shadow">
                <img :src="article.image" class="card-img-top" alt="Power Electronics"/>
                <div class="card-body">
                  <p class="text-base text-indigo-600 font-semibold uppercase">{{ article.type }}</p>
                  <h5 class="card-title">{{ article.title }}</h5>
                  <p class="card-text">{{ article.description }}</p>
                </div>
                <div class="card-footer">
                  <li class="d-flex justify-content-start">
                    <div class="d-flex align-items-center">
                      <img :src="article.avatar" alt="" style="width: 45px; height: 45px" class="rounded-circle"/>
                      <div class="ms-3">
                        <p class="fw-bold mb-1 d-flex justify-content-start">{{ article.person }}</p>
                        <p class="text-muted mb-0">
                          <i class="fa-solid fa-calendar-days mr-2"></i>{{ article.date }} - {{ article.time }}</p>
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
  </div>
  <br><br>

  <div class="mb-4 text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900">
    Testimonials
  </div>
  <div class="container">
    <div class="imagine bg-indigo-600 rounded-xl text-center shadow mb-4">
      <div class="imagine2 hover-zoom">
        <img class="rounded-xl" src="https://mdbootstrap.com/img/new/avatars/9.jpg" alt=""
             style="width: 200px; height: 200px">
      </div>
      <div>
        <i class="fa-solid fa-quote-left text-white mb-2 mt-2"></i>
        <p class="pt-2 text-white">
           FIElectrical helped me to gain a better understanding of electrical engineering</p>
        <p class="text-white"> and technical issues in general.</p>
        <p class="text-md-between text-gray-100 pb-2"> - Judith Helen, Student</p>
      </div>
    </div>
    <br>
    <div class="imagine3 bg-indigo-600 rounded-xl text-center shadow">
      <div class="imagine4 hover-zoom">
        <img id="imagine44" class="rounded-xl " src="https://mdbootstrap.com/img/new/avatars/2.jpg" alt=""
             style="width: 200px; height: 200px">
      </div>
      <p class="pt-2 text-white">
        Things that seemed hard in the past, are now easier to work with</p>
      <p class="text-white">thanks to the Articles and Tools found here.</p>
      <p class="text-md-between text-gray-100"> - Mark Steven, PHD</p>
      <i class=" fa-solid fa-quote-right text-white "></i>
    </div>
  </div>
  <br><br>

  <div class="container">
    <div class="cards bg-slate-900 pb-4 rounded-3xl shadow">
      <div class="text-center mt-2 text-3xl font-extrabold text-white pt-4">
        Meet our Team
      </div>
      <br>
      <div class="row row-cols-1 row-cols-md-3 g-3 text-left">
        <div v-for="team in teams" :key="team.name" class="relative">
          <div class="col">
            <div class="card bg-slate-800 mb-5 ml-4 mr-4">
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
import ArticleComponent from '../components/ArticleComponent.vue';
import {ChipIcon, NewspaperIcon, AcademicCapIcon, UserGroupIcon,  CalculatorIcon} from '@heroicons/vue/outline'

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
    name: 'Tools',
    description:
      'Useful calculators and instruments designed to make your job easier.',
    icon:  CalculatorIcon,
  },
  {
    name: 'Education',
    description:
      'Find out which are the best Electrical Engineering Universities around the world. Sort them based on your personal preferences.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Domain related events',
    description:
      'Search for technical domain related events in your local area or plan them yourself.',
    icon: UserGroupIcon,
  },
  {
    name: 'Technical articles',
    description:
      'Gain access to the most unique and interesting approaches made in electrical engineering or post your own scientific researches.',
    icon: ChipIcon,
  },
]

const articles = [
  {
    type: 'Article',
    title: 'Power Electronics',
    description: ' Power electronics is the application of electronics to the control and conversion of electric power.\n' +
                  'The first high-power electronic devices were made using mercury-arc valves.\n' +
                  'In modern systems, the conversion is performed with semiconductor switching devices such as diodes, thyristors,\n' +
                  'and power transistors such as the power MOSFET and IGBT.',
    date: 'March 15, 2022',
    image: 'https://www.powerelectronicsnews.com/wp-content/uploads/sites/3/2020/12/main-power-electronics-2021.jpg?fit=1754%2C1242',
    time: '48 min read',
    person: 'Daniela Metz',
    avatar: 'https://mdbootstrap.com/img/new/avatars/6.jpg',
  },
  {
    type: 'Video',
    title: 'Digital Logic Design (DLD)',
    description: 'Digital logic design is a system in electrical and computer engineering that uses simple number values to produce input and output operations.\n' +
                  'As a digital design engineer, you may assist in developing cell phones, computers, and related personal electronic devices.\n' +
                  'Continue reading to find out what training can develop skills in function algorithms and binary conversion.',
    date: 'June 20, 2022',
    image: 'https://images.ctfassets.net/vne94x762vsn/3n5sFqaSY8M6YAMoYYYAuM/3d818783f2ad3d69c1174fc0b62cb667/digitallogic2.jpg',
    time: '32 min read',
    person: 'Martin Ross',
    avatar: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
  },
  {
    type: 'Case study',
    title: 'Electric Motors',
    description: ' An electric motor is an electrical machine that converts electrical energy into mechanical energy.\n' +
                  'Most electric motors operate through the interaction between the motors magnetic field and electric current\n' +
                  'in a wire winding to generate force in the form of torque applied on the motors shaft.\n' +
                  'Electric motors can be powered by DC sources or by AC sources.',
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
    ArticleComponent,
  },
  setup() {
    return {
      features,
      teams,
      articles,
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  color: black;
}
.imagine {
  z-index: 1;
  position: relative;
}
@media screen and (max-width: 770px) {
  .imagine2 {
    display: none;
  }
}
.imagine2 {
  left: 35px;
  top: -25px;
  position: absolute;
}
.imagine3 {
  position: relative;
}
.imagine4 {
  left: 1050px;
  top: -20px;
  position: absolute;
}
nav {
  position: relative;
}
.card-img-top {
  min-height: 300px;
  max-height: 300px;
}
.cards {
  margin-bottom: 30px;
}
.carousel .carousel-item {
  max-height: 500px;
}
.carousel-item img {
  object-fit: cover;
  max-height: 600px;
}
</style>

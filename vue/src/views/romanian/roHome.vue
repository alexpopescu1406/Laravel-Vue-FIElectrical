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
        <h2 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Inginerie Electrică</h2>
        <p class="text-base text-indigo-600 font-semibold tracking-wide uppercase">un mod mai ușor de a învăța</p>
        <p class="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">Formarea unui bun inginer electric necesită multă pasiune, pregătire și angajament.
        Acest site reprezintă o resursă complexă atât pentru profesioniștii care activează în domeniu, cât și pentru studenții care au ales această cale.</p>
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
    Utilizat cu încredere de ingineri din toată lumea
  </div>
  <br>
  <div class="container hover-shadow-soft">
    <div class="row">
      <div
        class="border-end col-sm-4 text-base text-center text-indigo-600 font-semibold tracking-wide uppercase mt-2 text-4xl leading-8 font-extrabold">
        250+
        <div class="text-center text-sm leading-8 font-extrabold tracking-tight text-gray-500">
          Articole
        </div>
      </div>
      <div
        class="border-end col-sm-4 text-base text-center text-indigo-600 font-semibold tracking-wide uppercase mt-2 text-4xl leading-8 font-extrabold">
        230k
        <div class="text-center text-sm leading-8 font-extrabold tracking-tight text-gray-500">
          Utilizatori
        </div>
      </div>
      <div
        class="col-sm-4 text-base text-center text-indigo-600 font-semibold tracking-wide uppercase mt-2 text-4xl leading-8 font-extrabold">
        580
        <div class="text-center text-sm leading-8 font-extrabold tracking-tight text-gray-500">
          Instrumente
        </div>
      </div>
    </div>
  </div>
  <br><br><br>

  <div class="text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 ">
    Ultimele articole tehnice publicate
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
    Recomandări
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
          FIElectrical m-a ajutat să înțeleg mai bine ingineria electrică</p>
        <p class="text-white"> și probleme tehnice în general.</p>
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
        Lucruri care păreau grele în trecut, acum sunt mai ușor de înțeles</p>
      <p class="text-white">datorită articolelor și instrumentelor găsite aici.</p>
      <p class="text-md-between text-gray-100"> - Mark Steven, PHD</p>
      <i class=" fa-solid fa-quote-right text-white "></i>
    </div>
  </div>
  <br><br>

  <div class="container">
    <div class="cards bg-slate-900 pb-4 rounded-3xl shadow">
      <div class="text-center mt-2 text-3xl font-extrabold text-white pt-4">
        Prezentarea Echipei
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
import ArticleComponent from '../../components/ArticleComponent.vue';
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
    role: 'VP, Resurse umane',
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
    role: 'Editor Șef',
    image: 'https://mdbootstrap.com/img/new/avatars/6.jpg',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'John Terry',
    role: 'Co-Fondator / CEO',
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
    name: 'Instrumente',
    description:
      'Calculatoare și instrumente utile concepute pentru a vă ușura munca.',
    icon:  CalculatorIcon,
  },
  {
    name: 'Educație',
    description:
      'Aflați care sunt cele mai bune universități de inginerie electrică din întreaga lume. Sortați-le în funcție de preferințele dvs. personale.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Evenimente',
    description:
      'Căutați evenimente legate de domeniul tehnic în zona dvs. sau planificați-le singur.',
    icon: UserGroupIcon,
  },
  {
    name: 'Articole tehnice',
    description:
      'Obțineți acces la cele mai interesante lucrări științifice sau postați propriile cercetări.',
    icon: ChipIcon,
  },
]

const articles = [
  {
    type: 'Articol',
    title: 'Electronică de Putere',
    description: 'Electronica de putere asigură, prin intermediul elementelor semiconductoare funcţionând în comutaţie, ' +
      'adaptarea, atât a formei energiei electrice furnizate de sursă, cât şi a parametrilor acesteia, în funcţie de necesităţile sarcinii.',
    date: 'Martie 15, 2022',
    image: 'https://www.powerelectronicsnews.com/wp-content/uploads/sites/3/2020/12/main-power-electronics-2021.jpg?fit=1754%2C1242',
    time: 'durata - 48 min',
    person: 'Daniela Metz',
    avatar: 'https://mdbootstrap.com/img/new/avatars/6.jpg',
  },
  {
    type: 'Video',
    title: 'Design Logic Digital (DLD)',
    description: 'DLD este un sistem care utilizează valori numerice simple pentru a produce ' +
      'operațiuni de intrare și ieșire. În calitate de inginer de proiectare digitală, puteți ajuta la dezvoltarea de dispozitive electronice personale aferente. ',
    date: 'Iunie 20, 2022',
    image: 'https://images.ctfassets.net/vne94x762vsn/3n5sFqaSY8M6YAMoYYYAuM/3d818783f2ad3d69c1174fc0b62cb667/digitallogic2.jpg',
    time: 'durata - 32 min',
    person: 'Martin Ross',
    avatar: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
  },
  {
    type: 'Studiu de caz',
    title: 'Motoare Electrice',
    description: 'Un motor electric este o mașină electrică care transformă energia electrică în energie mecanică. ' +
      'Majoritatea funcționează prin interacțiunea dintre câmpul magnetic al motoarelor și curentul' +
      ' electric într-o înfășurare a acestuia.',
    date: 'Iulie 5, 2022',
    image: 'https://assets.new.siemens.com/siemens/assets/api/uuid:455c87973c6faad63ba5a7c4c95bf5a864b79852/width:1125/quality:high/simotics-electric-motors.jpg',
    time: 'durata - 29 min',
    person: 'Andrea Joseph',
    avatar: 'https://mdbootstrap.com/img/new/avatars/9.jpg',
  },
]

export default {
  name: "roHome",
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

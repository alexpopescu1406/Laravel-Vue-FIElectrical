import {createRouter, createWebHistory} from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import AuthLayout from "../components/AuthLayout.vue";
import store from "../store";
import Home from "../views/Home.vue";
import Education from "../views/Education.vue";
import ArticleView from "../views/ArticleView.vue";
import Articles from "../views/Articles.vue";
import Tools from "../views/Tools.vue";
import ArticlePublicView from "../views/ArticlePublicView.vue";
import ToolsView from "../views/ToolsView.vue";
import ToolPublicView from "../views/ToolPublicView.vue";
import Events from "../views/Events.vue";
import EventsView from "../views/EventsView.vue";
import EventPublicView from "../views/EventPublicView.vue";
import VlabsView from "../views/VlabsView.vue";
import VlabPublicView from "../views/VlabPublicView.vue";
import Vlabs from "../views/Vlabs.vue";
import roHome from "../views/romanian/roHome.vue";
import roLogin from "../views/romanian/roLogin.vue";
import roRegister from "../views/romanian/roRegister.vue";
import roDefaultLayout from "../components/ro/roDefaultLayout.vue";
import roEducation from "../views/romanian/roEducation.vue";
import roArticles from "../views/romanian/roArticles.vue";
import roArticleView from "../views/romanian/roArticleView.vue";
import roArticlePublicView from "../views/romanian/roArticlePublicView.vue";
import roTools from "../views/romanian/roTools.vue";
import roToolPublicView from "../views/romanian/roToolPublicView.vue";
import roToolsView from "../views/romanian/roToolsView.vue";

const routes = [
  {
    path: '/',
    redirect: '/home/',
    name: 'Home',
    component: DefaultLayout,
    meta: {requiresAuth: true,},
    children: [
      {path: '/home', name: 'Home', component: Home},
      {path: '/education', name: 'Education', component: Education},
      {path: '/articles', name: 'Articles', component: Articles},
      {path: '/articles/create', name: 'ArticleCreate', component: ArticleView},
      {path: '/articles/:id', name: 'ArticleView', component: ArticleView},
      {path: '/tools', name: 'Tools', component: Tools},
      {path: '/tools/:id', name: 'ToolsView', component: ToolsView},
      {path: '/tools/create', name: 'ToolCreate', component: ToolsView},
      {path: '/events', name: 'Events', component: Events},
      {path: '/events/:id', name: 'EventsView', component: EventsView},
      {path: '/events/create', name: 'EventCreate', component: EventsView},
      {path: '/vlabs', name: 'Virtual Labs', component: Vlabs},
      {path: '/vlabs/:id', name: 'VlabsView', component: VlabsView},
      {path: '/vlabs/create', name: 'VlabCreate', component: VlabsView},
    ]
  },
  {
    path: '/',
    redirect: '/acasa',
    name: 'roHome',
    component: roDefaultLayout,
    meta: {requiresAuth: true,},
    children: [
      {path: '/acasa', name: 'Acasa', component: roHome},
      {path: '/educatie', name: 'Educatie', component: roEducation},
      {path: '/articole', name: 'Articole', component: roArticles},
      {path: '/articole/creeaza', name: 'CreeazaArticole', component: roArticleView},
      {path: '/articole/:id', name: 'VeziArticole', component: roArticleView},
      {path: '/instrumente', name: 'Instrumente', component: roTools},
      {path: '/instrumente/:id', name: 'VeziInstrumente', component: roToolsView},
      {path: '/instrumente/creeaza', name: 'CreeazaInstrumente', component: roToolsView},

    ]
  },
  {
    path: '/view/tool/:slug',
    name: 'ToolPublicView',
    component: ToolPublicView,
  },
  {
    path: '/view/instrumente/:slug',
    name: 'VeziInstrumentPublic',
    component: roToolPublicView,
  },
  {
    path: '/view/article/:slug',
    name: 'ArticlePublicView',
    component: ArticlePublicView,
  },
  {
    path: '/view/articole/:slug',
    name: 'VeziArticolPublic',
    component: roArticlePublicView,
  },
  {
    path: '/view/event/:slug',
    name: 'EventPublicView',
    component: EventPublicView,
  },
  {
    path: '/view/vlab/:slug',
    name: 'VlabPublicView',
    component: VlabPublicView,
  },


  {
    path: '/auth',
    redirect: '/login',
    name: 'Auth',
    component: AuthLayout,
    meta: {isGuest: true},
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/login/ro',
        name: 'roLogin',
        component: roLogin
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      },
      {
        path: '/register/ro',
        name: 'roRegister',
        component: roRegister
      },
    ]
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return {
      top: 0,
   }
  },
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({name: 'Login'});
  } else if (store.state.user.token && (to.meta.isGuest)) {
    next({name: 'Home'});
  } else {
    next();
  }
});

export default router;

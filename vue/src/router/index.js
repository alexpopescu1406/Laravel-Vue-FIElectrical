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
import VirtualLabs from "../views/VirtualLabs.vue";
import VirtualLabsView from "../views/VirtualLabsView.vue";
import VirtualLabPublicView from "../views/VirtualLabPublicView.vue";

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'Home',
    component: DefaultLayout,
    meta: {requiresAuth: true},
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
      {path: '/virtuallabs', name: 'VirtualLabs', component: VirtualLabs},
      {path: '/vrituallabs/:id', name: 'VirtualLabsView', component: VirtualLabsView},
      {path: '/virtuallabs/create', name: 'VirtualLabsCreate', component: VirtualLabsView},
    ]
  },
  {
    path: '/view/tool/:slug',
    name: 'ToolPublicView',
    component: ToolPublicView,
  },
  {
    path: '/view/article/:slug',
    name: 'ArticlePublicView',
    component: ArticlePublicView,
  },
  {
    path: '/view/event/:slug',
    name: 'EventPublicView',
    component: EventPublicView,
  },
  {
    path: '/view/virtuallab/:slug',
    name: 'VirtualLabPublicView',
    component: VirtualLabPublicView,
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
        path: '/register',
        name: 'Register',
        component: Register
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

import { createStore } from "vuex";
import axiosClient from "../axios";

const tmpBlog = [
  {
    id: 100,
    title: "test",
    date: "19 Jan",
    image: "https://www.careergirls.org/wp-content/uploads/2018/06/ElectricalEngineer1440x1000.jpg",
    content:"asdasdasdasd"
  }];
const store = createStore( {
  state: {
    user: {
      data: {

        },
      token: sessionStorage.getItem("TOKEN"),
    },
    blogs: [...tmpBlog],
  },
  getter: {},
  actions: {
    register({ commit }, user) {
      return axiosClient.post('/register', user)
        .then(({ data }) => {
          commit('setUser', data);
          return data;
        })
    },
   login({ commit }, user) {
      return axiosClient.post('/login',user)
        .then(({ data }) => {
          commit('setUser', data);
          return data;
        })
   },
    logout({ commit }) {
      return axiosClient.post('/logout')
        .then(response => {
          commit('logout')
          return response;
        })
    }
  },
  mutations: {
    logout: (state) => {
      state.user.data = {};
      state.user.token = null;
    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem('TOKEN', userData.token);
    },
  },
  modules: {},
});

export default store;

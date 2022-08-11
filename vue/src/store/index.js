import { createStore } from "vuex";
import axiosClient from "../axios";

const tmpBlog = [
  {
    id: 100,
    title: "test",
    dateday: "19",
    datemonth: "JUNE",
    image: "https://www.careergirls.org/wp-content/uploads/2018/06/ElectricalEngineer1440x1000.jpg",
    content:"asdasdasdasd",
  },
  {
    id: 101,
    title: "test2",
    dateday: "13",
    datemonth: "JUNE",
    image: "https://www.careergirls.org/wp-content/uploads/2018/06/ElectricalEngineer1440x1000.jpg",
    content:"asdasdasdzzzzzzzzzzzzzzzzzzzasd",
  },
  {
    id: 102,
    title: "test3",
    dateday: "21",
    datemonth: "JUNE",
    image: "https://www.careergirls.org/wp-content/uploads/2018/06/ElectricalEngineer1440x1000.jpg",
    content:"asdasdasdaasdasdasdasdasdasdsd",
  }
  ];

const store = createStore( {
  state: {
    user: {
      data: {},
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
          commit('setToken', data.token)
          return data;
        })
    },
   login({ commit }, user) {
      return axiosClient.post('/login',user)
        .then(({ data }) => {
          commit('setUser', data);
          commit('setToken', data.token)
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
      sessionStorage.removeItem("TOKEN");
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

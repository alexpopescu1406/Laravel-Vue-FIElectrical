import {createStore} from "vuex";
import axiosClient from "../axios";

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
    currentBlog: {
      loading: false,
      data: {}
    },

    blogs: {
      loading: false,
      links: [],
      data: []
    },
    notification: {
      show: false,
      type: null,
      message: null
    }
  },
  getters: {},
  actions: {
    getBlog({commit}, id) {
      commit("setCurrentBlogLoading", true);
      return axiosClient
        .get(`/blog/${id}`)
        .then((res) => {
          commit("setCurrentBlog", res.data);
          commit("setCurrentBlogLoading", false);
          return res;
        })
        .catch((err) => {
          commit("setCurrentBlogLoading", false);
          throw err;
        });
    },
    saveBlog({commit}, blog) {
      delete blog.image_url;
      let response;
      if (blog.id) {
        response = axiosClient
          .put(`/blog/${blog.id}`, blog)
          .then((res) => {
            commit("setCurrentBlog", res.data);
            return res;
          });
      } else {
        response = axiosClient.post("/blog", blog).then((res) => {
          commit("setCurrentBlog", res.data)
          return res;
        });
      }
      return response;
    },
    deleteBlog({}, id) {
      return axiosClient.delete(`/blog/${id}`);
    },
    getBlogs({commit}, {url = null} = {}) {
      url = url || '/blog'
      commit('setBlogsLoading', true)
      return axiosClient.get(url).then((res) => {
        commit('setBlogsLoading', false)
        commit("setBlogs", res.data);
        return res;
      });
    },
    getBlogsBySlug({commit}, slug) {
      commit("setCurrentBlogLoading", true);
      return axiosClient
        .get(`/blog-by-slug/${slug}`)
        .then((res) => {
         commit("setCurrentBlog", res.data);
         return res;
        })
        .catch((err) => {
          throw err;
        }).finally(()=>{
          commit("setCurrentBlogLoading", false);

        });
    },
    register({commit}, user) {
      return axiosClient.post('/register', user)
        .then(({data}) => {
          commit('setUser', data);
          commit('setToken', data.token)
          return data;
        })
    },
    login({commit}, user) {
      return axiosClient.post('/login', user)
        .then(({data}) => {
          commit('setUser', data);
          commit('setToken', data.token)
          return data;
        })
    },
    logout({commit}) {
      return axiosClient.post('/logout')
        .then(response => {
          commit('logout')
          return response;
        })
    }
  },
  mutations: {
    setCurrentBlogLoading: (state, loading) => {
      state.currentBlog.loading = loading;
    },
    setBlogsLoading: (state, loading) => {
      state.blogs.loading = loading;
    },
    setCurrentBlog: (state, blog) => {
      state.currentBlog.data = blog.data;
    },
    setBlogs: (state, blogs) => {
      state.blogs.links = blogs.meta.links;
      state.blogs.data = blogs.data;
    },

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
    notify: (state, {message, type}) => {
      state.notification.show = true;
      state.notification.type = type;
      state.notification.message = message;
      setTimeout(() => {
        state.notification.show = false;
      }, 3000)
    }
  },
  modules: {},
});

export default store;

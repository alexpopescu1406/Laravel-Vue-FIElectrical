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
    },
    currentTool: {
      loading: false,
      data: {}
    },
    tools: {
      loading: false,
      links: [],
      data: []
    },
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
        })
        .finally(()=>{
          commit("setCurrentBlogLoading", false);
        });
    },


    getTool({commit}, id) {
      commit("setCurrentToolLoading", true);
      return axiosClient
        .get(`/tool/${id}`)
        .then((res) => {
          commit("setCurrentTool", res.data);
          commit("setCurrentToolLoading", false);
          return res;
        })
        .catch((err) => {
          commit("setCurrentToolLoading", false);
          throw err;
        });
    },
    saveTool({commit}, tool) {
      delete tool.image_url;
      let response;
      if (tool.id) {
        response = axiosClient
          .put(`/tool/${tool.id}`, tool)
          .then((res) => {
            commit("setCurrentTool", res.data);
            return res;
          });
      } else {
        response = axiosClient.post("/tool", tool).then((res) => {
          commit("setCurrentTool", res.data)
          return res;
        });
      }
      return response;
    },
    deleteTool({}, id) {
      return axiosClient.delete(`/tool/${id}`);
    },
    getTools({commit}, {url = null} = {}) {
      url = url || '/tool'
      commit('setToolsLoading', true)
      return axiosClient.get(url).then((res) => {
        commit('setToolsLoading', false)
        commit("setTools", res.data);
        return res;
      });
    },
    getToolsBySlug({commit}, slug) {
      commit("setCurrentToolLoading", true);
      return axiosClient
        .get(`/tool-by-slug/${slug}`)
        .then((res) => {
          commit("setCurrentTool", res.data);
          return res;
        })
        .catch((err) => {
          throw err;
        })
        .finally(()=>{
          commit("setCurrentToolLoading", false);
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


    setCurrentToolLoading: (state, loading) => {
      state.currentTool.loading = loading;
    },
    setToolsLoading: (state, loading) => {
      state.tools.loading = loading;
    },
    setCurrentTool: (state, tool) => {
      state.currentTool.data = tool.data;
    },
    setTools: (state, tools) => {
      state.tools.links = tools.meta.links;
      state.tools.data = tools.data;
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

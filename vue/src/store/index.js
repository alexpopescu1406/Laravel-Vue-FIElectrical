import {createStore} from "vuex";
import axiosClient from "../axios";

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
    currentArticle: {
      loading: false,
      data: {}
    },
    articles: {
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
    getArticle({commit}, id) {
      commit("setCurrentArticleLoading", true);
      return axiosClient
        .get(`/article/${id}`)
        .then((res) => {
          commit("setCurrentArticle", res.data);
          commit("setCurrentArticleLoading", false);
          return res;
        })
        .catch((err) => {
          commit("setCurrentArticleLoading", false);
          throw err;
        });
    },
    saveArticle({commit}, article) {
      delete article.image_url;
      let response;
      if (article.id) {
        response = axiosClient
          .put(`/article/${article.id}`, article)
          .then((res) => {
            commit("setCurrentArticle", res.data);
            return res;
          });
      } else {
        response = axiosClient.post("/article", article).then((res) => {
          commit("setCurrentArticle", res.data)
          return res;
        });
      }
      return response;
    },
    deleteArticle({}, id) {
      return axiosClient.delete(`/article/${id}`);
    },
    getArticles({commit}, {url = null} = {}) {
      url = url || '/article'
      commit('setArticlesLoading', true)
      return axiosClient.get(url).then((res) => {
        commit('setArticlesLoading', false)
        commit("setArticles", res.data);
        return res;
      });
    },
    getArticlesBySlug({commit}, slug) {
      commit("setCurrentArticleLoading", true);
      return axiosClient
        .get(`/article-by-slug/${slug}`)
        .then((res) => {
         commit("setCurrentArticle", res.data);
         return res;
        })
        .catch((err) => {
          throw err;
        })
        .finally(()=>{
          commit("setCurrentArticleLoading", false);
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
    setCurrentArticleLoading: (state, loading) => {
      state.currentArticle.loading = loading;
    },
    setArticlesLoading: (state, loading) => {
      state.articles.loading = loading;
    },
    setCurrentArticle: (state, article) => {
      state.currentArticle.data = article.data;
    },
    setArticles: (state, articles) => {
      state.articles.links = articles.meta.links;
      state.articles.data = articles.data;
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

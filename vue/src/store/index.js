import {createStore} from "vuex";
import axiosClient from "../axios";
import Vuex from 'vuex';

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
    currentTool: {
      loading: false,
      data: {}
    },
    tools: {
      loading: false,
      links: [],
      data: []
    },
    currentVlab: {
      loading: false,
      data: {}
    },
    vlabs: {
      loading: false,
      links: [],
      data: []
    },
    currentEvent: {
      loading: false,
      data: {}
    },
    notification: {
      show: false,
      type: 'success',
      message: ''
    },
    events: {
      loading: false,
      links: [],
      data: []
    },
    isFilteredMutationActive: false,
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
    toggleFilteredMutation({ commit, state }) {
      commit('setFilteredMutationState', !state.isFilteredMutationActive);
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
    getArticlesRo({commit}, {url = null} = {}) {
      url = url || '/article'
      commit('setArticlesLoading', true)
      return axiosClient.get(url).then((res) => {
        commit('setArticlesLoading', false)
        commit("setArticlesRo", res.data);
        return res;
      });
    },
    getArticlesEn({commit}, {url = null} = {}) {
      url = url || '/article'
      commit('setArticlesLoading', true)
      return axiosClient.get(url).then((res) => {
        commit('setArticlesLoading', false)
        commit("setArticlesEn", res.data);
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


    getEvent({commit}, id) {
      commit("setCurrentEventLoading", true);
      return axiosClient
        .get(`/event/${id}`)
        .then((res) => {
          commit("setCurrentEvent", res.data);
          commit("setCurrentEventLoading", false);
          return res;
        })
        .catch((err) => {
          commit("setCurrentEventLoading", false);
          throw err;
        });
    },
    saveEvent({commit}, event) {
      delete event.image_url;
      let response;
      if (event.id) {
        response = axiosClient
          .put(`/event/${event.id}`, event)
          .then((res) => {
            commit("setCurrentEvent", res.data);
            return res;
          });
      } else {
        response = axiosClient.post("/event", event).then((res) => {
          commit("setCurrentEvent", res.data)
          return res;
        });
      }
      return response;
    },
    deleteEvent({}, id) {
      return axiosClient.delete(`/event/${id}`);
    },
    attendEvent({}, id) {

    },
    getEvents({commit}, {url = null} = {}) {
      url = url || '/event'
      commit('setEventsLoading', true)
      return axiosClient.get(url).then((res) => {
        commit('setEventsLoading', false)
        commit("setEvents", res.data);
        return res;
      });
    },
    getEventsRo({commit}, {url = null} = {}) {
      url = url || '/event'
      commit('setEventsLoading', true)
      return axiosClient.get(url).then((res) => {
        commit('setEventsLoading', false)
        commit("setEventsRo", res.data);
        return res;
      });
    },
    getEventsEn({commit}, {url = null} = {}) {
      url = url || '/event'
      commit('setEventsLoading', true)
      return axiosClient.get(url).then((res) => {
        commit('setEventsLoading', false)
        commit("setEventsEn", res.data);
        return res;
      });
    },
    getEventsBySlug({commit}, slug) {
      commit("setCurrentEventLoading", true);
      return axiosClient
        .get(`/event-by-slug/${slug}`)
        .then((res) => {
          commit("setCurrentEvent", res.data);
          return res;
        })
        .catch((err) => {
          throw err;
        })
        .finally(()=>{
          commit("setCurrentEventLoading", false);
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
    getToolsRo({commit}, {url = null} = {}) {
      url = url || '/tool'
      commit('setToolsLoading', true)
      return axiosClient.get(url).then((res) => {
        commit('setToolsLoading', false)
        commit("setToolsRo", res.data);
        return res;
      });
    },
    getToolsEn({commit}, {url = null} = {}) {
      url = url || '/tool'
      commit('setToolsLoading', true)
      return axiosClient.get(url).then((res) => {
        commit('setToolsLoading', false)
        commit("setToolsEn", res.data);
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




    getVlab({commit}, id) {
      commit("setCurrentVlabLoading", true);
      return axiosClient
        .get(`/vlab/${id}`)
        .then((res) => {
          commit("setCurrentVlab", res.data);
          commit("setCurrentVlabLoading", false);
          return res;
        })
        .catch((err) => {
          commit("setCurrentVlabLoading", false);
          throw err;
        });
    },
    saveVlab({commit}, vlab) {
      delete vlab.image_url;
      let response;
      if (vlab.id) {
        response = axiosClient
          .put(`/vlab/${vlab.id}`, vlab)
          .then((res) => {
            commit("setCurrentVlab", res.data);
            return res;
          });
      } else {
        response = axiosClient.post("/vlab", vlab).then((res) => {
          commit("setCurrentVlab", res.data)
          return res;
        });
      }
      return response;
    },
    deleteVlab({}, id) {
      return axiosClient.delete(`/vlab/${id}`);
    },
    getVlabs({commit}, {url = null} = {}) {
      url = url || '/vlab'
      commit('setVlabsLoading', true)
      return axiosClient.get(url).then((res) => {
        commit('setVlabsLoading', false)
        commit("setVlabs", res.data);
        return res;
      });
    },
    getVlabsBySlug({commit}, slug) {
      commit("setCurrentVlabLoading", true);
      return axiosClient
        .get(`/vlab-by-slug/${slug}`)
        .then((res) => {
          commit("setCurrentVlab", res.data);
          return res;
        })
        .catch((err) => {
          throw err;
        })
        .finally(()=>{
          commit("setCurrentVlabLoading", false);
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
    setFilteredMutationState(state, isActive) {
      state.isFilteredMutationActive = isActive;
    },
    setArticlesRo(state, articles) {
      if (state.isFilteredMutationActive) {
        const filteredArticles = articles.data.filter(articles => articles.language == 'Romanian');
        state.articles.data = filteredArticles;
      }else {
        state.articles.data = articles.data;
      }
      state.articles.links = articles.meta.links;
    },
    setArticlesEn(state, articles) {
      if (state.isFilteredMutationActive) {
        const filteredArticles = articles.data.filter(articles => articles.language == 'English');
        state.articles.data = filteredArticles;
      }else {
        state.articles.data = articles.data;
      }
      state.articles.links = articles.meta.links;
    },
    setArticles(state, articles){
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
    setToolsRo(state, tools) {
      if (state.isFilteredMutationActive) {
        const filteredTools = tools.data.filter(tools => tools.language == 'Romanian');
        state.tools.data = filteredTools;
      }else {
        state.tools.data = tools.data;
      }
      state.tools.links = tools.meta.links;
    },
    setToolsEn(state, tools) {
      if (state.isFilteredMutationActive) {
        const filteredTools = tools.data.filter(tools => tools.language == 'English');
        state.tools.data = filteredTools;
      }else {
        state.tools.data = tools.data;
      }
      state.tools.links = tools.meta.links;
    },


    setCurrentVlabLoading: (state, loading) => {
      state.currentVlab.loading = loading;
    },
    setVlabsLoading: (state, loading) => {
      state.vlabs.loading = loading;
    },
    setCurrentVlab: (state, vlab) => {
      state.currentVlab.data = vlab.data;
    },
    setVlabs: (state, vlabs) => {
      state.vlabs.links = vlabs.meta.links;
      state.vlabs.data = vlabs.data;
    },


    setCurrentEventLoading: (state, loading) => {
      state.currentEvent.loading = loading;
    },
    setEventsLoading: (state, loading) => {
      state.events.loading = loading;
    },
    setCurrentEvent: (state, event) => {
      state.currentEvent.data = event.data;
    },
    setEventsRo(state, events) {
      if (state.isFilteredMutationActive) {
        const filteredEvents = events.data.filter(events => events.language == 'Romanian');
        state.events.data = filteredEvents;
      }else {
        state.events.data = events.data;
      }
      state.events.links = events.meta.links;
    },
    setEventsEn(state, events) {
      if (state.isFilteredMutationActive) {
        const filteredEvents = events.data.filter(events => events.language == 'English');
        state.events.data = filteredEvents;
      }else {
        state.events.data = events.data;
      }
      state.events.links = events.meta.links;
    },
    setEvents: (state, events) => {
      state.events.links = events.meta.links;
      state.events.data = events.data;
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

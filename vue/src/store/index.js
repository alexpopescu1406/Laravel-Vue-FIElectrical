import {createStore} from "vuex";
import axiosClient from "../axios";

const  tmpTools = [
  {
    id: 900,
    name: 'Lenz’s Law and Faraday’s Law Calculator',
    description: 'This calculator uses Faraday\'s and Lenz\'s laws to calculate the magnitude and polarity of the induced electromotive force (EMF) caused by a change in magnetic flux through a closed-loop coil.',
    image: 'https://www.allaboutcircuits.com/uploads/articles/Fardays_Law_Drawing.jpg',
  },
  {
    id: 901,
    name: 'Parallel Resistor Calculator',
    description: 'Calculate the equivalent resistance of up to six resistors in parallel with ease while learning how to calculate resistance in parallel and the parallel resistance formula.',
    image: 'https://www.allaboutcircuits.com/uploads/articles/Parallel-Resistance-Calculator.jpg',
  },
  {
    id:902,
    name: 'Wheatstone Bridge Calculator',
    description: 'This calculator helps determine the resistance of a variable resistor within a Wheatstone bridge circuit or the differential voltage created across the bridge terminals.',
    image: 'https://www.allaboutcircuits.com/uploads/articles/wheatstone_bridge_for_calculator.jpg',
  },
  {
    id:903,
    name: 'Electrical Energy Calculator',
    description: 'This calculator will determine the instantaneous energy, sustained energy, and power consumed by an electrical system given two of the three electrical parameters (voltage, current, or resistance) and the time.',
    image: 'https://www.allaboutcircuits.com/uploads/articles/Energy_Calculator_Image_Redraw@300x-100.jpg',
  },
  {
    id:904,
    name: 'Pressure Unit Conversion Calculator',
    description: 'This calculator will convert pressure values to ten different standard units for pressure.',
    image: 'https://www.allaboutcircuits.com/uploads/thumbnails/_315_220/pressure_gauge_for_calculator.png',
  },
  {
    id:905,
    name: 'Speed Distance Time Calculator',
    description: 'This calculator will solve for either distance, time, or speed given two of the three parameters.',
    image: 'https://www.allaboutcircuits.com/uploads/articles/Conversion_between_speed,_time,_and_distance.jpg',
  },
  {
    id:906,
    name: 'Battery Life Calculator',
    description: 'This calculator provides three options—basic, intermediate, and advanced—for determining expected battery life for microcontroller, Internet of Things (IoT), and edge processing systems with up to four different operating modes.',
    image: 'https://www.allaboutcircuits.com/uploads/thumbnails/_315_220/battery_life_calculator_thumbnail.jpg',
  },
  {
    id:907,
    name: 'Decibel Calculator',
    description: 'This calculator will convert voltage or power gains into decibels. Enter one of the three values and the calculator will output the other two.',
    image: 'https://www.allaboutcircuits.com/uploads/articles/CC-AAC-Bode_Plot_for_decibel_calculator.jpg',
  },
  {
    id:908,
    name: 'Twisted-Pair Impedance Calculator',
    description: 'A tool designed to calculate the characteristic impedance of a twisted-pair cable',
    image: 'https://www.allaboutcircuits.com/uploads/articles/Twisted-Pair-Impedance-Calculator.jpg',
  },
  {
    id: 909,
    name: 'LC Resonant Frequency Calculator',
    description: 'A circuit with an inductor (L) and capacitor (C) connected in parallel or series will have a resonant frequency at which their impedances are equal. Given two of the three values—inductance, capacitance, or resonant frequency—this tool will calculate the missing third variable.',
    image: 'https://www.allaboutcircuits.com/uploads/articles/LC-Circuits.jpg',
  },
];

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

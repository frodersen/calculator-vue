import { createStore } from "vuex";

export default createStore({
  state: {
    username: "",
    token: "",
    isLoggedIn: false,
    calculationLog: [],
  },
  mutations: {
    SET_USERNAME(state, username) {
      state.username = username;
      localStorage.setItem('username', username);
    },
    SET_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      state.isLoggedIn = !!token;
    },
    LOG_OUT(state) {
      state.username = "";
      state.token = "";
      state.isLoggedIn = false;
      state.calculationLog = [];
      localStorage.removeItem('username');
      localStorage.removeItem('token');
    },
    ADD_CALCULATION(state, calculation) {
      state.calculationLog.push(calculation);
    },
  },
  getters: {
    GET_TOKEN(state) {
      return state.token;
    },
    GET_USERNAME(state) {
      return state.username;
    },
    GET_IsLoggedIn(state) {
      return state.isLoggedIn;
    },
    GET_CALCULATIONLOG(state) {
      return state.calculationLog;
    },
  },
  actions: {
    initializeStore({ commit }) {
      const token = localStorage.getItem('token');
      const username = localStorage.getItem('username');
      if (token) {
        commit('SET_TOKEN', token);
      }
      if (username) {
        commit('SET_USERNAME', username);
      }
    }
  },
  modules: {},
});

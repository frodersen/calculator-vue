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
      state.isLoggedIn = true;
    },
    LOG_OUT(state) {
      state.username = "";
      state.token = "";
      state.isLoggedIn = false;
      state.calculationLog = [];
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
  actions: {},
  modules: {},
});

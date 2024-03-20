<template>
  <div class="container">
    <div class="login">
      <h1>Please log in</h1>
      <div>
        <input type="text" v-model="username" placeholder="Username" />
        <input type="password" v-model.lazy="password" placeholder="Password" />
        <button @click="handleLoginClick">Log in</button>
      </div>
    <div v-if="loginStatus">{{ loginStatus }}</div>
  </div>
  </div>
</template>
<script>
import { loginRequest } from "@/utils/httputils.js";
import router from '@/router';
import store from "@/store";

export default {
  data() {
    return {
      username: "",
      password: "",
      loginStatus: "",
    };
  },
  methods: {
    async handleLoginClick() {
      const loginData = {
        username: this.username,
        password: this.password,
      };
      try {
        const response = await loginRequest(loginData);
        if (response && response.data && response.status === 200) {
          // Assuming your API returns a token and you're using Vuex for state management
          // this.$store.commit('setToken', response.data.token);
          // Or directly using localStorage/sessionStorage
          store.commit('SET_TOKEN', response.data.token);
          store.commit('SET_USERNAME', this.username);
          router.push({ path: '/calculator' }); // or whatever route you want to redirect
        } else {
          this.loginStatus = "Login failed! Please check your username and password.";
        }
      } catch (error) {
        console.error("Login failed:", error);
        this.loginStatus = "Login failed!";
      }
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}

.login input[type="text"], .login input[type="password"] {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: white;
}

button:hover {
  background-color: #0056b3;
}

div[v-if="loginStatus"] {
  margin-top: 20px;
  color: red;
}
</style>
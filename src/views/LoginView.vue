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
import { ref } from 'vue';
import { useStore } from 'vuex';
import { loginRequest } from "@/utils/httputils.js";
import router from '@/router';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const loginStatus = ref('');
    const store = useStore();

    const handleLoginClick = async () => {
      const loginData = {
        username: username.value,
        password: password.value,
      };
      try {
        const response = await loginRequest(loginData);
        if (response && response.data && response.status === 200) {
          store.commit('SET_TOKEN', response.data.jwtoken);
          store.commit('SET_USERNAME', username.value);
          router.push({ path: '/calculator' });
        } else {
          loginStatus.value = "Login failed! Please check your username and password.";
        }
      } catch (error) {
        console.error("Login failed:", error);
        loginStatus.value = "Login failed!";
      }
    };

    return { username, password, loginStatus, handleLoginClick };
  }
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
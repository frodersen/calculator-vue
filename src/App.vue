<template>
  <div id="nav">
    <router-link to="/"></router-link>
  </div>
  <router-view />
</template>

<script></script>

<style>
body {
  background-color: #4b6b8b;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 24px; 
  color: #d8ea19;
  margin: auto; 
}

#nav a {
  font-weight: bold;
  color: #a9a9a9;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #f6f7eb;
}
</style>
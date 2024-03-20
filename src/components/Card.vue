<template>
  <div class="wrapper">
    <router-link :to="link">
      <div class="container">
        <h3>{{ title }}</h3>
        {{ description }}
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
    link: String,
  },
};
</script>

<style scoped>
.wrapper {
  width: 200px;
  height: 200px;
}

a {
  text-decoration: none;
}

.container {
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 0;
  border-radius: 20px;
  color: #f6f7eb;
  box-shadow: 5px 10px darkgray;
  border: solid;
  width: 200px;
  height: 200px;
}
h1 {
  color: #f6f7eb;
}
</style>
<template>
    <div class="home">
      <h1>IDATT2105</h1>
      <div class="cardholder">
        <Card
          title="Calculator"
          description="En enkel kalkulator med responsive knapper"
          link="login"
        />
      </div>
    </div>
  </template>
  
  <script>
  import Card from "../components/Card.vue";
  
  export default {
    name: "Home",
    components: { Card },
  };
  </script>
  
  <style scoped>
  .home {
    width: 90%; 
    margin: auto; 
    color: #f6f7eb; 
    text-align: center; 
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  h1 {
    font-size: 3em; 
    font-weight: bold;
    margin-bottom: 20px; 
  }
  
  .cardholder {
    display: flex;
    justify-content: center;
    flex-wrap: wrap; 
    gap: 20px; 
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  </style>
  
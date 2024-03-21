<template>
  <div class="calculations-container">
    <h1>Dine Regenestykker</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-if="errorMessage">{{ errorMessage }}</div>
    <ul v-else>
      <li v-for="calc in calculations" :key="calc.id" class="calculation-item">
        <span class="calc-date">{{ calc.created }}</span>
        <span class="calc-expression">{{ calc.expression }} =</span>
        <span class="calc-result">{{ calc.result }}</span>
      </li>
    </ul>
  </div>
</template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useStore } from 'vuex';
  
  const isLoading = ref(true); // Initially set to true to show the loading state
  const errorMessage = ref("");
  const store = useStore();
  const calculations = ref([]);
  
  
  onMounted(async () => {
    const token = store.getters.GET_TOKEN;
    try {
      const response = await axios.get('http://localhost:8080/api/calculations', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      calculations.value = response.data;
  } catch (error) {
    console.error('Error fetching calculations:', error);
    errorMessage.value = "Failed to load calculations.";
  } finally {
    isLoading.value = false;
  }
      
  });
  </script>
  
  <style scoped>
.calculations-container {
  padding: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li.calculation-item {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 1.2rem; /* Makes the text larger */
}

.calc-date {
  min-width: 150px; /* Adjust width as needed */
  font-weight: bold;
}

.calc-expression {
  min-width: 60px; /* Adjust width as needed */
}

.calc-result {
  min-width: 60px; /* Adjust width as needed */
  color: blue; /* Styling for the result */
}

/* Style for button if needed */
button {
  margin-top: 20px;
}
</style>
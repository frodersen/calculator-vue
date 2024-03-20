<template>
<div class="conatainer">
    <div class="calculator">
      <div class="display">{{ currentInput || 0 }}</div>
      <div class="buttons">
        <!-- Number and operation buttons -->
        <button v-for="button in buttons" :key="button" :data-test="'button-' + button" @click="onButtonClick(button)">
          {{ button }}
        </button>
        <!-- Calculate button -->
        <button class="equals" data-test="button-equals" @click="calculate">=</button>
      </div>
    </div>
    <div class="calc-history">
      <button class="toggle-history-btn" @click="showHistory = !showHistory">Toggle History</button>
      <div v-if="showHistory" class="history">
        <div v-for="(entry, index) in history" :key="index" class="history-entry">
          {{ entry }}
        </div>
        <button class="clear-history-btn" @click="clearHistory" data-test="clear-history">Clear History</button>
      </div>
    </div>
</div> 
  </template>
  
  <script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';

const store = useStore();
const currentInput = ref('');
const history = ref([]);
const showHistory = ref(false);
const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', 'C', '+'];

const onButtonClick = (button) => {
  if (button === 'C') {
    currentInput.value = '';
  } else if (button === '.' && currentInput.value.includes('.')) {
    // Prevent multiple decimals
    return;
  } else {
    currentInput.value += button;
  }
};

const calculate = () => {
  const expression = currentInput.value;
  const token = store.getters.GET_TOKEN; // Using the store to get the token


  // Retrieve the token from localStorage

  axios.post('http://localhost:8080/api/calculate', { expression: expression }, {
    headers: {
      'Authorization': `Bearer ${token}`  
    }
  })
  .then(response => {
    const result = response.data.result;
    history.value.unshift(`${currentInput.value} = ${result}`);
    currentInput.value = result.toString();
  })
  .catch(error => {
    console.error('There was an error with the calculation:', error);
    currentInput.value = 'Error';
  });
};

const clearHistory = () => {
  history.value = [];
};
</script>

  
  <style>
  .container {
  display: flex;
}

.calculator {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px; 
}
.calc-history {
  margin-left: 20px;
}

.history {
  border: 1px solid #ccc;
  max-height: 300px;
  overflow-y: auto;
  padding: 10px;
  width: 200px;
  position: relative;
}

.history-entry {
  margin-bottom: 10px;
}
.toggle-history-btn {
  padding: 5px 10px;
  font-size: 0.8em;
  margin-bottom: 10px;
}

.clear-history-btn {
  padding: 5px 10px;
  font-size: 0.8em;
  margin-top: 10px;
  width: 100%; 
  box-sizing: border-box;
}

.display {
  width: 100%;
  padding: 15px; 
  background: #eaeaea;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: right;
  margin-bottom: 20px;
  font-size: 2em; 
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px; 
}

button {
  padding: 15px; 
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;
}

button.equals {
  grid-column: span 4;
}
.contact-button {
  margin-bottom: 20px; 
}
</style>

  
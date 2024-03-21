<template>
  <Calculator />
  <div class="actionsContainer">
    <button @click="openCalculations">Se Kalkulasjoner</button>
    <div class="feedbackContainer">
      <h4>Gi tilbakemelding? Trykk her!</h4>
      <router-link to="/contact-form" class="feedback">
        <button>
          <span class="front">Kontakskjema</span>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Calculator from "../components/Calculator.vue";

const router = useRouter();

const openCalculations = () => {
  // Navigate to the calculations view
  router.push({ name: 'Calculations' });
};
</script>

<style scoped>
.feedbackContainer {
  color: #f6f7eb;
  position: absolute;
  text-align: center;
  bottom: 30px;
  left: 0;
  right: 0;
}
button {
  background: #d8dca7;
  border-radius: 10px;
  border: none;
  padding: 0;
  outline-offset: 4px;
}

.front {
  display: block;
  padding: 15px 42px;
  border-radius: 10px;
  font-size: 1.5rem;
  background: #f6f7eb;
  color: black;
  transform: translateY(-4px);
  font-weight: bolder;
  will-change: transform;
  transition: transform 150ms;
}

button:hover .front {
  cursor: pointer;
  transform: translateY(-6px);
}

button:active .front {
  transform: translateY(-2px);
}
</style>

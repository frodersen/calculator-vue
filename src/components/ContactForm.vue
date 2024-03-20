<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="form.name" name="name" placeholder="Name" required />
    <input type="email" v-model="form.email" name="email" placeholder="Email" required />
    <textarea v-model="form.message" name="message" placeholder="Message" required></textarea>
    <button type="submit">Submit</button>
  </form>
  <div v-if="statusMessage" class="status-message">{{ statusMessage }}</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      statusMessage: ''
    };
  },
  // Calls on loadFormData to retrive data from local storage
  // If there are any 
  created() {
    this.loadFormData();
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post('http://localhost:3000/submissions', this.form);
        this.statusMessage = 'Success! Your message has been sent.';
        this.saveFormData();
        // Clear message field
        this.form.message = '';
      } catch (error) {
        this.statusMessage = 'Error sending message.';
      }
    },
    // Saves the forms name and email to local storage
    saveFormData() {
      localStorage.setItem('contactFormName', this.form.name);
      localStorage.setItem('contactFormEmail', this.form.email);
    },
    // Retrives the saved data from local storage
    loadFormData() {
      this.form.name = localStorage.getItem('contactFormName') || '';
      this.form.email = localStorage.getItem('contactFormEmail') || '';
    }
  }
};
</script>


<style scoped>
#contact-form {
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input, textarea {
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

button {
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: #0056b3;
}

button:disabled {
  background-color: #cccccc;
  cursor: default;
}

.status-message {
  text-align: center;
  margin-top: 1rem;
}
</style>

  
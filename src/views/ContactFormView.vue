<template>
  <div>
  <h1>Tilbakemelding</h1>
  <h5>Her kan du komme med tilbakemeldinger på kalulatoren</h5>
  <ContactForm/>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
  components: {
    ContactForm,
  },
};
</script>
<style scoped>
.feedback-page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center; 
  padding: 20px;
}

h1 {
    font-size: 3em;
    font-weight: bold;
    margin-bottom: 20px;
    color: #ffffff;
  }

h5 {
  font-size: 1rem;
  font-weight: normal;
  color: hsl(0, 0%, 100%);
  margin-bottom: 0.5em;
}

</style>
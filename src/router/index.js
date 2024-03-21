import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/views/Home.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'loginView', // This name should match the link property in Card component
    component: () =>
      import("../views/LoginView.vue"),
  },
  {
    path: "/calculator",
    name: "CalculatorView",
    component: () =>
      import("../views/CalculatorView.vue"),
  },
  {
    path: '/contact-form',
    name: 'ContactForm',
    component: () =>
      import("../views/ContactFormView.vue"),
  },
  {
    path: '/calculations',
    name: 'Calculations', // This name will be used for navigation
    component: () => 
      import("../components/Calculations.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


<template>
  <form @submit.prevent="login">
    <input type="text" v-model="email" placeholder="Email" required>
    <input type="password" v-model="password" placeholder="Password" required>
    <button type="submit">Login</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      axios.post('http://your-backend-api/login', {
        email: this.email,
        password: this.password
      })
      .then(response => {
        // Handle successful login
        console.log(response.data);
        // Example: Store token in localStorage or Vuex for session management
        // Redirect to another page
        this.$router.push('/');
      })
      .catch(error => {
        // Handle login error
        console.error('Error logging in:', error);
      });
    }
  }
};
</script>

<style>
/* Your component styles */
</style>

import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter();
  const message = ref('');
  const token = ref(localStorage.getItem('token'));

  const authenticate = async (urlRoute, formData) => {
    try {
      const res = await axios.post(`/api/${urlRoute}`, formData);
  
      if(urlRoute === 'login') {
        localStorage.setItem('token', res.data.token);
      }

      message.value = res.data.message;
      token.value = localStorage.getItem('token');
      router.push({ name: 'home' });
    }catch(error) {
      if (error.response) {
        console.error(error.response.data.message || 'Something went wrong!');
      } else {
        console.error('Network error. Please try again.');
      }
      console.error(error);
    }
  }

  const logout = () => {
    localStorage.removeItem('token');
    token.value = null;
    router.push({ name: 'login' });
  }

  return { authenticate, message, logout, token }
})

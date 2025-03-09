<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
import { storeToRefs } from 'pinia';

const { logout } = useAuthStore();
const { token } = storeToRefs(useAuthStore());

</script>

<template>
  <header>
    <div class="container">
      <nav class="flex justify-between">
        <RouterLink to="/">Home</RouterLink>
        <div v-if="token">
          <RouterLink to="/posts/add" class="mr-5">Add Post</RouterLink>
          <RouterLink to="/login" @click="logout">Logout</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
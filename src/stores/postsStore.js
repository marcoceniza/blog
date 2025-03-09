import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const usePostsStore = defineStore('posts', () => {
  const posts = ref([]);
  const userPosts = ref([]);
  const message = ref('');

  const fetchPosts = async () => {
    try {
      const res = await axios.get('/api/posts');
  
      posts.value = res.data.result;
      userPosts.value = res.data.userPosts;
      message.value = res.data.message;
    }catch(error) {
      if (error.response) {
        console.error(error.response.data.message || 'Something went wrong!');
      } else {
        console.error('Network error. Please try again.');
      }
      console.error(error);
    }
  }

  const addPost = async (formData) => {
    try {
      const res = await axios.post('/api/posts', formData);

      message.value = res.data.message;
    }catch(error) {
      if (error.response) {
        console.error(error.response.data.message || 'Something went wrong!');
      } else {
        console.error('Network error. Please try again.');
      }
      console.error(error);
    }
  }

  const updatePost = async (id, formData) => {
    try {
      const res = await axios.put(`/api/posts/${id}`, formData);

      message.value = res.data.message;
    }catch(error) {
      if (error.response) {
        console.error(error.response.data.message || 'Something went wrong!');
      } else {
        console.error('Network error. Please try again.');
      }
      console.error(error);
    }
  }

  const deletePost = async (id) => {
    try {
      const res = await axios.delete(`/api/posts/${id}`);
      
      message.value = res.data.message;
    }catch(error) {
      if (error.response) {
        console.error(error.response.data.message || 'Something went wrong!');
      } else {
        console.error('Network error. Please try again.');
      }
      console.error(error);
    }
  }

  return { fetchPosts, addPost, posts, updatePost, deletePost, message, userPosts }
})

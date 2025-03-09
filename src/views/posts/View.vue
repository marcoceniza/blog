<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const route = useRoute();
const id = route.params.id;
const post = ref([]);

const fetchPost = async () => {
    try {
        const res = await axios.get(`/api/posts/${id}`);

        post.value = res.data.result;
    }catch(error) {
        if (error.response) {
            console.error(error.response.data.message || 'Something went wrong!');
        } else {
            console.error('Network error. Please try again.');
        }
        console.error(error);
    }
}

onMounted(() => { fetchPost() } );
</script>

<template>
    <h2>View Post Here</h2>
    <div>
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }} <span class="block">Created by test in {{ post.formatted_created_at }}</span></p>
        <button @click="$router.back()">back</button>
    </div>
</template>
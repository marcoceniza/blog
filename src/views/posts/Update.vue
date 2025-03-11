<script setup>
import FormInput from '@/components/FormInput.vue';
import Button from '@/components/Button.vue';
import { reactive, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { usePostsStore } from '@/stores/postsStore';

const { updatePost } = usePostsStore();
const route = useRoute();
const id = route.params.id;
const formData = reactive({
    title: '',
    content: '',
});

const fetchPost = async () => {
    try {
        const res = await axios.get(`/api/posts/${id}`);

        formData.title = res.data.result.title;
        formData.content = res.data.result.content;
    }catch(error) {
        if (error.response) {
            console.error(error.response.data.message || 'Something went wrong!');
        } else {
            console.error('Network error. Please try again.');
        }
        console.error(error);
    }
}

onMounted(() => { fetchPost() });
</script>

<template>
    <div class="container">
        <div class="w-[400px]">
            <form @submit.prevent="updatePost(id, formData)">
                <FormInput
                    v-model="formData.title"
                    name="title"
                    id="title"
                    placeholder="Enter title"
                />
                <FormInput
                    v-model="formData.content"
                    name="content"
                    id="content"
                    placeholder="Enter content"
                />
                <Button type="submit" title="Update POST" />
            </form>
        </div>
    </div>
</template>
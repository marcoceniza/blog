<script setup>
import FormInput from '@/components/FormInput.vue';
import Button from '@/components/Button.vue';
import { usePostsStore } from '@/stores/postsStore.js'
import { storeToRefs } from 'pinia';
import { reactive, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const { addPost, fetchPosts, deletePost } = usePostsStore();
const { userPosts } = storeToRefs(usePostsStore());
const formData = reactive({
    title: '',
    content: '',
});

onMounted(() => { fetchPosts() });
</script>

<template>
    <div class="container">
        <div class="w-[400px]">
            <form @submit.prevent="addPost(formData)">
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
                <Button type="submit" title="ADD POST" />
            </form>

            <div>
                <h1>My Posts</h1>
                <section v-for="userPost in userPosts">
                    <h2>{{ userPost.title }}</h2>
                    <p>{{ userPost.content }} <span class="block">Created by {{ userPost.user.name }} in {{ userPost.formatted_created_at }}</span></p>
                    <div class="flex gap-4">
                        <RouterLink :to="`${userPost.id}`" class="mr-5">view</RouterLink>
                        <RouterLink :to="`/posts/edit/${userPost.id}`" class="mr-5">edit</RouterLink>
                        <RouterLink to="#" @click.prevent="deletePost(userPost.id)" class="mr-5">delete</RouterLink>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
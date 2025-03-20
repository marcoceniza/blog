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
    <div class="container mx-auto">
        <div class="w-[900px] mx-auto max-w-full">
            <h1 class="text-3xl text-center my-8 font-bold">Add Post</h1>
            <form @submit.prevent="addPost(formData)">
                <FormInput
                    v-model="formData.title"
                    name="title"
                    id="title"
                    placeholder="Enter title"
                    class="border-1 border-solid border-gray-400 p-3"
                />
                <FormInput
                    v-model="formData.content"
                    name="content"
                    id="content"
                    placeholder="Enter content"
                    class="border-1 border-solid border-gray-400 p-3"
                    textarea="true"
                    rows="6"
                />
                <Button type="submit" title="ADD POST" class="bg-blue-500 p-2 text-white font-semibold" />
            </form>

            <hr class="mt-8 text-gray-200">

            <div>
                <h1 class="text-3xl text-center my-8 font-bold">My Posts</h1>
                <section v-for="userPost in userPosts" class="border-b border-solid mb-4 border-gray-200 py-6 p-3 bg-gray-300 rounded-[4px]">
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
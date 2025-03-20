<script setup>
import { usePostsStore } from '@/stores/postsStore.js'
import { storeToRefs } from 'pinia';
import PostList from '@/components/PostList.vue'
import { onMounted } from 'vue';

const { fetchPosts } = usePostsStore();
const { posts } = storeToRefs(usePostsStore());

onMounted(() => { fetchPosts() });
</script>

<template>
    <div class="container mx-auto">
        <h1 class="text-3xl text-center my-8 font-bold">Posts</h1>
        <div class="w-[900px] mx-auto max-w-full">
            <section v-for="post in posts" :key="post.id" class="border-b border-solid mb-4 border-gray-200 py-6 p-3 bg-gray-300 rounded-[4px]">
                <PostList :post="post" />
            </section>
        </div>
    </div>
</template>
<script setup>
import FormInput from '@/components/FormInput.vue';
import Button from '@/components/Button.vue';
import { usePostsStore } from '@/stores/postsStore.js'
import { storeToRefs } from 'pinia';
import PostList from '@/components/PostList.vue'
import { onMounted } from 'vue';

const { fetchPosts } = usePostsStore();
const { posts } = storeToRefs(usePostsStore());

onMounted(() => { fetchPosts() });
</script>

<template>
    <div class="container">
        <div class="w-[400px]">
            <section v-for="post in posts" :key="post.id">
                <PostList :post="post" />
            </section>
        </div>
    </div>
</template>
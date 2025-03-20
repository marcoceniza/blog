<script setup>
defineProps(['post']);
</script>

<template>
    <h2 class="text-3xl font-bold">{{ post.title }}</h2>
    <p>{{ post.content }} <span class="block text-[12px] text-gray-500 pt-1">Created by {{ post.user.name }} in {{ post.formatted_created_at }}</span></p>
</template>
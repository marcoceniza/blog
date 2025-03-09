<script setup>
defineProps(['post']);
</script>

<template>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }} <span class="block">Created by {{ post.user.name }} in {{ post.formatted_created_at }}</span></p>
</template>
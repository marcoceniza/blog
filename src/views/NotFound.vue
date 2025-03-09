<script setup>
import Button from '@/components/Button.vue';

</script>

<template>
    <div>
        <h1>404 - Page Not Found</h1>
        <Button title="Go Back" @handle-click="$router.back()" />
    </div>
</template>
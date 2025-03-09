<script setup>
import FormInput from '@/components/FormInput.vue';
import Button from '@/components/Button.vue';
import { useAuthStore } from '@/stores/authStore.js'
import { reactive } from 'vue';

const { authenticate } = useAuthStore();
const formData = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
});

</script>

<template>
    <div class="container">
        <div class="w-[400px]">
            <form @submit.prevent="authenticate('register', formData)">
                <FormInput
                    v-model="formData.name"
                    name="name"
                    id="name"
                    placeholder="Enter name"
                />
                <FormInput
                    v-model="formData.email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                />
                <FormInput
                    v-model="formData.password"
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Enter password"
                />
                <FormInput
                    v-model="formData.password_confirmation"
                    name="password_confirmation"
                    id="password_confirmation"
                    type="password"
                    placeholder="Enter password confirmation"
                />
                <Button type="submit" title="REGISTER" />
            </form>
        </div>
    </div>
</template>
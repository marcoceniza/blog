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
    <div class="container mx-auto relative">
        <div class="w-[400px] bg-gray-200 mx-auto p-6 rounded-s absolute left-0 right-0 top-[-50%] translate-y-[50%]">
            <form @submit.prevent="authenticate('register', formData)">
                <h1 class="text-center text-2xl mb-6">Register Here</h1>
                <FormInput
                    v-model="formData.name"
                    name="name"
                    id="name"
                    placeholder="Enter name"
                    class="border-1 border-solid border-gray-400 p-3"
                />
                <FormInput
                    v-model="formData.email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    class="border-1 border-solid border-gray-400 p-3"
                />
                <FormInput
                    v-model="formData.password"
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    class="border-1 border-solid border-gray-400 p-3"
                />
                <FormInput
                    v-model="formData.password_confirmation"
                    name="password_confirmation"
                    id="password_confirmation"
                    type="password"
                    placeholder="Enter password confirmation"
                    class="border-1 border-solid border-gray-400 p-3"
                />
                <Button type="submit" title="Register" class="bg-green-800 p-3 border-none text-white mt-3 hover:bg-green-700"/>
                <a href="#" @click.prevent="$router.push({ name: 'login' })" class="text-center mt-6 text-gray-500 block">or, sign in</a>
            </form>
        </div>
    </div>
</template>
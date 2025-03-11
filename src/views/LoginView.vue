<script setup>
import FormInput from '@/components/FormInput.vue';
import Button from '@/components/Button.vue';
import { reactive, ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';

const { authenticate } = useAuthStore();
const formData = reactive({
    email: '',
    password: ''
});

</script>

<template>
    <div class="container mx-auto relative">
        <form @submit.prevent="authenticate('login', formData)">
            <div class="w-[400px] bg-gray-200 mx-auto p-6 rounded-s absolute left-0 right-0 top-[-50%] translate-y-[50%]">
                <h1 class="text-center text-2xl mb-6">Login Here</h1>
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
                <Button type="submit" title="Log in" class="bg-green-800 p-3 border-none text-white mt-3 hover:bg-green-700" />
                <a href="#" @click.prevent="$router.push({ name: 'register' })" class="text-center mt-6 text-gray-500 block">or, sign up</a>
            </div>
        </form>
    </div>
</template>
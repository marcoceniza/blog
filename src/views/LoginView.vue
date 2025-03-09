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
    <div class="container">
        <form @submit.prevent="authenticate('login', formData)">
            <div class="w-[400px]">
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
                <Button type="submit" title="LOGIN" />
            </div>
        </form>
    </div>
</template>
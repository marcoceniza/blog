<script setup>
defineProps({
    type: { type: String, default: 'text' },
    id: { type: String, default: '' },
    name: { type: String, default: '' },
    placeholder: { type: String, default: 'Please enter value' },
    disabled: { type: Boolean, default: false },
    modelValue: { type: String, default: '' },
    textarea: { type: Boolean, default: false }
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <component
        :is="textarea ? 'textarea' : 'input'"
        :id="id"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        class="w-full mb-2"
    />
</template>
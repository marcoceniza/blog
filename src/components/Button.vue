<script setup>
defineProps({
    title: { type: String, default: '' },
    type: { type: String, default: 'Submit' },
    disabled: { type: Boolean, default: false }
})

const emit = defineEmits(['handle-click']);
</script>

<template>
    <button
        :type="type"
        :disabled="disabled"
        @click="emit('handle-click')"
    >
        {{ title }}
    </button>
</template>
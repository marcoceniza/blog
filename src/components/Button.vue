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
        v-bind="$attrs"
        @click="emit('handle-click')"
        class="cursor-pointer w-full"
    >
        {{ title }}
    </button>
</template>
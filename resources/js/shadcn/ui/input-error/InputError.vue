<script setup lang="ts">
import { cn } from '@/shadcn/utils';
import type { HTMLAttributes } from 'vue';

interface InputErrorProps {
    message?: string;
    class?: HTMLAttributes['class'];
}

const props = defineProps<InputErrorProps>();
</script>

<template>
    <div
        v-show="message"
        :class="cn('text-sm font-medium text-destructive', props.class)"
    >
        {{ message }}
    </div>
</template>

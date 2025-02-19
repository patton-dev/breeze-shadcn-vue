<script setup lang="ts">
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div
        class="flex flex-col items-center min-h-screen bg-background sm:justify-center sm:pt-0"
    >
        <slot />
    </div>
</template>

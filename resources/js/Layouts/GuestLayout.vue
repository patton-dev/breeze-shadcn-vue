<script setup lang="ts">
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div
        class="flex flex-col items-center min-h-screen bg-background sm:justify-center sm:pt-0"
    >
        <div>
            <Link href="/">
                <ApplicationLogo
                    class="w-20 h-20 mb-12 fill-current text-foreground"
                />
            </Link>
        </div>
        <slot />
    </div>
</template>

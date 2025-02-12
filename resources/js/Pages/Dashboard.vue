<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Card, CardContent, CardHeader, CardTitle } from '@/shadcn/ui/card';
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2
                class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"
            >
                Dashboard
            </h2>
        </template>

        <Card class="mx-auto mt-10 w-1/2">
            <CardHeader class="pt-4">
                <CardTitle class="text-center text-2xl font-thin"
                    >Welcome</CardTitle
                >
            </CardHeader>
            <CardContent class="text-center"> You're logged in! </CardContent>
        </Card>
    </AuthenticatedLayout>
</template>

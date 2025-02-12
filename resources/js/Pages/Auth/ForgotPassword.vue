<script setup lang="ts">
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Button } from '@/shadcn/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/shadcn/ui/card';
import { Input } from '@/shadcn/ui/input';
import { InputError } from '@/shadcn/ui/input-error';
import { Label } from '@/shadcn/ui/label';
import { Head, useForm } from '@inertiajs/vue3';

defineProps<{
    status?: string;
}>();

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};
</script>

<template>
    <GuestLayout>
        <Head title="Forgot Password" />

        <Card class="w-[400px]">
            <CardHeader class="pt-4">
                <CardTitle class="text-center text-2xl font-thin"
                    >Forgot Password</CardTitle
                >
                <CardDescription class="text-center font-thin">
                    Enter your email address and we will send you a password
                    reset link.
                </CardDescription>
            </CardHeader>

            <div
                v-if="status"
                class="mb-4 text-center text-sm font-medium text-green-600 dark:text-green-400"
            >
                {{ status }}
            </div>

            <form @submit.prevent="submit" novalidate>
                <CardContent>
                    <div>
                        <Label for="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            class="mt-2"
                            placeholder="user@example.com"
                            v-model="form.email"
                            required
                            autofocus
                            autocomplete="username"
                        />
                        <InputError class="mt-2" :message="form.errors.email" />
                    </div>
                </CardContent>

                <CardFooter class="flex justify-end pb-6">
                    <Button
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                    >
                        Email Password Reset Link
                    </Button>
                </CardFooter>
            </form>
        </Card>
    </GuestLayout>
</template>

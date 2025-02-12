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
import { Head, Link, useForm } from '@inertiajs/vue3';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => {
            form.reset('password', 'password_confirmation');
        },
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Register" />

        <Card class="w-[400px]">
            <CardHeader class="pt-4">
                <CardTitle class="text-center text-2xl font-thin"
                    >Register</CardTitle
                >
                <CardDescription class="text-center font-thin"
                    >Create a new account to get started.</CardDescription
                >
            </CardHeader>
            <form @submit.prevent="submit" novalidate>
                <CardContent>
                    <div>
                        <Label for="name">Name</Label>
                        <Input
                            id="name"
                            type="text"
                            class="mt-2"
                            v-model="form.name"
                            required
                            autofocus
                            autocomplete="name"
                        />
                        <InputError class="mt-2" :message="form.errors.name" />
                    </div>

                    <div class="mt-4">
                        <Label for="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            class="mt-2"
                            placeholder="user@example.com"
                            v-model="form.email"
                            required
                            autocomplete="username"
                        />
                        <InputError class="mt-2" :message="form.errors.email" />
                    </div>

                    <div class="mt-4">
                        <Label for="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            class="mt-2"
                            v-model="form.password"
                            required
                            autocomplete="new-password"
                        />
                        <InputError
                            class="mt-2"
                            :message="form.errors.password"
                        />
                    </div>

                    <div class="mt-4">
                        <Label for="password_confirmation"
                            >Confirm Password</Label
                        >
                        <Input
                            id="password_confirmation"
                            type="password"
                            class="mt-2"
                            v-model="form.password_confirmation"
                            required
                            autocomplete="new-password"
                        />
                        <InputError
                            class="mt-2"
                            :message="form.errors.password_confirmation"
                        />
                    </div>
                </CardContent>

                <CardFooter class="flex justify-between pb-6">
                    <Link
                        :href="route('login')"
                        class="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                    >
                        Already registered?
                    </Link>

                    <Button
                        class="ms-4"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                    >
                        Register
                    </Button>
                </CardFooter>
            </form>
        </Card>
    </GuestLayout>
</template>

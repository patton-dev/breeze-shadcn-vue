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
import { Checkbox } from '@/shadcn/ui/checkbox';
import { Input } from '@/shadcn/ui/input';
import { InputError } from '@/shadcn/ui/input-error';
import { Label } from '@/shadcn/ui/label';
import { Head, Link, useForm } from '@inertiajs/vue3';

defineProps<{
    canResetPassword?: boolean;
    status?: string;
}>();

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => {
            form.reset('password');
        },
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Login" />

        <div v-if="status" class="mb-4 text-sm font-medium text-green-600">
            {{ status }}
        </div>

        <Card class="w-[400px]">
            <CardHeader class="pt-4">
                <CardTitle class="text-center text-2xl font-thin"
                    >Login</CardTitle
                >
                <CardDescription class="text-center font-thin"
                    >Enter your username and password to login to your
                    account.</CardDescription
                >
            </CardHeader>
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

                    <div class="mt-4">
                        <Label for="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            class="mt-2"
                            v-model="form.password"
                            required
                            autocomplete="current-password"
                        />
                        <InputError
                            class="mt-2"
                            :message="form.errors.password"
                        />
                    </div>

                    <div class="mt-4 block">
                        <label class="flex items-center">
                            <Checkbox
                                name="remember"
                                v-model:checked="form.remember"
                            />
                            <span
                                class="ms-2 text-sm text-muted-foreground"
                                >Remember me</span
                            >
                        </label>
                    </div>
                </CardContent>
                <CardFooter class="flex justify-between pb-6">
                    <Link
                        v-if="canResetPassword"
                        :href="route('password.request')"
                        class="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                    >
                        Forgot your password?
                    </Link>

                    <Button
                        class="ms-4"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                    >
                        Log in
                    </Button>
                </CardFooter>
            </form>
        </Card>
    </GuestLayout>
</template>

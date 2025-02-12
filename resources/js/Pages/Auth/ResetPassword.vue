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
const props = defineProps<{
    email: string;
    token: string;
}>();

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('password.store'), {
        onFinish: () => {
            form.reset('password', 'password_confirmation');
        },
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Reset Password" />

        <Card class="w-[400px]">
            <CardHeader class="pt-4">
                <CardTitle class="text-2xl font-thin text-center"
                    >Reset Password</CardTitle
                >
                <CardDescription class="font-thin text-center">
                    Please enter your new password.
                </CardDescription>
            </CardHeader>

            <form @submit.prevent="submit" novalidate>
                <CardContent>
                    <div>
                        <Label for="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            class="mt-2"
                            v-model="form.email"
                            required
                            autofocus
                            autocomplete="username"
                        />
                        <InputError class="mt-2" :message="form.errors.email" />
                    </div>

                    <div class="mt-4">
                        <Label for="password">New Password</Label>
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

                <CardFooter class="flex justify-end pb-6">
                    <Button
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                    >
                        Reset Password
                    </Button>
                </CardFooter>
            </form>
        </Card>
    </GuestLayout>
</template>

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

const form = useForm({
    password: '',
});

const submit = () => {
    form.post(route('password.confirm'), {
        onFinish: () => {
            form.reset();
        },
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Confirm Password" />

        <Card class="w-[400px]">
            <CardHeader class="pt-4">
                <CardTitle class="text-center text-2xl font-thin"
                    >Confirm Password</CardTitle
                >
                <CardDescription class="text-center font-thin">
                    This is a secure area. Please confirm your password before
                    continuing.
                </CardDescription>
            </CardHeader>

            <form @submit.prevent="submit" novalidate>
                <CardContent>
                    <div>
                        <Label for="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            class="mt-2"
                            v-model="form.password"
                            required
                            autocomplete="current-password"
                            autofocus
                        />
                        <InputError
                            class="mt-2"
                            :message="form.errors.password"
                        />
                    </div>
                </CardContent>

                <CardFooter class="flex justify-end pb-6">
                    <Button
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                    >
                        Confirm
                    </Button>
                </CardFooter>
            </form>
        </Card>
    </GuestLayout>
</template>

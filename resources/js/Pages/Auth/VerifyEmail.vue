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
import { Head, Link, useForm } from '@inertiajs/vue3';
import { computed } from 'vue';

const props = defineProps<{
    status?: string;
}>();

const form = useForm({});

const submit = () => {
    form.post(route('verification.send'));
};

const verificationLinkSent = computed(
    () => props.status === 'verification-link-sent',
);
</script>

<template>
    <GuestLayout>
        <Head title="Email Verification" />

        <Card class="w-[400px]">
            <CardHeader class="pt-4">
                <CardTitle class="text-center text-2xl font-thin"
                    >Verify Email</CardTitle
                >
                <CardDescription class="text-center font-thin">
                    Thanks for signing up! Please verify your email address to
                    continue.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <div class="text-sm text-muted-foreground">
                    Please verify your email address by clicking on the link we
                    just emailed to you. If you didn't receive the email, we
                    will gladly send you another.
                </div>

                <div
                    v-if="verificationLinkSent"
                    class="mt-4 text-sm font-medium text-green-600 dark:text-green-400"
                >
                    A new verification link has been sent to the email address
                    you provided during registration.
                </div>
            </CardContent>

            <CardFooter class="flex justify-between pb-6">
                <form
                    @submit.prevent="submit"
                    class="flex w-full justify-between"
                >
                    <Button
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                    >
                        Resend Verification Email
                    </Button>

                    <Link
                        :href="route('logout')"
                        method="post"
                        as="button"
                        class="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                    >
                        Log Out
                    </Link>
                </form>
            </CardFooter>
        </Card>
    </GuestLayout>
</template>

<script setup lang="ts">
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, Link } from '@inertiajs/vue3';

defineProps<{
    canLogin?: boolean;
    canRegister?: boolean;
    laravelVersion: string;
    phpVersion: string;
}>();
</script>

<template>
    <GuestLayout>
        <Head title="Welcome" />
        <!-- Hero container with background -->
        <div class="relative w-full min-h-screen">
            <!-- Background image layer -->
            <div
                class="absolute inset-0 bg-center bg-no-repeat bg-cover"
                style="background-image: url('/img/background-splash.png')"
            >
                <!-- Overlay to control image opacity -->
                <div class="absolute inset-0 bg-black/60"></div>
            </div>

            <!-- Content layer -->
            <div class="relative">
                <!-- Header -->
                <header class="relative z-50">
                    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div class="flex lg:flex-1">
                            <a href="#" class="-m-1.5 p-1.5">
                                <span class="sr-only">Your Company</span>
                                <img class="w-auto h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="">
                            </a>
                        </div>
                        <div class="hidden lg:flex lg:gap-x-12">
                            <a href="#" class="text-sm font-semibold leading-6 text-white">Product</a>
                            <a href="#" class="text-sm font-semibold leading-6 text-white">Features</a>
                            <a href="#" class="text-sm font-semibold leading-6 text-white">Marketplace</a>
                            <a href="#" class="text-sm font-semibold leading-6 text-white">Company</a>
                        </div>
                        <nav v-if="canLogin" class="flex justify-end flex-1 -mx-3">
                            <Link
                                v-if="$page.props.auth.user"
                                :href="route('dashboard')"
                                class="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                            >
                                Dashboard
                            </Link>

                            <template v-else>
                                <Link
                                    :href="route('login')"
                                    class="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                                >
                                    Log in
                                </Link>

                                <Link
                                    v-if="canRegister"
                                    :href="route('register')"
                                    class="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20]"
                                >
                                    Register
                                </Link>
                            </template>
                        </nav>
                    </nav>

                    <!-- Mobile menu -->
                    <div class="lg:hidden" role="dialog" aria-modal="true">
                        <!-- Background backdrop -->
                        <div class="fixed inset-0 z-50"></div>
                        <div class="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div class="flex items-center justify-between">
                                <a href="#" class="-m-1.5 p-1.5">
                                    <span class="sr-only">Your Company</span>
                                    <img class="w-auto h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
                                </a>
                                <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                                    <span class="sr-only">Close menu</span>
                                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div class="flow-root mt-6">
                                <div class="-my-6 divide-y divide-gray-500/10">
                                    <div class="py-6 space-y-2">
                                        <a href="#" class="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50">Product</a>
                                        <a href="#" class="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50">Features</a>
                                        <a href="#" class="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50">Marketplace</a>
                                        <a href="#" class="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50">Company</a>
                                    </div>
                                    <div class="py-6">
                                        <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <!-- Main content -->
                <main class="relative z-10">
                    <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                                <div class="relative px-3 py-1 text-sm leading-6 text-gray-400 rounded-full ring-1 ring-white/10 hover:ring-white/20">
                                    Announcing our new open-source RAG platform. <a href="#" class="ml-6 font-semibold text-white"><span class="absolute inset-0" aria-hidden="true"></span>Get started<span aria-hidden="true" class="ml-2">&rarr;</span></a>
                                </div>
                     </div>

                    <div class="px-6 mx-auto max-w-7xl lg:px-8">
                        <div class="max-w-6xl py-16 mx-auto sm:py-48 lg:py-32">
                                  <div class="text-center">
                                <h1 class="italic font-bold text-transparent uppercase text-7xl bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-500 to-yellow-200">Imagine more,</h1>
                                <h1 class="italic font-bold text-white uppercase text-8xl">build faster.</h1>
                                <p class="mt-6 text-lg font-thin leading-8 text-gray-300">Join thousands of developers who are building the next generation killer apps. Start your journey with industry-leading tools and support.</p>
                                <div class="flex items-center justify-center mt-10 gap-x-6">
                                    <a href="#" class="rounded-md bg-white text-black px-3.5 py-2.5 text-sm font-semibold shadow-md  shadow-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Get started</a>
                                    <a href="#" class="text-sm font-semibold leading-6 text-white">Live demo <span aria-hidden="true">→</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </GuestLayout>
</template>

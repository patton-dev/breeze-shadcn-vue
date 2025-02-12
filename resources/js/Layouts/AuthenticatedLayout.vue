<script setup lang="ts">
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import ColorToggle from '@/Components/ColorToggle.vue';
import { Button } from '@/shadcn/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/shadcn/ui/dropdown-menu';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/shadcn/ui/navigation-menu';
import type { PageProps, User } from '@/types';
import { Link, usePage } from '@inertiajs/vue3';
import {
    ChevronDownIcon,
    Cross1Icon,
    HamburgerMenuIcon,
} from '@radix-icons/vue';
import { computed, ref } from 'vue';


const page = usePage<PageProps>();
const user = computed(() => page.props.auth.user as User);
const showingNavigationDropdown = ref(false);
</script>

<template>
    <div class="min-h-screen">
        <div class="min-h-screen bg-background text-foreground">
            <nav class="border-b bg-background border-border">
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <!-- Left side with Logo and Nav -->
                        <div class="flex">
                            <!-- Logo -->
                            <div class="flex items-center shrink-0">
                                <Link :href="route('dashboard')">
                                    <ApplicationLogo
                                        class="block w-auto text-gray-800 fill-current h-9 dark:text-gray-200"
                                    />
                                </Link>
                            </div>

                            <!-- Desktop Navigation -->
                            <div class="hidden sm:ml-10 sm:flex">
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <Link :href="route('dashboard')">
                                                <NavigationMenuLink
                                                    :class="[
                                                        navigationMenuTriggerStyle(),
                                                        route().current(
                                                            'dashboard',
                                                        )
                                                            ? 'text-gray-900 dark:text-white'
                                                            : 'text-gray-500 dark:text-gray-400',
                                                    ]"
                                                >
                                                    Dashboard
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </div>
                        </div>

                        <!-- Desktop Right side menu -->
                        <div class="hidden sm:ml-6 sm:flex sm:items-center">
                            <DropdownMenu>
                                <DropdownMenuTrigger as-child>
                                    <Button
                                        variant="ghost"
                                        class="flex items-center"
                                    >
                                        {{ user.name }}
                                        <ChevronDownIcon class="w-4 h-4 ml-2" />
                                    </Button>

                                <ColorToggle />

                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" class="w-48">
                                    <DropdownMenuItem as-child>
                                        <Link
                                            :href="route('profile.edit')"
                                            class="w-full"
                                        >
                                            Profile
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem as-child>
                                        <Link
                                            :href="route('logout')"
                                            method="post"
                                            as="button"
                                            class="w-full"
                                        >
                                            Log Out
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        <!-- Mobile menu button -->
                        <div class="flex items-center sm:hidden">
                            <Button
                                size="icon"
                                @click="
                                    showingNavigationDropdown =
                                        !showingNavigationDropdown
                                "
                                class="relative z-[51]"
                            >
                                <HamburgerMenuIcon
                                    v-if="!showingNavigationDropdown"
                                    class="w-6 h-6"
                                />
                                <Cross1Icon v-else class="w-6 h-6" />
                            </Button>
                        </div>
                    </div>
                </div>

                <!-- Mobile menu -->
                <div
                    :class="[
                        showingNavigationDropdown ? 'block' : 'hidden',
                        'sm:hidden',
                    ]"
                    class="fixed inset-0 z-50 bg-white bg-muted"
                >
                    <div class="px-4 pt-2 pb-3 space-y-1">
                        <Link
                            :href="route('dashboard')"
                            class="block py-2 text-base font-medium transition-colors"
                            :class="[
                                route().current('dashboard')
                                    ? 'text-gray-900 dark:text-white'
                                    : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white',
                            ]"
                            @click="showingNavigationDropdown = false"
                        >
                            Dashboard
                        </Link>
                    </div>

                    <!-- Mobile user menu -->
                    <div
                        class="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600"
                    >
                        <div class="px-4">
                            <div
                                class="text-base font-medium text-gray-800 dark:text-gray-200"
                            >
                                {{ user.name }}
                            </div>
                            <div class="text-sm font-medium text-gray-500">
                                {{ user.email }}
                            </div>
                        </div>

                        <div class="px-4 mt-3 space-y-1">
                            <Link
                                :href="route('profile.edit')"
                                class="block py-2 text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                @click="showingNavigationDropdown = false"
                            >
                                Profile
                            </Link>
                            <Link
                                :href="route('logout')"
                                method="post"
                                as="button"
                                class="block w-full py-2 text-base font-medium text-left text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                @click="showingNavigationDropdown = false"
                            >
                                Log Out
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Page Heading -->
            <header
                class="border-b bg-background border-border"
                v-if="$slots.header"
            >
                <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>


            <!-- Page Content -->
            <main>
                <slot />
            </main>
        </div>
    </div>
</template>

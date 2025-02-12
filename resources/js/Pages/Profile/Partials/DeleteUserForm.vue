<script setup lang="ts">
import { Button } from '@/shadcn/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/shadcn/ui/dialog';
import { Input } from '@/shadcn/ui/input';
import { InputError } from '@/shadcn/ui/input-error';
import { Label } from '@/shadcn/ui/label';
import { useForm } from '@inertiajs/vue3';
import { nextTick, ref } from 'vue';

const showDialog = ref(false);
const passwordInput = ref<HTMLInputElement | null>(null);

const form = useForm({
    password: '',
});

const confirmUserDeletion = () => {
    showDialog.value = true;
    form.reset();
    nextTick(() => passwordInput.value?.focus());
};

const deleteUser = () => {
    form.delete(route('profile.destroy'), {
        preserveScroll: true,
        onSuccess: () => {
            showDialog.value = false;
            form.reset();
        },
    });
};

const closeModal = () => {
    showDialog.value = false;
    form.reset();
    form.clearErrors();
};
</script>

<template>
    <section class="space-y-6">
        <header>
            <h2 class="text-lg font-medium text-foreground">
                Delete Account
            </h2>

            <p class="mt-1 text-sm text-muted-foreground">
                Once your account is deleted, all of its resources and data will
                be permanently deleted. Before deleting your account, please
                download any data or information that you wish to retain.
            </p>
        </header>

        <Button variant="destructive" @click="confirmUserDeletion">
            Delete Account
        </Button>

        <Dialog
            :open="showDialog"
            @update:open="(value) => !value && closeModal()"
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle
                        >Are you sure you want to delete your
                        account?</DialogTitle
                    >
                    <DialogDescription>
                        Once your account is deleted, all of its resources and
                        data will be permanently deleted. Please enter your
                        password to confirm you would like to permanently delete
                        your account.
                    </DialogDescription>
                </DialogHeader>

                <div class="grid gap-4 py-4">
                    <div class="space-y-2">
                        <Label for="password" class="sr-only">Password</Label>
                        <Input
                            id="password"
                            ref="passwordInput"
                            v-model="form.password"
                            type="password"
                            placeholder="Password"
                            :class="{
                                'ring-2 ring-destructive': form.errors.password,
                            }"
                            @keyup.enter="deleteUser"
                        />
                        <InputError :message="form.errors.password" />
                    </div>
                </div>

                <DialogFooter>
                    <Button variant="secondary" @click="closeModal">
                        Cancel
                    </Button>
                    <Button
                        variant="destructive"
                        :disabled="form.processing"
                        @click="deleteUser"
                        class="ml-3"
                    >
                        Delete Account
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </section>
</template>

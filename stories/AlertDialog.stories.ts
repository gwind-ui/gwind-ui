import { ref } from "vue"
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "../src/components/alert-dialog"
import GButton from "../src/components/button/button.vue"

export default {
    title: "Components/AlertDialog",
    component: AlertDialog,
    tags: ["autodocs"],
}

export const Default = {
    args: {
        open: false,
    },
    render: (args: string) => ({
        components: {
            AlertDialog,
            AlertDialogTrigger,
            AlertDialogContent,
            AlertDialogHeader,
            AlertDialogTitle,
            AlertDialogDescription,
            AlertDialogFooter,
            AlertDialogCancel,
            AlertDialogAction,
            GButton,
        },
        setup() {
            const open = ref(false)
            return { args, open }
        },
        template: `
      <AlertDialog :open="args.open" @update:open="args.open = $event">
        <AlertDialogTrigger @click="open = true" as-child>
          <GButton>Hapus Akun</GButton>
        </AlertDialogTrigger>

        <AlertDialogContent class="max-w-sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Apakah Anda yakin?</AlertDialogTitle>
            <AlertDialogDescription>
              Tindakan ini tidak dapat diurungkan. Ini akan menghapus akun Anda secara permanen dan menghapus data Anda dari server kami.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter class="gap-y-4">
            <AlertDialogCancel @click="args.open = false" variant="secondary">
              Tutup
            </AlertDialogCancel>
            <AlertDialogAction variant="destructive">
              Hapus Akun
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    `,
    }),

    parameters: {
        docs: {
            source: {
                code: `

<script setup lang="ts">
    import { ref } from "vue"
    import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialog
    , AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "../src/components/alert-dialog"
    import GButton from "../src/components/button/button.vue"

    const open = ref(false)
</script>

<template>
    <AlertDialog :open="open" @update:open="open = $event">
        <AlertDialogTrigger @click="open = true" as-child>
            <GButton>Hapus Akun</GButton>
        </AlertDialogTrigger>

        <AlertDialogContent class="max-w-sm">
            <AlertDialogHeader>
            <AlertDialogTitle>Apakah Anda yakin?</AlertDialogTitle>
            <AlertDialogDescription>
                Tindakan ini tidak dapat diurungkan. Ini akan menghapus akun Anda secara permanen dan menghapus data Anda dari server kami.
            </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter class="gap-y-4">
            <AlertDialogCancel @click="open = false" variant="secondary">
                Tutup
            </AlertDialogCancel>
            <AlertDialogAction variant="destructive">
                Hapus Akun
            </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
</template>
        `.trim(),
            },
        },
    },
}

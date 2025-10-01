<script setup lang="ts">
/* eslint-disable */
import { ref, computed, watch } from "vue"
import { Label } from "reka-ui"
import { GButton } from "../button"

const MAX_SIZE = 1024 * 1024

const formatSize = (bytes: number) => (bytes < 1024 ? `${bytes} B` : bytes < MAX_SIZE ? `${(bytes / 1024).toFixed(2)} KB` : `${(bytes / MAX_SIZE).toFixed(2)} MB`)

interface Props {
    file?: File | string
    imageOnly?: boolean
    errorText?: string
    uniqueKey: string
    helperText?: string
    showFileURL?: boolean
    small?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    imageOnly: true,
    errorText: "File terlalu besar, maksimal 1MB.",
    helperText: "Maksimal ukuran file 1MB.",
    showFileURL: undefined,
    small: false,
})

const emit = defineEmits<{
    (e: "fileDropped", file: File, key: string): void
    (e: "fileRemoved", key: string): void
    (e: "showUrlData", url?: string | null): void
}>()

const dragOver = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)

const previewImage = ref<string | null>(null)
const fileName = ref<string | null>(null)
const fileError = ref<string | null>(null)
const urlFile = ref<string | null>(null)
const internalShowFileURL = ref(false)
const isImageFile = ref(false)

const showHelperText = computed(() => !!props.helperText && !fileError.value)

const acceptAttr = computed(() => (props.imageOnly ? "image/*" : ".pdf,.doc,.docx,.xlsx,.csv,image/*"))

function reset() {
    previewImage.value = null
    fileName.value = null
    fileError.value = null
    internalShowFileURL.value = false
    urlFile.value = null
}

function validateFile(file: File) {
    if (file.size > MAX_SIZE) {
        fileError.value = props.errorText
        return false
    }
    if (props.imageOnly && !file.type.startsWith("image/")) {
        fileError.value = "Hanya gambar yang diperbolehkan."
        return false
    }
    return true
}

function setPreview(blob: Blob) {
    isImageFile.value = blob.type.startsWith("image/")
    if (isImageFile.value) {
        previewImage.value = URL.createObjectURL(blob)
    }
}

function handleFiles(list: FileList | null) {
    if (!list?.length) return
    reset()

    const file = list[0]
    if (!validateFile(file)) return

    fileName.value = file.name
    setPreview(file)
    emit("fileDropped", file, props.uniqueKey)
}

const onDragOver = () => {
    dragOver.value = true
}
const onDragLeave = () => {
    dragOver.value = false
}
const onFileDrop = (e: DragEvent) => {
    dragOver.value = false
    handleFiles(e.dataTransfer?.files ?? null)
}
const triggerInput = () => fileInput.value?.click()

function remove() {
    reset()
    if (fileInput.value) fileInput.value.value = ""
    emit("fileRemoved", props.uniqueKey)
}

function previewFile() {
    const targetUrl = urlFile.value || (props.file instanceof File ? URL.createObjectURL(props.file) : null)

    if (!targetUrl) return

    window.open(targetUrl, "_blank")
    // Revoke object URL (only if created on the fly)
    if (!urlFile.value) setTimeout(() => URL.revokeObjectURL(targetUrl), 1000)
}

watch(
    () => props.file,
    async newVal => {
        reset()
        if (!newVal) return

        if (newVal instanceof File) {
            if (!validateFile(newVal)) return
            fileName.value = newVal.name
            setPreview(newVal)
            emit("fileDropped", newVal, props.uniqueKey)
            return
        }

        try {
            const res = await fetch(newVal)
            if (!res.ok) throw new Error(res.statusText)

            urlFile.value = newVal
            internalShowFileURL.value = true

            const blob = await res.blob()
            const fname = new URL(newVal).pathname.split("/").pop() ?? "file"
            // Perbaiki whitespace di sini
            fileName.value = `${fname} - ${formatSize(blob.size)}`
            setPreview(blob)
        } catch (err) {
            fileError.value = `Gagal memuat file: ${(err as Error).message}`
        }
    },
    { immediate: true }
)
</script>

<template>
    <div class="flex flex-col gap-2 w-full">
        <div
            class="relative flex flex-col items-center justify-center w-full rounded-lg border-1 border-dashed transition-colors"
            :class="[dragOver ? 'border-lime-500 bg-lime-50/20' : 'border-gray-300', fileName && !props.imageOnly && small && 'bg-lime-100 !h-12', props.imageOnly ? 'aspect-video h-40' : 'h-40']"
            @dragover.prevent="onDragOver"
            @dragleave="onDragLeave"
            @drop.prevent="onFileDrop"
        >
            <input ref="fileInput" type="file" class="hidden" :accept="acceptAttr" @change="e => handleFiles((e.target as HTMLInputElement).files)" />

            <Label class="absolute inset-0 flex items-center justify-center gap-2 cursor-pointer select-none px-4" @click.prevent="triggerInput">
                <!-- Placeholder -->
                <template v-if="!previewImage && !fileName">
                    <slot name="icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M10.1635 2.62254C9.91883 2.441 9.57161 2.46117 9.34972 2.68306L5.18306 6.84972L5.12254 6.91982C4.941 7.1645 4.96117 7.51172 5.18306 7.73361L5.25316 7.79412C5.49783 7.97567 5.84505 7.9555 6.06694 7.73361L9.16667 4.63412V11.875C9.17237 11.9598 9.21376 12.2649 9.47525 12.5C9.79167 12.5 10.1368 12.5 10.4167 12.2202V4.63412L13.5164 7.73361C13.8312 7.97567 14.1784 7.9555 14.4003 7.73361C14.6444 7.48953 14.6444 7.0938 14.4003 6.84972L10.2336 2.68306C10.1635 2.62254 10.1635 2.62254 10.1635 2.62254ZM16.8571 12.0833C17.1826 12.0833 17.4516 12.3185 17.4941 12.6235L17.5 12.7083V16.875C17.5 17.1914 17.2582 17.4529 16.9444 17.4943L16.8571 17.5H3.14286C2.8174 17.5 2.54844 17.2649 2.50587 16.9598L2.5 16.875V12.7083C2.5 12.3632 2.78782 12.0833 3.14286 12.0833C3.46831 12.0833 3.73728 12.3185 3.77985 12.6235L3.78571 12.7083V16.25H16.2143V12.7083C16.2143 12.3919 16.4561 12.1304 16.7699 12.089L16.8571 12.0833Z"
                                fill="#00AB4E"
                            />
                        </svg>
                    </slot>
                    <p class="text-sigma text-black-900">
                        Tarik file ke sini atau
                        <span class="font-bold text-lime-500">pilih dari perangkat</span>
                    </p>
                </template>

                <template v-else-if="props.imageOnly && previewImage">
                    <div class="relative p-1 border-1 border-black-200 rounded-md">
                        <img :src="previewImage" alt="Preview" class="object-cover max-h-30" />
                        <button type="button" @click.stop="remove" class="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-red-500 text-white flex items-center justify-center cursor-pointer">×</button>
                    </div>
                </template>

                <template v-else-if="!small">
                    <div class="flex flex-col items-center justify-center gap-2 cursor-auto">
                        <div class="absolute w-fit h-fit p-1 border-1 border-black-200 rounded-md flex flex-col items-center justify-center bottom-8">
                            <!-- asset untuk file / selain gambar -->
                            <svg v-if="!isImageFile" width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="path-1-inside-1_36229_201208" fill="white">
                                    <path
                                        d="M33.583 7.99219L29.3643 17.9277L23.6211 21.6445V20.8711L17.9922 24.6494V83.9658C17.9923 86.1881 19.6682 87.9893 21.7354 87.9893H22.7998C22.8186 87.9904 22.8373 87.9922 22.8564 87.9922H74.1094C76.2537 87.9922 77.9922 86.1902 77.9922 83.9678V12.0166C77.9922 9.79422 76.2537 7.99219 74.1094 7.99219H33.583Z"
                                    />
                                </mask>
                                <path
                                    d="M33.583 7.99219L29.3643 17.9277L23.6211 21.6445V20.8711L17.9922 24.6494V83.9658C17.9923 86.1881 19.6682 87.9893 21.7354 87.9893H22.7998C22.8186 87.9904 22.8373 87.9922 22.8564 87.9922H74.1094C76.2537 87.9922 77.9922 86.1902 77.9922 83.9678V12.0166C77.9922 9.79422 76.2537 7.99219 74.1094 7.99219H33.583Z"
                                    fill="#EEEEEF"
                                />
                                <path
                                    d="M33.583 7.99219L32.6625 7.60135L32.9212 6.99219H33.583V7.99219ZM29.3643 17.9277L30.2847 18.3186L30.1649 18.6007L29.9076 18.7673L29.3643 17.9277ZM23.6211 21.6445L24.1644 22.4841L22.6211 23.4828V21.6445H23.6211ZM23.6211 20.8711L23.0638 20.0408L24.6211 18.9955V20.8711H23.6211ZM17.9922 24.6494H16.9922V24.1163L17.4349 23.8191L17.9922 24.6494ZM17.9922 83.9658L16.9922 83.9659V83.9658H17.9922ZM22.7998 87.9893V86.9893H22.8314L22.8629 86.9912L22.7998 87.9893ZM22.8564 87.9922V88.9922H22.8564L22.8564 87.9922ZM33.583 7.99219L34.5035 8.38303L30.2847 18.3186L29.3643 17.9277L28.4438 17.5369L32.6625 7.60135L33.583 7.99219ZM29.3643 17.9277L29.9076 18.7673L24.1644 22.4841L23.6211 21.6445L23.0778 20.805L28.8209 17.0882L29.3643 17.9277ZM23.6211 21.6445H22.6211V20.8711H23.6211H24.6211V21.6445H23.6211ZM23.6211 20.8711L24.1784 21.7014L18.5495 25.4797L17.9922 24.6494L17.4349 23.8191L23.0638 20.0408L23.6211 20.8711ZM17.9922 24.6494H18.9922V83.9658H17.9922H16.9922V24.6494H17.9922ZM17.9922 83.9658L18.9922 83.9658C18.9923 85.705 20.2873 86.9893 21.7354 86.9893V87.9893V88.9893C19.0491 88.9893 16.9923 86.6712 16.9922 83.9659L17.9922 83.9658ZM21.7354 87.9893V86.9893H22.7998V87.9893V88.9893H21.7354V87.9893ZM22.7998 87.9893L22.8629 86.9912C22.8718 86.9918 22.8802 86.9924 22.884 86.9927C22.8891 86.993 22.8899 86.9931 22.8899 86.9931C22.8894 86.9931 22.8859 86.9928 22.8805 86.9926C22.875 86.9924 22.8668 86.9922 22.8565 86.9922L22.8564 87.9922L22.8564 88.9922C22.8175 88.9922 22.7851 88.9904 22.7662 88.9893C22.7568 88.9887 22.7481 88.9881 22.7438 88.9878C22.7411 88.9876 22.7397 88.9875 22.7383 88.9874C22.7371 88.9873 22.7367 88.9873 22.7367 88.9873L22.7998 87.9893ZM22.8564 87.9922V86.9922H74.1094V87.9922V88.9922H22.8564V87.9922ZM74.1094 87.9922V86.9922C75.6679 86.9922 76.9922 85.672 76.9922 83.9678H77.9922H78.9922C78.9922 86.7084 76.8395 88.9922 74.1094 88.9922V87.9922ZM77.9922 83.9678H76.9922V12.0166H77.9922H78.9922V83.9678H77.9922ZM77.9922 12.0166H76.9922C76.9922 10.3124 75.6679 8.99219 74.1094 8.99219V7.99219V6.99219C76.8395 6.99219 78.9922 9.27602 78.9922 12.0166H77.9922ZM74.1094 7.99219V8.99219H33.583V7.99219V6.99219H74.1094V7.99219Z"
                                    fill="#252528"
                                    mask="url(#path-1-inside-1_36229_201208)"
                                />
                                <path d="M32.9814 19.8516L33.0752 9.26953L19.2461 24.0322L29.6973 23.1367L29.7188 23.1348H29.7393C31.525 23.1348 32.9813 21.6714 32.9814 19.8564V19.8516Z" fill="#BBBDC0" stroke="#252528" />
                                <rect x="27.9922" y="29.4805" width="40" height="3" rx="1.5" fill="#58585B" />
                                <rect x="27.9766" y="39.4805" width="40" height="3" rx="1.5" fill="#58585B" />
                                <rect x="27.9922" y="49.4805" width="40" height="3" rx="1.5" fill="#58585B" />
                                <rect x="12.5" y="57.9805" width="71" height="19" rx="3.5" fill="#5297D1" stroke="#252528" />
                                <path
                                    d="M38.852 71V62.54H44.564V63.992H40.712V66.056H44.3V67.508H40.712V71H38.852ZM45.4678 63.968V62.276H47.4238V63.968H45.4678ZM45.5398 71V65.108H47.3518V71H45.5398ZM50.9467 71.132C50.1867 71.132 49.6307 70.936 49.2787 70.544C48.9267 70.144 48.7507 69.552 48.7507 68.768V62.54H50.5627V68.696C50.5627 68.896 50.5947 69.072 50.6587 69.224C50.7227 69.368 50.8147 69.476 50.9347 69.548C51.0627 69.62 51.2227 69.656 51.4147 69.656C51.4947 69.656 51.5787 69.652 51.6667 69.644C51.7547 69.636 51.8387 69.62 51.9187 69.596L51.8947 71C51.7427 71.04 51.5867 71.072 51.4267 71.096C51.2747 71.12 51.1147 71.132 50.9467 71.132ZM55.7482 71.132C55.0522 71.132 54.4522 71.008 53.9482 70.76C53.4522 70.504 53.0682 70.148 52.7962 69.692C52.5322 69.228 52.4002 68.684 52.4002 68.06C52.4002 67.452 52.5282 66.92 52.7842 66.464C53.0402 66 53.3962 65.64 53.8522 65.384C54.3162 65.12 54.8402 64.988 55.4242 64.988C56.0002 64.988 56.4962 65.112 56.9122 65.36C57.3282 65.6 57.6482 65.944 57.8722 66.392C58.1042 66.84 58.2202 67.372 58.2202 67.988V68.444H53.8882V67.508H56.9122L56.7202 67.676C56.7202 67.188 56.6122 66.82 56.3962 66.572C56.1882 66.316 55.8882 66.188 55.4962 66.188C55.2002 66.188 54.9482 66.256 54.7402 66.392C54.5322 66.528 54.3722 66.724 54.2602 66.98C54.1482 67.236 54.0922 67.544 54.0922 67.904V68C54.0922 68.408 54.1522 68.744 54.2722 69.008C54.4002 69.264 54.5882 69.456 54.8362 69.584C55.0922 69.712 55.4082 69.776 55.7842 69.776C56.1042 69.776 56.4282 69.728 56.7562 69.632C57.0842 69.536 57.3802 69.388 57.6442 69.188L58.1242 70.4C57.8282 70.624 57.4642 70.804 57.0322 70.94C56.6082 71.068 56.1802 71.132 55.7482 71.132Z"
                                    fill="white"
                                />
                            </svg>

                            <svg v-else width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="path-1-inside-1_36229_201195" fill="white">
                                    <path
                                        d="M33.5908 7.99219L29.3721 17.9277L23.6289 21.6445V20.8711L18 24.6494V83.9658C18.0001 86.1881 19.676 87.9893 21.7432 87.9893H22.8076C22.8264 87.9904 22.8452 87.9922 22.8643 87.9922H74.1172C76.2615 87.9922 78 86.1902 78 83.9678V12.0166C78 9.79422 76.2615 7.99219 74.1172 7.99219H33.5908Z"
                                    />
                                </mask>
                                <path
                                    d="M33.5908 7.99219L29.3721 17.9277L23.6289 21.6445V20.8711L18 24.6494V83.9658C18.0001 86.1881 19.676 87.9893 21.7432 87.9893H22.8076C22.8264 87.9904 22.8452 87.9922 22.8643 87.9922H74.1172C76.2615 87.9922 78 86.1902 78 83.9678V12.0166C78 9.79422 76.2615 7.99219 74.1172 7.99219H33.5908Z"
                                    fill="#EEEEEF"
                                />
                                <path
                                    d="M33.5908 7.99219L32.6704 7.60135L32.929 6.99219H33.5908V7.99219ZM29.3721 17.9277L30.2925 18.3186L30.1727 18.6007L29.9154 18.7673L29.3721 17.9277ZM23.6289 21.6445L24.1722 22.4841L22.6289 23.4828V21.6445H23.6289ZM23.6289 20.8711L23.0716 20.0408L24.6289 18.9955V20.8711H23.6289ZM18 24.6494H17V24.1163L17.4427 23.8191L18 24.6494ZM18 83.9658L17 83.9659V83.9658H18ZM22.8076 87.9893V86.9893H22.8392L22.8707 86.9912L22.8076 87.9893ZM22.8643 87.9922V88.9922H22.8642L22.8643 87.9922ZM33.5908 7.99219L34.5113 8.38303L30.2925 18.3186L29.3721 17.9277L28.4516 17.5369L32.6704 7.60135L33.5908 7.99219ZM29.3721 17.9277L29.9154 18.7673L24.1722 22.4841L23.6289 21.6445L23.0856 20.805L28.8288 17.0882L29.3721 17.9277ZM23.6289 21.6445H22.6289V20.8711H23.6289H24.6289V21.6445H23.6289ZM23.6289 20.8711L24.1862 21.7014L18.5573 25.4797L18 24.6494L17.4427 23.8191L23.0716 20.0408L23.6289 20.8711ZM18 24.6494H19V83.9658H18H17V24.6494H18ZM18 83.9658L19 83.9658C19.0001 85.705 20.2951 86.9893 21.7432 86.9893V87.9893V88.9893C19.057 88.9893 17.0002 86.6712 17 83.9659L18 83.9658ZM21.7432 87.9893V86.9893H22.8076V87.9893V88.9893H21.7432V87.9893ZM22.8076 87.9893L22.8707 86.9912C22.8796 86.9918 22.8881 86.9924 22.8918 86.9927C22.8969 86.993 22.8977 86.9931 22.8977 86.9931C22.8973 86.9931 22.8937 86.9928 22.8883 86.9926C22.8828 86.9924 22.8746 86.9922 22.8643 86.9922L22.8643 87.9922L22.8642 88.9922C22.8254 88.9922 22.793 88.9904 22.774 88.9893C22.7646 88.9887 22.7559 88.9881 22.7516 88.9878C22.749 88.9876 22.7475 88.9875 22.7461 88.9874C22.7449 88.9873 22.7445 88.9873 22.7445 88.9873L22.8076 87.9893ZM22.8643 87.9922V86.9922H74.1172V87.9922V88.9922H22.8643V87.9922ZM74.1172 87.9922V86.9922C75.6757 86.9922 77 85.672 77 83.9678H78H79C79 86.7084 76.8473 88.9922 74.1172 88.9922V87.9922ZM78 83.9678H77V12.0166H78H79V83.9678H78ZM78 12.0166H77C77 10.3124 75.6757 8.99219 74.1172 8.99219V7.99219V6.99219C76.8473 6.99219 79 9.27602 79 12.0166H78ZM74.1172 7.99219V8.99219H33.5908V7.99219V6.99219H74.1172V7.99219Z"
                                    fill="#252528"
                                    mask="url(#path-1-inside-1_36229_201195)"
                                />
                                <path d="M32.9893 19.8516L33.083 9.26953L19.2539 24.0322L29.7051 23.1367L29.7266 23.1348H29.7471C31.5328 23.1348 32.9891 21.6714 32.9893 19.8564V19.8516Z" fill="#BBBDC0" stroke="#252528" />
                                <rect x="27.9922" y="29.4805" width="40" height="3" rx="1.5" fill="#58585B" />
                                <rect x="27.9766" y="39.4805" width="40" height="3" rx="1.5" fill="#58585B" />
                                <rect x="27.9922" y="49.4805" width="40" height="3" rx="1.5" fill="#58585B" />
                                <path
                                    d="M16 57.9805H80C81.933 57.9805 83.5 59.5475 83.5 61.4805V73.4805C83.5 75.4135 81.933 76.9805 80 76.9805H16C14.067 76.9805 12.5 75.4135 12.5 73.4805V61.4805C12.5 59.5475 14.067 57.9805 16 57.9805Z"
                                    fill="#5297D1"
                                    stroke="#252528"
                                />
                                <path
                                    d="M37.852 71V62.54H39.712V71H37.852ZM41.4268 71V62.54H42.9748L46.0348 68.108H45.6268L48.6748 62.54H50.1988V71H48.5068V65.384H48.7708L46.3228 69.728H45.2788L42.8188 65.372H43.1068V71H41.4268ZM56.1025 71.132C55.1505 71.132 54.3425 70.952 53.6785 70.592C53.0225 70.232 52.5225 69.728 52.1785 69.08C51.8345 68.432 51.6625 67.672 51.6625 66.8C51.6625 65.904 51.8385 65.128 52.1905 64.472C52.5505 63.816 53.0665 63.308 53.7385 62.948C54.4185 62.588 55.2265 62.408 56.1625 62.408C56.5625 62.408 56.9465 62.448 57.3145 62.528C57.6825 62.6 58.0225 62.704 58.3345 62.84C58.6545 62.976 58.9265 63.14 59.1505 63.332L58.5505 64.784C58.1825 64.512 57.8065 64.32 57.4225 64.208C57.0385 64.088 56.6225 64.028 56.1745 64.028C55.3185 64.028 54.6745 64.264 54.2425 64.736C53.8185 65.208 53.6065 65.896 53.6065 66.8C53.6065 67.704 53.8225 68.388 54.2545 68.852C54.6945 69.316 55.3425 69.548 56.1985 69.548C56.4865 69.548 56.7825 69.52 57.0865 69.464C57.3905 69.408 57.6905 69.328 57.9865 69.224L57.6385 69.98V67.676H55.8145V66.332H59.1745V70.484C58.9025 70.62 58.5945 70.736 58.2505 70.832C57.9145 70.928 57.5625 71 57.1945 71.048C56.8265 71.104 56.4625 71.132 56.1025 71.132Z"
                                    fill="white"
                                />
                            </svg>
                            <button type="button" @click.stop="remove" class="absolute top-[-10px] right-[-10px] h-6 w-6 rounded-full bg-red-500 text-white flex items-center justify-center cursor-pointer">×</button>
                        </div>
                    </div>
                </template>

                <template v-else-if="small">
                    <div class="flex items-center justify-between w-full gap-2">
                        <p class="text-sigma font-bold text-black-800 truncate max-w-[80%]">
                            {{ fileName }}
                        </p>
                        <GButton v-if="small" size="sm" variant="link" @click.stop="previewFile"> Lihat File </GButton>
                    </div>
                </template>
            </Label>
            <p v-if="fileName && !small && !imageOnly" class="absolute text-omega font-bold text-lime-500 bottom-2 cursor-pointer" @click.stop="previewFile">
                {{ fileName }}
            </p>
        </div>

        <!-- Helper / error -->
        <p v-if="fileError" class="text-omega text-red-500">{{ fileError }}</p>
        <p v-else-if="showHelperText" class="text-omega text-black-500">{{ props.helperText }}</p>
    </div>
</template>

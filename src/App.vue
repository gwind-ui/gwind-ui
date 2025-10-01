<template>
    <div id="app" class="container mx-auto p-4 space-y-16">
        <Alert theme="gwind" variant="info" :svgVariant="true">
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription> You can add components to your app using the cli. </AlertDescription>
        </Alert>
        <Alert theme="gwind" variant="error">
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription> You can add components to your app using the cli. </AlertDescription>
        </Alert>
        <Alert theme="tring" variant="success">
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription> You can add components to your app using the cli. </AlertDescription>
        </Alert>
        <Alert thema="gwind" variant="warning">
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription> You can add components to your app using the cli. </AlertDescription>
        </Alert>
        <Alert thema="gwind" variant="info">
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription> You can add components to your app using the cli. </AlertDescription>
        </Alert>
        <Alert thema="tring" variant="warning">
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
        </Alert>

        <Alert variant="warning">
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
        </Alert>

        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent> Yes. It adheres to the WAI-ARIA design pattern. </AccordionContent>
            </AccordionItem>
        </Accordion>

        <div class="flex flex-row gap-4 flex-wrap lg:flex-row sm:flex-col sm:gap-2 md:flex-col md:gap-2">
            <GButton variant="primary" size="md"> Primary </GButton>
            <GButton variant="primary" disabled size="md"> Primary Disabled </GButton>
            <GButton variant="destructive" size="md"> Destructive </GButton>
            <GButton variant="outline" size="md"> Outline </GButton>
            <GButton variant="secondary" size="md"> Seccondary </GButton>
            <GButton variant="tertiary" size="md"> Tertiary </GButton>
            <GButton variant="neutral" size="md"> Neutral </GButton>
            <GButton variant="link" size="md"> Link </GButton>
            <GButton variant="primary" size="md">
                Primary with Icon Right
                <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.97814 0.275758C1.50308 -0.116431 0.798678 -0.0902854 0.354196 0.354196C-0.118065 0.826458 -0.118065 1.59215 0.354196 2.06441L4.78979 6.5L0.354197 10.9356C-0.118065 11.4079 -0.118065 12.1735 0.354197 12.6458C0.798678 13.0903 1.50308 13.1164 1.97814 12.7242L2.06441 12.6458L6.5 8.21021L10.9356 12.6458L11.0219 12.7242C11.4969 13.1164 12.2013 13.0903 12.6458 12.6458C13.1181 12.1735 13.1181 11.4079 12.6458 10.9356L8.21021 6.5L12.6458 2.06441C13.1181 1.59215 13.1181 0.826458 12.6458 0.354196C12.2013 -0.0902854 11.4969 -0.116431 11.0219 0.275758L10.9356 0.354196L6.5 4.78979L2.06441 0.354196L1.97814 0.275758Z"
                    />
                </svg>
            </GButton>
            <GButton variant="ghost-fab" size="lg">
                <GIcon :icon="GIconCross" weight="outline" class="w-6"></GIcon>
                Click Me
            </GButton>
            <GButton variant="link" size="lg"> Click Me </GButton>
            <GButton variant="neutral" size="lg"> Click Me </GButton>
            <GButton variant="icon" size="lg">
                AAAA
                <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.97814 0.275758C1.50308 -0.116431 0.798678 -0.0902854 0.354196 0.354196C-0.118065 0.826458 -0.118065 1.59215 0.354196 2.06441L4.78979 6.5L0.354197 10.9356C-0.118065 11.4079 -0.118065 12.1735 0.354197 12.6458C0.798678 13.0903 1.50308 13.1164 1.97814 12.7242L2.06441 12.6458L6.5 8.21021L10.9356 12.6458L11.0219 12.7242C11.4969 13.1164 12.2013 13.0903 12.6458 12.6458C13.1181 12.1735 13.1181 11.4079 12.6458 10.9356L8.21021 6.5L12.6458 2.06441C13.1181 1.59215 13.1181 0.826458 12.6458 0.354196C12.2013 -0.0902854 11.4969 -0.116431 11.0219 0.275758L10.9356 0.354196L6.5 4.78979L2.06441 0.354196L1.97814 0.275758Z"
                    />
                </svg>
                Primary with Icon Left
            </GButton>
        </div>

        <GButton @click="openDialog">Hapus Akun</GButton>

        <AlertDialog :open="open">
            <AlertDialogContent class="max-w-sm">
                <AlertDialogHeader>
                    <AlertDialogTitle>Apakah Anda yakin?</AlertDialogTitle>
                    <AlertDialogDescription> Tindakan ini tidak dapat diurungkan. Ini akan menghapus akun Anda secara permanen dan menghapus data Anda dari server kami. </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter class="gap-y-4">
                    <GButton @click="closeDialog">Close Dialog</GButton>
                    <GButton variant="destructive">Hapus Akun</GButton>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

        <Card class="max-w-xs flex flex-col gap-y-4">
            <CardContent>
                <img src="https://reactjs.org/logo-og.png" alt="" />
            </CardContent>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </CardDescription>
            </CardHeader>
            <CardFooter class="flex flex-row gap-4">
                <GButton class="w-full">Footer</GButton>
                <GButton class="w-full" variant="destructive">Content</GButton>
            </CardFooter>
        </Card>

        <Card class="max-w-xs flex flex-col gap-y-4">
            <CardHeader>
                <CardTitle>Avatars</CardTitle>
                <CardDescription> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </CardDescription>
            </CardHeader>
            <CardContent>
                <Avatar>
                    <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </CardContent>
        </Card>

        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
            <Card class="flex flex-col gap-y-4 h-fit">
                <CardHeader>
                    <CardTitle>Avatars</CardTitle>
                    <CardDescription>Aspect Ratio 21:9</CardDescription>
                </CardHeader>
                <CardContent>
                    <AspectRatio :ratio="21 / 9">
                        <img src="https://reactjs.org/logo-og.png" alt="Image" class="rounded-md object-cover w-full h-full" />
                    </AspectRatio>
                </CardContent>
            </Card>
            <Card class="flex flex-col gap-y-4 h-fit">
                <CardHeader>
                    <CardTitle>Avatars</CardTitle>
                    <CardDescription>Aspect Ratio 16:9</CardDescription>
                </CardHeader>
                <CardContent>
                    <AspectRatio :ratio="16 / 9">
                        <img src="https://reactjs.org/logo-og.png" alt="Image" class="rounded-md object-cover w-full h-full" />
                    </AspectRatio>
                </CardContent>
            </Card>
            <Card class="flex flex-col gap-y-4 h-fit">
                <CardHeader>
                    <CardTitle>Avatars</CardTitle>
                    <CardDescription>Aspect Ratio 4:3</CardDescription>
                </CardHeader>
                <CardContent>
                    <AspectRatio :ratio="4 / 3">
                        <img src="https://reactjs.org/logo-og.png" alt="Image" class="rounded-md object-cover w-full h-full" />
                    </AspectRatio>
                </CardContent>
            </Card>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
            <Card class="flex flex-col gap-y-4 h-fit">
                <CardHeader>
                    <CardTitle>Calendar</CardTitle>
                    <CardDescription>Calendar Component</CardDescription>
                </CardHeader>
                <CardContent class="flex flex-col gap-y-4 items-center">
                    <!-- Calendar -->
                    <GLabel>Label</GLabel>
                    <Calendar class="w-fit" v-model="tanggal" />
                    <p>{{ tanggal }}</p>
                </CardContent>
            </Card>

            <Card class="flex flex-col gap-y-4 h-fit">
                <CardHeader>
                    <CardTitle>Calendar</CardTitle>
                    <CardDescription>Calendar Component</CardDescription>
                </CardHeader>
                <CardContent class="flex flex-col gap-y-2 items-start">
                    <!-- Calendar -->
                    <GLabel>Label</GLabel>
                    <Datepicker v-model="tanggal" placeholder="Pilih tanggal..." calendarPositionY="top" />
                    <p>{{ tanggal }}</p>
                </CardContent>
            </Card>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
            <Card class="flex flex-col gap-y-4 h-fit">
                <CardHeader>
                    <CardTitle>Badge</CardTitle>
                    <CardDescription>Badge Component</CardDescription>
                </CardHeader>
                <CardContent class="grid grid-cols-3 gap-4 text-omega">
                    <Badge :model-value="badgeOpen" variant="green">
                        Green Badge
                        <template #rightIcon>
                            <GIcon @click="() => (badgeOpen = !badgeOpen)" :icon="GIconCross" weight="fill" class="text-black-500 w-5 cursor"></GIcon>
                        </template>
                    </Badge>
                    <Badge variant="brocoli"> Brocoli Badge </Badge>
                    <Badge variant="red"> Destructive Badge </Badge>
                    <Badge variant="blue"> Blue Badge </Badge>
                    <Badge variant="orange"> Orange Badge </Badge>
                    <Badge variant="outline"> Outline Badge </Badge>
                </CardContent>
            </Card>
            <Card class="flex flex-col gap-y-4 h-fit">
                <CardHeader>
                    <CardTitle>Breadcrumb</CardTitle>
                    <CardDescription>Breadcrumb Component</CardDescription>
                </CardHeader>
                <CardContent>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/"> Home </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/components"> Components </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </CardContent>
            </Card>
            <Card class="flex flex-col gap-y-4 h-fit">
                <CardHeader>
                    <CardTitle>Input</CardTitle>
                    <CardDescription>Input Component</CardDescription>
                </CardHeader>
                <CardContent class="flex flex-col gap-y-4">
                    <GLabel>Label</GLabel>
                    <GInput auto-caps id="text" type="text" placeholder="text" />
                    <GInput id="text" type="text" placeholder="text" disabled />
                    <GInput id="file" type="file" placeholder="file" />
                    <GInput id="email" type="email" placeholder="email" />
                    <GInput placeholder="Masukkan teks...">
                        <template #prefix>
                            <GIcon :icon="GIconInfo" class="w-[24px] text-black-600" />
                        </template>
                        <template #suffix>
                            <GButton variant="link">Go</GButton>
                        </template>
                    </GInput>

                    <InputRupiah v-model="nominal" placeholder="Masukkan nominal..." />
                    <div>Nilai angka: {{ nominal }}</div>
                </CardContent>
            </Card>

            <Card class="flex flex-col gap-y-4 h-fit">
                <CardHeader>
                    <CardTitle>Checkbox</CardTitle>
                    <CardDescription>Checkbox Component</CardDescription>
                </CardHeader>
                <CardContent class="flex flex-col gap-y-4">
                    <GCheck v-model:model-value="selected" id="checkbox" name="checkbox" value="checkbox" disabled />
                    <GCheck v-model:model-value="selected" id="checkbox2" name="checkbox" value="checkbox" />
                    <GCheckBox v-model:model-value="selected" label="Checkbox Label" />
                    <GCheckBox v-model:model-value="selected" label="Checkbox Label" disabled />
                    {{ "Hasil: " + selected }}
                    <GSelect>
                        <GSelectTrigger>
                            <GSelectValue placeholder="Pilih sesuatu..." />
                        </GSelectTrigger>
                        <GSelectContent>
                            <GSelectItem value="1">Satu</GSelectItem>
                            <GSelectItem value="2">Dua</GSelectItem>
                        </GSelectContent>
                    </GSelect>
                </CardContent>
            </Card>

            <Card class="flex flex-col gap-y-4 h-fit">
                <CardHeader>
                    <CardTitle>Radio</CardTitle>
                    <CardDescription>Radio Component</CardDescription>
                </CardHeader>
                <CardContent class="flex flex-col gap-y-4">
                    <RadioGroupRoot orientation="horizontal" class="group flex flex-col gap-2.5" :default-value="RadioBoxChoosenValue" aria-label="View density" v-model="RadioBoxChoosenValue">
                        <GRadio id="r1" :value="RadioBoxValue[0]"></GRadio>
                        <GRadio id="r2" :value="RadioBoxValue[1]" disabled></GRadio>
                        <GRadio id="r3" :value="RadioBoxValue[2]"></GRadio>
                    </RadioGroupRoot>

                    <RadioGroupRoot class="group flex flex-col gap-2.5" :default-value="RadioBoxChoosenValue" aria-label="View density" v-model="RadioBoxChoosenValue">
                        <GRadioBox id="r3" :value="RadioBoxValue[0]" :label="RadioBoxValue[0]" disabled>
                            <template #iconItem> 🍌 </template>
                            <template #textItem>{{ RadioBoxValue[0] }}</template>
                        </GRadioBox>
                        <GRadioBox id="r4" :value="RadioBoxValue[1]" :label="RadioBoxValue[1]">
                            <template #iconItem> 🥭 </template>
                            <template #textItem>{{ RadioBoxValue[1] }}</template>
                        </GRadioBox>
                        <GRadioBox :label="RadioBoxValue[2]" id="r5" :value="RadioBoxValue[2]">
                            <template #iconItem> 🍎 </template>
                            <template #textItem>
                                {{ RadioBoxValue[2] }}
                            </template>
                        </GRadioBox>
                    </RadioGroupRoot>

                    <a>{{ RadioBoxChoosenValue }}</a>
                </CardContent>
            </Card>

            <div class="flex flex-col gap-y-4 h-fit">
                <Card class="flex flex-col gap-y-4 h-fit">
                    <CardHeader>
                        <CardTitle>Add Amount</CardTitle>
                        <CardDescription>Add Amount Component</CardDescription>
                    </CardHeader>
                    <CardContent class="flex flex-col gap-y-4">
                        <GAddAmountCounter />
                        <GAddAmountItem label="Saham" />
                    </CardContent>
                </Card>

                <Card class="flex flex-col gap-y-4 h-fit">
                    <CardHeader>
                        <CardTitle>Switch</CardTitle>
                        <CardDescription>Switch Component</CardDescription>
                    </CardHeader>
                    <CardContent class="flex flex-col gap-y-4">
                        <Switch v-model="switchValue" />
                        {{ switchValue }}
                    </CardContent>
                </Card>
            </div>

            <Card class="flex flex-col gap-y-4 h-fit">
                <CardHeader>
                    <CardTitle>List</CardTitle>
                    <CardDescription>Ordered & Unordered List</CardDescription>
                </CardHeader>
                <CardContent class="grid grid-cols-2 gap-y-4">
                    <ListGroup type="ordered">
                        <ListItem :index="index" v-for="(item, index) in itemsLabel" :key="index">
                            {{ item }}
                        </ListItem>
                    </ListGroup>

                    <ListGroup type="unordered">
                        <ListItem :index="index" v-for="(item, index) in itemsLabel" :key="index">
                            {{ item }}
                        </ListItem>
                    </ListGroup>

                    <ListGroup>
                        <div v-for="(item, index) in itemsLabel" :key="index">
                            <ListItem v-if="index < 2" :index="index">
                                <template #customIcon>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.4219 5.61269L20.2831 5.477C19.519 4.7986 18.3925 4.84383 17.6767 5.61269L9.65023 14.2353L6.32326 10.6612C5.56281 9.84431 4.33855 9.84431 3.57811 10.6612C2.8073 11.4893 2.8073 12.8393 3.57811 13.6674L7.75548 18.155C8.80431 19.2817 10.4961 19.2817 11.545 18.155L20.4219 8.61882C21.1445 7.84253 21.1897 6.60745 20.5574 5.77381L20.4219 5.61269Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </template>
                                {{ item }}
                            </ListItem>

                            <ListItem v-if="index === 2" :index="index">
                                <template #customIcon>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M17.0219 6.27576C17.4969 5.88357 18.2013 5.90971 18.6458 6.3542C19.1181 6.82646 19.1181 7.59215 18.6458 8.06441L14.2102 12.5L18.6458 16.9356C19.1181 17.4079 19.1181 18.1735 18.6458 18.6458C18.2013 19.0903 17.4969 19.1164 17.0219 18.7242L16.9356 18.6458L12.5 14.2102L8.06441 18.6458L7.97814 18.7242C7.50308 19.1164 6.79868 19.0903 6.3542 18.6458C5.88193 18.1735 5.88193 17.4079 6.3542 16.9356L10.7898 12.5L6.3542 8.06441C5.88193 7.59215 5.88193 6.82646 6.3542 6.3542C6.79868 5.90971 7.50308 5.88357 7.97814 6.27576L8.06441 6.3542L12.5 10.7898L16.9356 6.3542L17.0219 6.27576Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </template>
                                {{ item }}
                            </ListItem>
                        </div>
                    </ListGroup>
                </CardContent>
            </Card>

            <div class="flex flex-col gap-y-4 h-fit">
                <Card class="flex flex-col gap-y-4 h-fit">
                    <CardHeader>
                        <CardTitle>Tooltip</CardTitle>
                        <CardDescription>Tooltip Component</CardDescription>
                    </CardHeader>
                    <CardContent class="flex flex-col gap-y-4">
                        <div class="inline-flex gap-1 text-sigma font-bold">
                            Title
                            <TooltipGroup :delay-duration="200" disableClosingTrigger>
                                <TooltipTrigger>
                                    <GIcon :icon="GIconInfo" class="w-[18px] text-black-600" />
                                </TooltipTrigger>
                                <TooltipContent> Harga saat Pegadaian membeli emas kamu, atau yang kamu terima saat menjual emas. Harga dapat berubah sewaktu-waktu. </TooltipContent>
                            </TooltipGroup>
                        </div>
                    </CardContent>
                </Card>
                <Card class="flex flex-col gap-y-4 h-fit">
                    <CardHeader>
                        <CardTitle>Hover Card</CardTitle>
                        <CardDescription>Hover Card</CardDescription>
                    </CardHeader>
                    <CardContent class="flex flex-col gap-y-4">
                        <div class="inline-flex gap-1 text-sigma font-bold">
                            <CardHoverGroup>
                                <CardHoverTrigger class="w-fit cursor-pointer rounded-full outline-none focus:shadow-[0_0_0_2px] focus:shadow-green8 shadow-sm">
                                    <img
                                        class="h-[45px] w-[45px] rounded-full object-cover"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Joko_Widodo_2019_official_portrait.jpg/250px-Joko_Widodo_2019_official_portrait.jpg"
                                        alt="Joko Widodo"
                                    />
                                </CardHoverTrigger>
                                <CardHoverContent avoidCollisions side="top" :rounded="true" class="w-80">
                                    <div class="flex items-center flex-col gap-y-3">
                                        <img
                                            class="w-24 rounded-full object-cover"
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Joko_Widodo_2019_official_portrait.jpg/250px-Joko_Widodo_2019_official_portrait.jpg"
                                            alt="Joko Widodo"
                                        />
                                        <div class="flex flex-col items-center gap-y-0">
                                            <h3 class="text-lg font-bold">Joko Widodo</h3>
                                            <p class="text-sm text-muted-foreground">Presiden Ke-7 Republik Indonesia</p>
                                        </div>
                                    </div>
                                </CardHoverContent>
                            </CardHoverGroup>
                        </div>
                    </CardContent>
                </Card>
                <Card class="flex flex-col gap-y-4 h-fit">
                    <CardHeader>
                        <CardTitle>Combobox / Dropdown</CardTitle>
                        <CardDescription>Combobox / Dropdown Component</CardDescription>
                    </CardHeader>
                    <CardContent class="flex flex-col gap-y-4">
                        <ComboboxComponent v-model="selected" :options="options" placeholder="Pilih Data Testing" />
                        <p>{{ selected }}</p>
                    </CardContent>
                </Card>
                <Card class="flex flex-col gap-y-4 h-fit">
                    <CardHeader>
                        <CardTitle>Progress</CardTitle>
                        <CardDescription>Progress Component</CardDescription>
                    </CardHeader>
                    <CardContent class="flex flex-col gap-y-4">
                        <GInput v-model="progressNumber" id="number" type="number" placeholder="Masukkan Presentase Progress" />
                        <Progress :max="300" class="bg-black-400" v-model="progressNumber" :getValueLabel="(value) => `${value}% selesai`" :getValueText="(value, max) => `${value} MB dari ${max} MB`"></Progress>
                        <p class="text-sm text-gray-600">
                            {{ `${progressNumber}% selesai` }}
                        </p>
                        <p class="text-xs text-gray-400">
                            {{ `${progressNumber} MB dari 100 MB` }}
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Card class="flex flex-col gap-y-4 h-fit">
                <CardHeader>
                    <CardTitle>Text Area</CardTitle>
                    <CardDescription>Text Area Component</CardDescription>
                </CardHeader>
                <CardContent class="flex flex-col gap-y-4">
                    <div class="text-black-500 text-sigma">Without Max Length</div>
                    <GTextarea v-model="textAreaModel" placeholder="Masukkkan komentar Anda" />
                    <div class="text-black-500 text-sigma">With Max Length</div>
                    <GTextarea v-model="textAreaModel" :has-max-length="true" :maxlength="500" placeholder="Masukkkan komentar Anda" />
                    {{ textAreaModel.length }}
                </CardContent>
            </Card>

            <Card class="flex flex-col gap-y-4 h-fit">
                <CardHeader>
                    <CardTitle>Tab</CardTitle>
                    <CardDescription>Tab Component</CardDescription>
                </CardHeader>
                <CardContent class="flex flex-col gap-y-4">
                    <TabGroup>
                        <TabTriggerGroup>
                            <TabTrigger value="tab1"> Tab1 </TabTrigger>
                            <TabTrigger value="tab2"> Tab2 </TabTrigger>
                            <TabTrigger value="tab3"> Tab3 </TabTrigger>
                        </TabTriggerGroup>
                        <div class="p-4">
                            <TabContent value="tab1">Ini adalah Tab 1</TabContent>
                            <TabContent value="tab2">Ini adalah Tab 2</TabContent>
                            <TabContent value="tab3">Ini adalah Tab 3</TabContent>
                        </div>
                    </TabGroup>
                </CardContent>
            </Card>

            <Card class="flex flex-col gap-y-4 h-fit">
                <CardHeader>
                    <CardTitle>Toggle & Toggle Group</CardTitle>
                    <CardDescription>Toggle & Toggle Group Component</CardDescription>
                </CardHeader>
                <CardContent class="flex flex-row gap-8">
                    <div class="flex flex-col gap-3">
                        <Toggle v-model="toggleIsActive">
                            <GIcon :icon="GIconDelete" />
                        </Toggle>
                        {{ toggleIsActive }}
                    </div>
                    <div class="flex flex-col gap-3">
                        <ToggleGroup type="single" v-model="toggleGroupActive">
                            <ToggleGroupItem value="left">
                                <GIcon :icon="GIconEye" />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="center">
                                <GIcon :icon="GIconEdit" />
                            </ToggleGroupItem>
                            <ToggleGroupItem value="right">
                                <GIcon :icon="GIconDelete" />
                            </ToggleGroupItem>
                        </ToggleGroup>
                        {{ toggleGroupActive }}
                    </div>
                    <div class="flex flex-col gap-3">
                        <ToggleGroup type="multiple" v-model="toggleGroupNumberActive">
                            <ToggleGroupItem value="1"> 1 </ToggleGroupItem>
                            <ToggleGroupItem value="2"> 2 </ToggleGroupItem>
                            <ToggleGroupItem value="3"> 3 </ToggleGroupItem>
                        </ToggleGroup>
                        {{ toggleGroupNumberActive }}
                    </div>
                </CardContent>
            </Card>

            <Card class="flex flex-col gap-y-4 h-fit">
                <CardHeader>
                    <CardTitle>Chips</CardTitle>
                    <CardDescription>Chips Component</CardDescription>
                </CardHeader>
                <CardContent class="flex flex-col gap-8">
                    <div class="flex flex-col gap-3">
                        <ChipsGroup type="single" v-model="singleChipsActive">
                            <ChipsGroupItem value="gadai"> Gadai </ChipsGroupItem>
                            <ChipsGroupItem value="cicilan"> Cicilan </ChipsGroupItem>
                            <ChipsGroupItem value="pembiayaan"> Pembiayaan </ChipsGroupItem>
                            <ChipsGroupItem value="transaksi"> Transaksi </ChipsGroupItem>
                        </ChipsGroup>
                        {{ singleChipsActive }}
                    </div>
                    <div class="flex flex-col gap-3">
                        <ChipsGroup type="multiple" v-model="multipleChipspActive">
                            <ChipsGroupItem value="gadai"> Gadai </ChipsGroupItem>
                            <ChipsGroupItem value="cicilan"> Cicilan </ChipsGroupItem>
                            <ChipsGroupItem value="pembiayaan"> Pembiayaan </ChipsGroupItem>
                            <ChipsGroupItem value="transaksi"> Transaksi </ChipsGroupItem>
                        </ChipsGroup>
                        {{ multipleChipspActive }}
                    </div>
                </CardContent>
            </Card>

            <Card class="flex flex-col gap-y-4 h-fit">
                <CardHeader>
                    <CardTitle>Toast</CardTitle>
                    <CardDescription>Toast Component</CardDescription>
                </CardHeader>
                <CardContent class="flex flex-row gap-8">
                    <ToastGroup variant="error" v-model:open="isToastOpen">
                        <template #triggerToast>
                            <GButton variant="primary" size="md" @click="() => (isToastOpen = true)"> Open Toast </GButton>
                        </template>
                        <ToastTitle>Title</ToastTitle>
                        <ToastDescription>Lorem Ipsum Dolor Sit Amet</ToastDescription>
                    </ToastGroup>
                </CardContent>
            </Card>

            <Card class="flex flex-col gap-y-4 h-fit">
                <CardHeader>
                    <CardTitle>Date Range Picker</CardTitle>
                    <CardDescription>Date Range Picker Component</CardDescription>
                </CardHeader>
                <CardContent class="flex flex-col gap-8">
                    <RangePicker v-model:start="startDate" v-model:end="endDate" startPlaceholder="Tanggal Mulai" endPlaceholder="Tanggal Akhir" calendarPositionY="top" />

                    <RangePicker v-model:start="startDate" v-model:end="endDate" :min="minDate" :max="maxDate" startPlaceholder="Tanggal Mulai" endPlaceholder="Tanggal Akhir" />

                    <DateRangePicker v-model:start="startDates" v-model:end="endDates" :min="minDate" :max="maxDate" startPlaceholder="Tanggal Mulai" endPlaceholder="Tanggal Akhir" :options="options" position="bottom" />
                    <div class="mt-4">
                        <div>Start: {{ startDates }}</div>
                        <div>End: {{ endDates }}</div>
                    </div>

                    <p>asd</p>
                    <TestDateRange />
                </CardContent>
            </Card>

            <Card class="flex flex-col gap-y-4 h-fit">
                <CardHeader>
                    <CardTitle>Stepper</CardTitle>
                    <CardDescription>Stepper Component</CardDescription>
                </CardHeader>
                <CardContent class="flex flex-col gap-8">
                    <StepperComponent />
                </CardContent>
            </Card>

            <Card class="flex flex-col gap-y-4 h-fit">
                <CardHeader>
                    <CardTitle>File Picker</CardTitle>
                    <CardDescription>File Picker Component</CardDescription>
                </CardHeader>
                <CardContent class="flex flex-col gap-8">
                    <FilePicker uniqueKey="file-picker-1" />
                    <FilePicker
                        :file="file"
                        :imageOnly="false"
                        errorText="File terlalu besar, maksimal 1 MB."
                        uniqueKey="profile-photo"
                        helperText="Maksimal ukuran file 1 MB."
                        @fileDropped="onFileDropped"
                        @fileRemoved="onFileRemoved"
                        @showUrlData="onShowUrlData"
                    />
                    <FilePicker
                        :file="file"
                        :imageOnly="false"
                        small
                        errorText="File terlalu besar, maksimal 1 MB."
                        uniqueKey="profile-photo"
                        helperText="Maksimal ukuran file 1 MB."
                        @fileDropped="onFileDropped"
                        @fileRemoved="onFileRemoved"
                        @showUrlData="onShowUrlData"
                    />
                </CardContent>
            </Card>
        </div>

        <Card class="flex flex-col gap-y-4 h-fit w-full">
            <CardHeader>
                <CardTitle>Carousel</CardTitle>
                <CardDescription>Carousel Component</CardDescription>
            </CardHeader>
            <CardContent class="flex flex-col gap-y-4">
                <Carousel variant="both" :autoplay="true" :interval="3000" />
            </CardContent>
        </Card>

        <Card class="flex flex-col gap-y-4 h-fit">
            <CardHeader>
                <CardTitle>Table</CardTitle>
                <CardDescription>Table & DataTable Component</CardDescription>
            </CardHeader>
            <CardContent class="flex flex-col gap-8 overflow-x-auto">
                <TableBasic table-width="fixed" :data="tableData" :columns="tableColumns">
                    <template #tableAction="">
                        <div class="flex gap-2">
                            <GButton variant="neutral" size="sm"> Hapus </GButton>
                            <GButton variant="secondary" size="sm"> Lihat Detail </GButton>
                        </div>
                    </template>
                </TableBasic>
            </CardContent>
        </Card>

        <Card class="flex flex-col gap-y-4 h-fit">
            <CardHeader>
                <CardTitle>Table</CardTitle>
                <CardDescription>Table & DataTable Component</CardDescription>
            </CardHeader>
            <CardContent class="flex flex-col gap-8">
                <DataTable :data="tableDatas" :columns="tableColumnss" leftContent="name" rightContent="city">
                    <template #tableActionButtons>
                        <div class="flex gap-2">
                            <GButton class="min-[560px]:w-fit w-full" variant="neutral" size="sm"> Hapus </GButton>
                            <GButton class="min-[560px]:w-fit w-full" variant="secondary" size="sm"> Lihat Detail </GButton>
                        </div>
                    </template>
                </DataTable>
            </CardContent>
        </Card>

        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
            <Card class="flex flex-col gap-y-4 h-fit">
                <CardHeader>
                    <CardTitle>DataTable Pagination</CardTitle>
                    <CardDescription>DataTable Pagination Component</CardDescription>
                </CardHeader>
                <CardContent class="flex flex-col gap-8">
                    <DataTablePagination v-model:page="currentPage" :total="100" :sibling-count="1" :items-per-page="10" show-edges :default-page="1" />
                    <p>Current Page: {{ currentPage }}</p>
                </CardContent>
            </Card>
            <Card class="flex flex-col gap-y-4 h-fit">
                <CardHeader>
                    <CardTitle>Tags Input</CardTitle>
                    <CardDescription>Tags Input Component</CardDescription>
                </CardHeader>
                <CardContent class="flex flex-col gap-8">
                    <TagsInput v-model="modelValue">
                        <TagsInputItem v-for="item in modelValue" :key="item" :value="item">
                            <TagsInputItemText />
                            <TagsInputItemDelete />
                        </TagsInputItem>

                        <TagsInputInput placeholder="Fruits..." />
                    </TagsInput>
                </CardContent>
            </Card>

            <Card class="flex flex-col gap-y-4 h-fit">
                <CardHeader>
                    <CardTitle>Popover</CardTitle>
                    <CardDescription>Popover Component</CardDescription>
                </CardHeader>
                <CardContent class="flex flex-col gap-8">
                    <Popover>
                        <PopoverTrigger>
                            <GButton variant="neutral" class="w-10 rounded-full">:</GButton>
                        </PopoverTrigger>
                        <PopoverContent class="flex flex-col gap-y-4">
                            <GInput id="text" type="text" placeholder="text" />
                            <InputRupiah v-model="nominal" placeholder="Masukkan nominal..." />
                            <GTextarea placeholder="Masukkan komentar Anda" />
                        </PopoverContent>
                    </Popover>
                </CardContent>
            </Card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import {
    ChipsGroup,
    ChipsGroupItem,
    DataTable,
    DataTablePagination,
    GTextarea,
    ListGroup,
    ListItem,
    Progress,
    Switch,
    TabContent,
    TabGroup,
    TableBasic,
    TabTrigger,
    TabTriggerGroup,
    ToastDescription,
    ToastGroup,
    ToastTitle,
    Toggle,
    ToggleGroup,
    ToggleGroupItem,
    TooltipContent,
    TooltipGroup,
    TooltipTrigger,
} from "./index"
import { GRadio, GRadioBox } from "./index"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./index"
import { Alert, AlertDescription, AlertTitle } from "./index"
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, CardHoverGroup, CardHoverContent, CardHoverTrigger } from "./index"
import { AspectRatio } from "./index"
import { Avatar, AvatarFallback, AvatarImage } from "./index"
import { Badge } from "./index"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./index"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./index"
import { GButton } from "./index"
import { GCheck, GCheckBox } from "./index"
import { GInput } from "./index"
import { GLabel } from "./index"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "./index"
import { GAddAmountCounter } from "./index"
import { GAddAmountItem } from "./index"
import { GIconCross, GIconDelete, GIconEdit, GIconEye, GIconInfo } from "@pegadaian/gwind-ic/src/assets/IconsSource"
import { GIcon } from "@pegadaian/gwind-ic/src/"
import ComboboxComponent from "./components/combobox/ComboboxComponent.vue"
import { Datepicker } from "./index"
import { RadioGroupRoot } from "reka-ui"
import { Carousel } from "./index"
import RangePicker from "./components/date-range-picker/RangePicker.vue"
import DateRangePicker from "./components/date-range-picker/DateRangePicker.vue"
import StepperComponent from "./components/stepper/StepperComponent.vue"
import FilePicker from "./components/file-picker/FilePicker.vue"

const open = ref(false)
const selected = ref(null)
const tanggal = ref("")

const startDate = ref("")
const endDate = ref("")

const startDates = ref("")
const endDates = ref("")

const minDate = ref("")
const maxDate = ref("")

const isToastOpen = ref(false)

const modelValue = ref(["Apple", "Banana"])

const currentPage = ref(3)

const options = [
    { value: "nextjs", label: "Next.js" },
    { value: "nuxt", label: "Nuxt" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
]

const items = ref([
    { label: "Item 1", value: "item-1" },
    { label: "Item 2", value: "item-2" },
    { label: "Item 3", value: "item-3" },
])

const toggleIsActive = ref(false)
const toggleGroupActive = ref("")
const toggleGroupNumberActive = ref("")

const singleChipsActive = ref("")
const multipleChipspActive = ref("")

const itemsLabel = items.value.map(n => n.label)
const RadioBoxValue = ref(["Pisang", "Mangga", "Apel"])
const RadioBoxChoosenValue = ref("Mangga")

const badgeOpen = ref(true)
const switchValue = ref(false)
const progressNumber = ref(0)

const nominal = ref<number | null>(null)

const file = ref<File | string | undefined>(undefined)

function onFileDropped(newFile: File) {
    file.value = newFile
    // handle file
}
function onFileRemoved() {
    file.value = undefined
    // handle remove
}
function onShowUrlData() {
    // handle preview url
}

const textAreaModel = ref("")

function openDialog() {
    open.value = true
}

function closeDialog() {
    open.value = false
}

const tableData = [
    {
        id: 1,
        name: "Jane Doe",
        age: 25,
        ages: 123,
        penghasilan: 23333333,
        address: "Yogyakarta",
    },
    {
        id: 2,
        name: "John Doe",
        age: 30,
        ages: 123,
        penghasilan: 888888,
        address: "Kediri",
    },

    {
        id: 3,
        name: "Jane Doe",
        age: 25,
        ages: 123,
        penghasilan: 9999999,
        address: "Bandung",
    },
    {
        id: 4,
        name: "Jane Doe",
        age: 25,
        ages: 123,
        penghasilan: 100000,
        address: "Surabaya",
    },
    {
        id: 5,
        name: "Bane Doe",
        address: "Medan",
        age: 25,
        ages: 123,
        penghasilan: 2000,
    },
    {
        id: 6,
        name: "Jane Doe",
        age: 25,
        ages: 123,
        penghasilan: 10000000,
        address: "Aceh",
    },
    {
        id: 7,
        name: "Aane Doe",
        age: 25,
        ages: 123,
        penghasilan: 20000000,
        address: "Jakarta",
    },
]

const tableColumns = [
    {
        key: "id",
        label: "ID",
        isAction: false,
        align: `center`,
    },
    {
        key: "name",
        label: "Name",
        isAction: false,
        sortable: true,
    },
    {
        key: "age",
        label: "Age",
        isAction: false,
    },
    {
        key: "ages",
        label: "Ages",
        isAction: false,
    },
    {
        key: "penghasilan",
        label: "Penghasilan",
        isAction: false,
        sortable: true,
        align: `right`,
        fit: true,
    },
    {
        key: "address",
        label: "Address",
        isAction: false,
    },
    {
        key: "actions",
        label: "Actions",
        isAction: true,
        align: `center`,
    },
]

const tableDatas = [
    {
        id: 1,
        name: "John Doe",
        city: "New York",
        occupation: "Software Engineer",
        salary: 80000,
    },
    {
        id: 2,
        name: "Jane Smith",
        city: "Angeles",
        occupation: "Data Scientist",
        salary: 95000,
    },
    {
        id: 3,
        name: "Bob Johnson",
        city: "Chicago",
        occupation: "Graphic Designer",
        salary: 60000,
    },
    {
        id: 4,
        name: "Alice Williams",
        city: "Francisco",
        occupation: "UX Designer",
        salary: 85000,
    },
    {
        id: 5,
        name: "Charlie Brown",
        city: "Seattle",
        occupation: "Marketing Manager",
        salary: 90000,
    },
    {
        id: 6,
        name: "Eva Davis",
        city: "Miami",
        occupation: "Financial Analyst",
        salary: 75000,
    },
    {
        id: 7,
        name: "Daniel Miller",
        city: "Denver",
        occupation: "Product Manager",
        salary: 100000,
    },
    {
        id: 8,
        name: "Grace Wilson",
        city: "Austin",
        occupation: "HR Specialist",
        salary: 70000,
    },
    {
        id: 9,
        name: "Henry Jackson",
        city: "Boston",
        occupation: "Business Analyst",
        salary: 82000,
    },
    {
        id: 10,
        name: "Isabel White",
        city: "Portland",
        occupation: "Project Coordinator",
        salary: 65000,
    },
    {
        id: 41,
        name: "Oliver Lee",
        city: "San Diego",
        occupation: "Software Developer",
        salary: 85000,
    },
    {
        id: 42,
        name: "Sophia Hall",
        city: "Phoenix",
        occupation: "Data Engineer",
        salary: 92000,
    },
    {
        id: 43,
        name: "Liam Turner",
        city: "Dallas",
        occupation: "UX/UI Designer",
        salary: 78000,
    },
    {
        id: 44,
        name: "Mia Foster",
        city: "Houston",
        occupation: "Sales Manager",
        salary: 88000,
    },
    {
        id: 45,
        name: "Lucas Murphy",
        city: "Philadelphia",
        occupation: "QA Engineer",
        salary: 80000,
    },
    {
        id: 46,
        name: "Ava Wright",
        city: "Detroit",
        occupation: "Marketing Specialist",
        salary: 76000,
    },
    {
        id: 47,
        name: "Jackson Evans",
        city: "Nashville",
        occupation: "Financial Analyst",
        salary: 84000,
    },
    {
        id: 48,
        name: "Ella Simmons",
        city: "Memphis",
        occupation: "Project Manager",
        salary: 93000,
    },
    {
        id: 49,
        name: "Logan Clark",
        city: "Baltimore",
        occupation: "IT Consultant",
        salary: 98000,
    },
    {
        id: 50,
        name: "Aria Allen",
        city: "Charlotte",
        occupation: "Product Designer",
        salary: 90000,
    },
]

const tableColumnss = [
    {
        data: "id",
        title: "ID",
        fit: true,
    },
    {
        data: "name",
        title: "Name",
    },
    {
        data: "city",
        title: "City",
    },
    {
        data: "occupation",
        title: "Occupation",
    },
    {
        data: "salary",
        title: "Salary",
    },
]
</script>

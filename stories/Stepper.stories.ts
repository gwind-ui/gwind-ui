import { GButton } from "../src/components/button"
import { Check, Circle, Dot } from "lucide-vue-next"
import { Stepper, StepperItem, StepperSeparator, StepperTrigger, StepperTitle, StepperDescription, StepperIndicator } from "../src/components/stepper"

export default {
    title: "Components/Stepper",
    component: Stepper,
    tags: ["autodocs"],
    argTypes: {},
    args: {
        steps: [
            {
                step: 1,
                title: "Your details",
                description: "Provide your name and email address. We will use this information to create your account",
            },
            {
                step: 2,
                title: "Company details",
                description: "A few details about your company will help us personalize your experience",
            },
            {
                step: 3,
                title: "Invite your team",
                description: "Start collaborating with your team by inviting them to join your account. You can skip this step and invite them later",
            },
            {
                step: 4,
                title: "Get started",
                description: "You are all set! Start using our platform to manage your projects and tasks",
            },
            {
                step: 5,
                title: "Complete",
                description: "You have completed the setup process. You can now start using our platform",
            },
        ],
        default: `
        <StepperItem v-for="step in args.steps" :key="step.step" v-slot="{ state }" class="relative flex w-full mobile:items-center md:items-start lg:items-start gap-4" :step="step.step">
            <StepperSeparator v-if="step.step !== args.steps[args.steps.length - 1].step" class="absolute left-[19px] top-[39px] block h-[105%] w-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary" />

            <StepperTrigger as-child>
                <StepperIndicator>
                    <GButton
                        :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'"
                        class="z-10 rounded-full shrink-0 w-10 h-10 p-2"
                        :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background', state === 'completed' && 'bg-primary']"
                    >
                        <Check v-if="state === 'completed'" class="text-white" />
                        <Circle v-if="state === 'active'" />
                        <Dot v-if="state === 'inactive'" />
                    </GButton>
                </StepperIndicator>
            </StepperTrigger>
            <div class="flex flex-col gap-1">
                <StepperTitle :class="[state === 'active' && 'text-primary']" class="transition lg:text-base">
                    {{ step.title }}
                </StepperTitle>
                <StepperDescription :class="[state === 'active' && 'text-primary']" class="sr-only transition md:not-sr-only lg:text-sm">
                    {{ step.description }}
                </StepperDescription>
            </div>
        </StepperItem>
        `,
    },
}

export const Default = {
    render: (args: { default: string }) => ({
        components: { Check, Circle, Dot, GButton, Stepper, StepperItem, StepperSeparator, StepperTrigger, StepperTitle, StepperDescription, StepperIndicator },
        setup() {
            return { args }
        },
        template: `
    <Stepper class="mx-auto flex flex-col w-full max-w-md justify-start gap-10">
        ${args.default}
    </Stepper>
    `,
    }),
}

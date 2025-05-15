<script lang="ts">
import { buttonVariants } from "../button/index";
import { cn } from "../../utils";
import LucideChevronRight from '~icons/lucide/chevron-right'
import { RangeCalendar as RangeCalendarPrimitive } from "bits-ui";

let {
	ref = $bindable(null),
	class: className,
	children,
	...restProps
}: RangeCalendarPrimitive.NextButtonProps = $props();
</script>

{#snippet Fallback()}
	<LucideChevronRight class="size-4" />
{/snippet}

<RangeCalendarPrimitive.NextButton
	bind:ref
	class={cn(
		buttonVariants({ variant: "outline" }),
		"size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
		className
	)}
	children={children || Fallback}
	{...restProps}
/>

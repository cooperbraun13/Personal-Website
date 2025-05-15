<script lang="ts">
import { buttonVariants } from "../button/index";
import { cn } from "../../utils";
import LucideChevronLeft from '~icons/lucide/chevron-left'
import { RangeCalendar as RangeCalendarPrimitive } from "bits-ui";

let {
	ref = $bindable(null),
	class: className,
	children,
	...restProps
}: RangeCalendarPrimitive.PrevButtonProps = $props();
</script>

{#snippet Fallback()}
	<LucideChevronLeft class="size-4" />
{/snippet}

<RangeCalendarPrimitive.PrevButton
	bind:ref
	class={cn(
		buttonVariants({ variant: "outline" }),
		"size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
		className
	)}
	children={children || Fallback}
	{...restProps}
/>

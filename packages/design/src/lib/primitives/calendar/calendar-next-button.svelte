<script lang="ts">
import { buttonVariants } from "../button/index";
import { cn } from "../../utils";
import LucideChevronRight from '~icons/lucide/chevron-right'
import { Calendar as CalendarPrimitive } from "bits-ui";

let {
	ref = $bindable(null),
	class: className,
	children,
	...restProps
}: CalendarPrimitive.PrevButtonProps = $props();
</script>

{#snippet Fallback()}
	<LucideChevronRight class="size-4" />
{/snippet}

<CalendarPrimitive.NextButton
	bind:ref
	class={cn(
		buttonVariants({ variant: "outline" }),
		"size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
		className
	)}
	children={children || Fallback}
	{...restProps}
/>

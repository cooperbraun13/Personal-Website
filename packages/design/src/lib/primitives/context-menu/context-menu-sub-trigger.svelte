<script lang="ts">
import { cn } from "../../utils";
import LucideChevronRight from '~icons/lucide/chevron-right'
import {
	ContextMenu as ContextMenuPrimitive,
	type WithoutChild,
} from "bits-ui";

let {
	ref = $bindable(null),
	class: className,
	inset,
	children,
	...restProps
}: WithoutChild<ContextMenuPrimitive.SubTriggerProps> & {
	inset?: boolean;
} = $props();
</script>

<ContextMenuPrimitive.SubTrigger
	bind:ref
	data-slot="context-menu-sub-trigger"
	data-inset={inset}
	class={cn(
		"data-highlighted:bg-accent data-highlighted:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground outline-hidden flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm data-[inset]:pl-8 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
		className
	)}
	{...restProps}
>
	{@render children?.()}
	<LucideChevronRight class="ml-auto" />
</ContextMenuPrimitive.SubTrigger>

<script lang="ts">
import { cn } from "../../utils";
import LucideChevronRight from '~icons/lucide/chevron-right'
import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";

let {
	ref = $bindable(null),
	class: className,
	inset,
	children,
	...restProps
}: DropdownMenuPrimitive.SubTriggerProps & {
	inset?: boolean;
} = $props();
</script>

<DropdownMenuPrimitive.SubTrigger
	bind:ref
	data-slot="dropdown-menu-sub-trigger"
	class={cn(
		"focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground outline-hidden flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm",
		inset && "pl-8",
		className
	)}
	{...restProps}
>
	{@render children?.()}
	<LucideChevronRight class="ml-auto size-4" />
</DropdownMenuPrimitive.SubTrigger>

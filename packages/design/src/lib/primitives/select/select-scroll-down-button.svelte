<script lang="ts">
import { cn } from "../../utils";
import LucideChevronDown from '~icons/lucide/chevron-down'
import {
	Select as SelectPrimitive,
	type WithoutChildrenOrChild,
} from "bits-ui";

let {
	ref = $bindable(null),
	class: className,
	...restProps
}: WithoutChildrenOrChild<SelectPrimitive.ScrollDownButtonProps> = $props();
</script>

<SelectPrimitive.ScrollDownButton
	bind:ref
	data-slot="select-scroll-up-button"
	class={cn("flex cursor-default items-center justify-center py-1", className)}
	{...restProps}
>
	<LucideChevronDown class="size-4" />
</SelectPrimitive.ScrollDownButton>

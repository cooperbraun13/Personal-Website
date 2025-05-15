<script lang="ts">
import { cn } from "../../utils";
import LucideChevronRight from '~icons/lucide/chevron-right'
import type { WithElementRef } from "bits-ui";
import type { HTMLLiAttributes } from "svelte/elements";

let {
	ref = $bindable(null),
	class: className,
	children,
	...restProps
}: WithElementRef<HTMLLiAttributes> = $props();
</script>

<li
	bind:this={ref}
	data-slot="breadcrumb-separator"
	role="presentation"
	aria-hidden="true"
	class={cn("[&>svg]:size-3.5", className)}
	{...restProps}
>
	{#if children}
		{@render children?.()}
	{:else}
		<LucideChevronRight />
	{/if}
</li>

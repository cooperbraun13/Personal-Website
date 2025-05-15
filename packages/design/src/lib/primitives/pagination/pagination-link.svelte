<script lang="ts">
import { type Props, buttonVariants } from "../button/index";
import { cn } from "../../utils";
import { Pagination as PaginationPrimitive } from "bits-ui";

let {
	ref = $bindable(null),
	class: className,
	size = "icon",
	isActive = false,
	page,
	children,
	...restProps
}: PaginationPrimitive.PageProps &
	Props & {
		isActive: boolean;
	} = $props();
</script>

{#snippet Fallback()}
	{page.value}
{/snippet}

<!-- TODO: Fix this error: Expression produces a union type that is too complex to represent. Note: Removing `Fallback` in children={children || Fallback} fixes, makes you wonder how/why `Fallback` is causing this. -->
<PaginationPrimitive.Page
	bind:ref
	{page}
	aria-current={isActive ? "page" : undefined}
	data-slot="pagination-link"
	data-active={isActive}
	class={cn(
		buttonVariants({
			variant: isActive ? "outline" : "ghost",
			size,
		}),
		className
	)}
	children={children || Fallback}
	{...restProps}
/>

<script lang="ts">
import { Button } from "../button/index";
import { cn } from "../../utils";
import LucidePanelLeftClose from '~icons/lucide/panel-left-close'
import type { ComponentProps } from "svelte";
import { useSidebar } from "./context.svelte.js";

let {
	ref = $bindable(null),
	class: className,
	onclick,
	...restProps
}: ComponentProps<typeof Button> & {
	onclick?: (e: MouseEvent) => void;
} = $props();

const sidebar = useSidebar();
</script>

<Button
	data-sidebar="trigger"
	data-slot="sidebar-trigger"
	variant="ghost"
	size="icon"
	class={cn("size-7", className)}
	type="button"
	onclick={(e: MouseEvent) => {
		onclick?.(e);
		sidebar.toggle();
	}}
	{...restProps}
>
	<LucidePanelLeftClose />
	<span class="sr-only">Toggle Sidebar</span>
</Button>

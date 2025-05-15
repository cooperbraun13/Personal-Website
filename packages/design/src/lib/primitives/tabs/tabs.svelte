<script lang="ts">
import { cn } from "../../utils";
import { Tabs as TabsPrimitive } from "bits-ui";

let {
	ref = $bindable(null),
	class: className,
	...restProps
}: TabsPrimitive.RootProps = $props();
</script>

<TabsPrimitive.Root
	bind:ref
	data-slot="tabs"
	class={cn("flex flex-col gap-2", className)}
	{...restProps}
/>

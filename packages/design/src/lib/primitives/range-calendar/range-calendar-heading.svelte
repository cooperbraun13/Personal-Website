<script lang="ts">
import { cn } from "../../utils";
import { RangeCalendar as RangeCalendarPrimitive } from "bits-ui";

let {
	ref = $bindable(null),
	class: className,
	...restProps
}: RangeCalendarPrimitive.HeadingProps = $props();
</script>

<RangeCalendarPrimitive.Heading
	bind:ref
	class={cn("text-sm font-medium", className)}
	{...restProps}
/>

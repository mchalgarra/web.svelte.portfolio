<script lang="ts">
	import type { Snippet } from 'svelte';

	interface IProps {
		children: Snippet;
		color?: string;
		alternative?: boolean;
	}

	const { children, color = 'var(--pfl-accent)', alternative = false }: IProps = $props();
</script>

<div
	class="flex items-center justify-center relative px-2 py-1.5 font-semibold text-sm"
	style="color: {color}"
>
	{@render children()}

	<div
		class="absolute h-full w-full rounded-xl {alternative
			? 'border-[1px] border-accent'
			: 'opacity-10'}"
		style="background-color: {alternative ? 'transparent' : color}"
	></div>
</div>

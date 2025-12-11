<script lang="ts">
	import type { Snippet } from 'svelte';

	interface IProps {
		children: Snippet;
		className?: string;
		color?: string;
		alternative?: boolean;
	}

	const { children, className = '', color = '', alternative = false }: IProps = $props();
</script>

<div
	class="flex items-center justify-center relative px-2 py-1.5 font-semibold text-sm {className}"
	style="color: {color}"
>
	{@render children()}

	<div
		class="absolute h-full w-full rounded-xl {alternative ? 'border-2' : 'opacity-10'}"
		style="background-color: {alternative ? 'transparent' : color}; border-color: {color}"
	></div>
</div>

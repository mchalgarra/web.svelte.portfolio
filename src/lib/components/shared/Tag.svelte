<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children, color = 'var(--pfl-accent)' }: { children: Snippet; color?: string } = $props();
</script>

<div
	class="flex items-center justify-center relative px-2 py-1.5 font-semibold text-sm"
	style="color: {color}"
>
	{@render children()}

	<div class="absolute h-full w-full rounded-xl opacity-10" style="background-color: {color}"></div>
</div>

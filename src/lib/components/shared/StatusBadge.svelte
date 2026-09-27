<script lang="ts">
	import type { Snippet } from 'svelte';

	interface IProps {
		children: Snippet;
		className?: string;
		pulse?: boolean;
	}

	const { children, className = '', pulse = false }: IProps = $props();
</script>

<span
	class="flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider {className}"
>
	<span class="relative flex size-1.5">
		{#if pulse}
			<span class="absolute inline-flex size-full rounded-full bg-current opacity-75 animate-ping"
			></span>
		{/if}
		<span class="relative inline-flex size-1.5 rounded-full bg-current"></span>
	</span>

	{@render children()}
</span>

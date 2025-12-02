<script lang="ts">
	import Angular from './Angular.svelte';
	import TypeScript from './TypeScript.svelte';
	import Ionic from './Ionic.svelte';
	import React from './React.svelte';
	import SCSS from './SCSS.svelte';
	import Tailwind from './Tailwind.svelte';

	interface IProps {
		name: string;
		className?: string;
	}

	let { name, className = '' }: IProps = $props();
</script>

{#if name === 'Angular'}
	<Angular {className} />
{:else if name === 'TypeScript'}
	<TypeScript {className} />
{:else if name === 'Ionic'}
	<Ionic {className} />
{:else if name === 'React'}
	<React {className} />
{:else if name === 'SCSS'}
	<SCSS {className} />
{:else if name === 'Tailwind CSS'}
	<Tailwind {className} />
{/if}

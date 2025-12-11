<script lang="ts">
	import Tag from '$lib/components/shared/Tag.svelte';
	import type { IWork } from '../../interfaces/work.interface';
	import Chevron from '../icons/Chevron.svelte';
	import Logo from '../icons/Logo.svelte';
	import Cadmus from '../logos/Cadmus.svelte';
	import Facens from '../logos/Facens.svelte';

	interface IProps {
		data: IWork;
		className?: string;
	}

	const { data, className = '' }: IProps = $props();
</script>

<div class="flex flex-col w-[30rem] max-w-full rounded-2xl bg-card/50 backdrop-blur-sm {className}">
	<div class="flex items-center justify-between w-full h-[21rem] p-3">
		<img src={data.image} alt={data.title} class="w-full h-full object-cover rounded-2xl" />
	</div>

	<div class="flex flex-1 flex-col w-full gap-4 p-5 pt-2 z-[1]">
		<h2 class="text-100 text-2xl max-xs:text-xl font-bold font-display w-full m-0">
			{data.title}
		</h2>

		<div class="flex flex-wrap gap-2 w-full">
			{#each data.tags as tag}
				<Tag color="var(--pfl-{data.color})">
					{tag}
				</Tag>
			{/each}
		</div>

		<p class="text-100 w-full">
			{@html data.description}
		</p>

		<div class="flex items-center justify-between w-full mt-auto">
			{#if !data.company}
				<div class="flex items-center gap-2">
					<div class="size-6">
						<Logo />
					</div>

					<b class="text-300">Personal</b>
				</div>
			{/if}

			{#if data.company === 'Cadmus'}
				<Cadmus
					className="text-300 h-4 w-fit"
					accentColor="var(--pfl-text-300)"
					shadowColor="transparent"
				/>
			{/if}

			{#if data.company === 'Facens'}
				<Facens className="text-300 h-5 w-fit" accentColor="var(--pfl-text-300)" />
			{/if}

			<a
				href={data.link}
				target="_blank"
				class="flex items-center gap-2 font-medium hover:translate-x-[0.25rem] transition-all text-right"
				style="color: var(--pfl-{data.color})"
			>
				{data.linkText ?? 'Visit'}
				<div class="size-4">
					<Chevron />
				</div>
			</a>
		</div>
	</div>
</div>

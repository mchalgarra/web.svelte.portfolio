<script lang="ts">
	import Tag from '$lib/components/shared/Tag.svelte';
	import type { IExperience } from '$lib/interfaces/experience.interface';

	interface IProps {
		data: IExperience;
	}

	const { data }: IProps = $props();
</script>

<div class="flex w-full gap-8 max-md:flex-col">
	<div
		class="relative w-64 flex items-start justify-end shrink-0 max-md:justify-center max-md:w-full"
	>
		<div
			class="flex items-center justify-end shrink-0 bg-accent rounded-full py-2 pl-3 pr-2 h-fit gap-2 max-md:px-3"
		>
			<span class="text-inverted uppercase font-bold">{data.startDate} – {data.endDate}</span>

			<div class="h-6 w-6 bg-accent rounded-full border-4 border-inverted max-md:hidden"></div>
		</div>

		<div class="absolute top-20 right-5 w-px h-[calc(100%-3rem)] bg-white/10 max-md:hidden"></div>
	</div>

	<div class="flex flex-col gap-4 pt-1 max-md:pt-0 max-md:px-4">
		<h2 class="text-100 font-bold text-2xl sm:text-3xl max-md:text-center">{data.title}</h2>

		<h3 class="text-100 font-medium text-lg sm:text-xl max-md:text-center">
			{data.company} ({data.type})
		</h3>

		<div class="flex flex-wrap gap-2 w-full max-md:justify-center">
			{#each data.tags as tag}
				<Tag color="var(--pfl-accent)">
					{tag}
				</Tag>
			{/each}
		</div>

		<ul class="text-100 sm:text-lg list-disc pl-4">
			{#each data.description as topic}
				<li>{@html topic}</li>
			{/each}
		</ul>
	</div>
</div>

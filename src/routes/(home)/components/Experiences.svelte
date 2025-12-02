<script lang="ts">
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import { EXPERIENCES } from '../constants/experiences.constant';
</script>

<div class="flex flex-col gap-16 pt-24 sm:pt-32">
	<h1 class="text-100 text-6xl font-bold text-center m-0">Experience</h1>

	<div class="flex flex-col gap-16 max-md:gap-12">
		{#each EXPERIENCES as exp, index}
			{#if index !== 0}
				<div class="w-4/5 mx-auto h-px bg-white/10 md:hidden"></div>
			{/if}
			<ExperienceCard data={exp}></ExperienceCard>
		{/each}
	</div>
</div>

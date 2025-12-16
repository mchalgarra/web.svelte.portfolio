<script lang="ts">
	import Blob2 from '../../../lib/components/blobs/Blob2.svelte';
	import SkillIcon from '../../../lib/components/skill-icons/SkillIcon.svelte';
	import { MAIN_SKILLS } from '../constants/skills.constant';
</script>

<div
	id="Skills"
	class="relative flex flex-col justify-center items-center gap-16 max-sm:gap-8 min-h-fit h-screen max-h-[1600px] w-full pt-12"
>
	<h1 class="text-100 text-6xl max-sm:text-4xl font-bold text-center m-0">Main Skills</h1>

	<div
		class="grid grid-cols-2 max-sm:gap-4 gap-12 sm:mt-8 items-center z-[1] max-w-3xl justify-center mx-auto"
	>
		{#each MAIN_SKILLS as skill}
			<div class="flex flex-col gap-4 w-full p-6 h-full">
				<SkillIcon name={skill.name} className="size-12 max-sm:size-8 shrink-0" />
				<h2 class="text-100 text-3xl max-sm:text-2xl font-semibold m-0">{skill.name}</h2>
				<p class="text-100 text-lg max-sm:text-base m-0">{skill.description}</p>
			</div>
		{/each}
	</div>

	<Blob2
		animate={true}
		className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
	/>
</div>

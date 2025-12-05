<script lang="ts">
	import { goto } from '$app/navigation';
	import { SECTIONS } from '../../constants/sections.constant';
	import type { ISection } from '../../interfaces/section.interface';
	import Github from '../icons/Github.svelte';
	import Linkedin from '../icons/Linkedin.svelte';
	import Logo from '../icons/Logo.svelte';
	import Mail from '../icons/Mail.svelte';
	import MemphiCircles from '../memphis/MemphiCircles.svelte';
	import MemphiDashedCircle from '../memphis/MemphiDashedCircle.svelte';
	import MemphiTriplePlus from '../memphis/MemphiTriplePlus.svelte';
	import { CurrentSection } from './current-section.svelte';

	const currentSection = new CurrentSection();

	const year = new Date().getFullYear();

	const links = [
		{
			key: 'linkedin',
			url: 'https://linkedin.com/in/mchalgarra'
		},
		{
			key: 'github',
			url: 'https://github.com/mchalgarra'
		}
	];

	function setSection(section: ISection) {
		currentSection.name = section.name;
		goto(`#${section.name}`);
	}
</script>

<div class="relative flex justify-center w-full">
	<div class="flex flex-col gap-8 w-full h-full max-w-[1240px] px-6 md:px-10 py-6">
		<div class="flex flex-col items-center justify-end gap-8 w-full">
			<div class="w-12 h-12">
				<Logo />
			</div>

			<div class="flex flex-wrap gap-3 justify-center">
				{#each SECTIONS as section}
					<button
						class="text-100 text-left hover:text-accent transition-all"
						onclick={() => setSection(section)}
					>
						{section.name}
					</button>
				{/each}
			</div>

			<div class="flex gap-3">
				<a
					href="mailto:michell.algarra@gmail.com"
					class="text-100 text-left text-sm hover:text-accent transition-all"
				>
					<Mail className="w-8 h-8 text-100 hover:text-accent transition-all" />
				</a>

				{#each links as link}
					<a
						href={link.url}
						target="_blank"
						class="text-100 text-left text-sm hover:text-accent transition-all"
					>
						{#if link.key === 'linkedin'}
							<Linkedin className="w-8 h-8 text-100 hover:text-accent transition-all" />
						{:else if link.key === 'github'}
							<Github className="w-8 h-8 text-100 hover:text-accent transition-all" />
						{/if}
					</a>
				{/each}
			</div>
		</div>

		<span class="text-200 text-center text-sm">© {year} Michell Algarra Barros</span>
	</div>

	<MemphiCircles className="-bottom-12 -left-32 xl:left-4 w-42 h-42 text-accent opacity-70" />

	<MemphiTriplePlus className="inverted bottom-8 -right-0 w-28 h-28 text-accent opacity-70" />
</div>

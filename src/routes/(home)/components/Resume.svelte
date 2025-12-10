<script lang="ts">
	import Blob1 from '../../../lib/components/blobs/Blob1.svelte';
	import MemphiCoin from '../../../lib/components/memphis/MemphiCoin.svelte';
	import MemphiTripleWaves from '../../../lib/components/memphis/MemphiTripleWaves.svelte';
	import Tag from '../../../lib/components/shared/Tag.svelte';

	const tags = ['Angular', 'React', 'TypeScript', 'Ionic', 'HTML', 'SCSS', 'UI/UX'];
</script>

<div
	id="Resume"
	class="relative flex flex-col justify-center items-center gap-32 max-sm:gap-8 h-screen max-h-[1600px] w-full pt-12 px-6"
>
	<h1 class="text-100 text-6xl max-sm:text-4xl font-bold text-center m-0">My Resume</h1>

	<div class="relative w-full overflow-visible">
		<Blob1
			className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-125 z-0 w-full"
		/>

		<MemphiCoin
			className="top-1/2 left-1/2 translate-x-[17rem] max-sm:translate-x-[10rem] -translate-y-[10rem] z-0 rotate-[30deg] h-[6rem] text-accent"
		/>

		<MemphiTripleWaves
			className="inverted top-2/3 left-1/2 -translate-x-[24rem] z-0 h-[4rem] text-accent"
		/>

		<div
			class="flex flex-col gap-2 w-full max-w-xl mx-auto bg-card/50 p-6 rounded-2xl z-[1] backdrop-blur-sm"
		>
			<h2 class="text-accent uppercase text-5xl max-sm:text-3xl font-bold m-0">Michell</h2>
			<h3 class="text-accent uppercase text-4xl max-sm:text-2xl font-semibold m-0">
				Algarra Barros
			</h3>

			<span class="text-light text-2xl max-sm:text-xl font-medium my-4"
				>Software Engineer @ Uber</span
			>

			<p class="text-100">
				Versatile software engineer with <b>4+</b> years of experience delivering high-impact solutions.
				Skilled in full-stack development, architecture design, and cross-functional collaboration, with
				a proven track in optimizing platform performance, driving revenue growth, and implementing scalable,
				maintainable systems.
			</p>

			<div class="flex flex-wrap gap-2 w-full mt-4">
				{#each tags as tag}
					<Tag color="var(--pfl-accent)">
						{tag}
					</Tag>
				{/each}
			</div>
		</div>
	</div>

	<a
		href="resume.pdf"
		download="Resume - Michell Algarra Barros (2025-12-04).pdf"
		target="_blank"
		class="text-accent font-bold text-xl text-center mx-auto hover:scale-105 active:text-light transition-all"
	>
		Download Resume (PDF)
	</a>
</div>

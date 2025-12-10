<script lang="ts">
	import Github from '../../../lib/components/icons/Github.svelte';
	import Linkedin from '../../../lib/components/icons/Linkedin.svelte';
	import MemphiDashedCircleGradient from '../../../lib/components/memphis/MemphiDashedCircleGradient.svelte';
	import MemphiSlashes from '../../../lib/components/memphis/MemphiSlashes.svelte';
	import MemphiTwoLineDots from '../../../lib/components/memphis/MemphiTwoLineDots.svelte';
</script>

<div
	id="Contact"
	class="relative flex flex-col justify-center items-center gap-32 max-sm:gap-8 h-screen max-h-[1600px] w-full pt-12 px-6"
>
	<h1 class="text-100 text-6xl max-sm:text-4xl font-bold text-center m-0">Let's talk</h1>

	<div class="relative flex items-center justify-center w-full p-6">
		<div
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-px bg-contactEmail z-[2] max-w-full"
		>
			<div class="flex items-center justify-center px-3 py-4 bg-primary w-full">
				<a
					href="mailto:michell.algarra@gmail.com"
					target="_blank"
					class="no-underline text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight text-5xl max-md:text-4xl max-sm:text-3xl max-xs:text-xl font-medium m-0 leading-[1.5] w-full"
				>
					michell.algarra@gmail.com
				</a>
			</div>
		</div>

		<MemphiDashedCircleGradient
			className="ignore-movement relative size-96 max-sm:size-72 max-xs:size-56"
		/>
	</div>

	<div class="flex flex-col gap-4 items-center">
		<span class="text-200 text-xl text-center">Or check me on</span>

		<div class="flex items-center gap-6">
			<a
				href="https://www.linkedin.com/in/mchalgarra"
				target="_blank"
				class="no-underline user-select-none"
			>
				<Linkedin className="size-8 text-200 hover:text-accent transition-all" />
			</a>

			<a href="https://github.com/mchalgarra" target="_blank" class="no-underline user-select-none">
				<Github className="size-8 text-200 hover:text-accent transition-all" />
			</a>
		</div>
	</div>

	<MemphiTwoLineDots
		className="top-80 left-24 max-sm:hidden max-md:left-8 size-36 rotate-90 text-primary opacity-50"
	/>
	<MemphiSlashes
		className="inverted bottom-24 right-16 max-sm:bottom-16 max-sm:size-32 max-sm:right-2 max-md:right-8 size-40 text-primary opacity-50"
	/>
</div>

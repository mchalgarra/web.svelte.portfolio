<script lang="ts">
	import StatusBadge from '$lib/components/shared/StatusBadge.svelte';
	import Tag from '$lib/components/shared/Tag.svelte';
	import Logo from '../icons/Logo.svelte';
	import CelebrioVector from '../work-vectors/CelebrioVector.svelte';

	const tags = [
		'Angular',
		'React',
		'Next.js',
		'TypeScript',
		'Tailwind CSS',
		'Framer Motion',
		'Notion'
	];
</script>

<div
	class="flex max-md:flex-col md:flex-row-reverse w-full max-md:w-[30rem] max-w-5xl max-md:max-w-full md:h-[30rem] rounded-2xl overflow-hidden"
>
	<div
		class="flex items-center justify-center relative w-full md:w-1/2 h-[30rem] max-xs:h-[20rem] z-0 overflow-hidden bg-celebrio"
	>
		<CelebrioVector
			className="absolute -bottom-[6rem] -left-[3rem] w-[calc(100%+6rem)] h-fit z-0"
		/>

		<div
			class="absolute top-[12%] left-[6%] w-[80%] rounded-xl overflow-hidden bg-white shadow-2xl z-[1]"
		>
			<div class="flex items-center gap-1.5 h-6 max-xs:h-4 px-3 max-xs:px-2 bg-celebrio3">
				<span class="size-2 max-xs:size-1.5 rounded-full bg-celebrio"></span>
				<span class="size-2 max-xs:size-1.5 rounded-full bg-[#F5AEAE]"></span>
				<span class="size-2 max-xs:size-1.5 rounded-full bg-[#F3E9DD]"></span>

				<span class="ml-2 w-1/2 h-3.5 max-xs:h-2.5 rounded-full bg-white"></span>
			</div>

			<img
				src="work/celebrio-desktop.jpg"
				alt="Celebrio budget page on desktop"
				class="w-full aspect-[1024/581] object-cover object-top"
			/>
		</div>

		<div
			class="absolute bottom-[7%] right-[6%] w-[29%] max-xs:w-[25%] aspect-[9/19.5] rounded-[1.4rem] max-xs:rounded-2xl border-[5px] max-xs:border-4 border-inverted bg-inverted overflow-hidden shadow-2xl z-[2]"
		>
			<img
				src="work/celebrio-mobile.jpg"
				alt="Celebrio budget page on mobile"
				class="w-full h-full object-cover object-top rounded-[1rem] max-xs:rounded-xl"
			/>
		</div>
	</div>

	<div
		class="flex flex-col w-full md:w-1/2 gap-3 max-md:gap-4 p-4 sm:p-6 md:pt-10 z-[1] bg-celebrio3"
	>
		<h2 class="text-inverted text-2xl max-xs:text-xl font-bold font-display w-full m-0">
			Celebrio
		</h2>

		<div class="flex flex-wrap gap-2 w-full">
			{#each tags as tag}
				<Tag color="var(--pfl-celebrio-2)" alternative>
					{tag}
				</Tag>
			{/each}
		</div>

		<p class="text-inverted text-lg w-full max-lg:text-base">
			Celebrio is a wedding planning platform that brings everything couples need into one place: a
			customizable wedding website with a gift registry, guest list and RSVP management, planning
			tasks, budget tracking, and a shared album where guests upload photos and videos via QR code.
		</p>

		<div class="flex items-center justify-between w-full mt-auto">
			<div class="flex items-center gap-2">
				<div class="size-6">
					<Logo />
				</div>

				<b class="text-celebrio2">Personal</b>
			</div>

			<StatusBadge className="bg-celebrio2 text-celebrio3" pulse>Coming soon</StatusBadge>
		</div>
	</div>
</div>

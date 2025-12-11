<script lang="ts">
	import MemphiCoin from '$lib/components/memphis/MemphiCoin.svelte';
	import MemphiTripleWaves from '$lib/components/memphis/MemphiTripleWaves.svelte';
	import Tag from '$lib/components/shared/Tag.svelte';
	import Blob3 from '../../../lib/components/blobs/Blob3.svelte';
	import MemphiTriplePlus from '../../../lib/components/memphis/MemphiTriplePlus.svelte';
	import MemphiTwoLineDots from '../../../lib/components/memphis/MemphiTwoLineDots.svelte';
	import MemphiTwoRects from '../../../lib/components/memphis/MemphiTwoRects.svelte';
	import { EXPERTISE } from '../constants/expertise.constant';
</script>

<div
	id="Expertise"
	class="relative flex flex-col justify-center items-center gap-32 max-sm:gap-8 max-lg:min-h-screen lg:h-screen lg:max-h-[1600px] w-full max-xs:pb-20 pt-20 lg:pt-12 px-6"
>
	<h1 class="text-100 text-6xl max-sm:text-4xl font-bold text-center m-0 z-[1]">My Expertise</h1>

	<div class="flex max-lg:flex-col items-center justify-center w-full xl:gap-12 lg:gap-6 z-[1]">
		{#each EXPERTISE as item, index}
			<div
				class="flex flex-col gap-3 lg:h-full max-sm:w-full max-lg:w-2/3 w-[25rem] backdrop-blur-sm {index ===
				1
					? 'bg-expertise'
					: 'bg-card/50'} p-6 rounded-2xl z-[1]"
			>
				<h3
					class="text-{index === 1
						? 'accent'
						: '100'} uppercase text-3xl max-sm:text-2xl font-semibold m-0"
				>
					{item.title}
				</h3>

				<div class="flex flex-wrap gap-2 w-full">
					{#each item.tags as tag}
						<Tag
							color={index === 1 ? 'var(--pfl-accent)' : 'var(--pfl-primary)'}
							alternative={index === 1}
						>
							{tag}
						</Tag>
					{/each}
				</div>

				<p class="text-100 leading-7">
					{@html item.description}
				</p>
			</div>

			<div class="{index === EXPERTISE.length - 1 ? 'h-12' : 'h-6'} w-px bg-accent lg:hidden"></div>
		{/each}
	</div>

	<div class="relative sm:-mt-20 lg:-mt-32 w-[25rem] max-lg:h-fit h-[10rem]">
		<div
			class="max-lg:hidden absolute h-[10rem] w-[12rem] border-b border-r border-accent rounded-br-2xl translate-x-[26.5rem] z-0"
		></div>

		<div
			class="max-lg:hidden absolute h-[10rem] w-[12rem] border-b border-l border-accent rounded-bl-2xl -translate-x-[13.5rem] z-0"
		></div>

		<span
			class="max-xs:hidden work-today absolute -bottom-3 left-1/2 -translate-x-1/2 text-accent max-md:text-xl text-2xl font-medium text-nowrap text-center"
		>
			work today, build tomorrow
		</span>

		<span
			class="xs:hidden work-today absolute top-0 left-1/2 -translate-x-1/2 text-accent max-md:text-xl text-2xl font-medium text-nowrap text-center"
		>
			work today<br />build tomorrow
		</span>
	</div>

	<Blob3
		className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] scale-[1.1] z-0 w-full"
	/>

	<MemphiTriplePlus
		className="top-1/2 right-[4rem] max-xs:right-1 max-sm:top-[14rem] max-lg:top-1/4 lg:-translate-y-[14.5rem] z-0 h-[10rem] text-primary opacity-50"
	/>

	<MemphiTwoRects
		className="inverted max-sm:top-1/2 top-2/3 left-0 max-sm:-left-6 max-lg:left-[6rem] max-sm:translate-y-[8rem] lg:-translate-y-[2.5rem] z-0 h-[6rem] text-accent opacity-50"
	/>

	<MemphiTwoLineDots
		className="sm:hidden bottom-32 -right-4 z-0 h-[1rem] text-primary opacity-50"
	/>
</div>

<style lang="scss">
	.work-today {
		text-shadow: 0 0 0.5rem #a6d59088;

		animation: work-today-pulse 1s ease-in-out infinite alternate;
	}

	@keyframes work-today-pulse {
		from {
			text-shadow: 0 0 0.5rem #a6d59088;
		}
		to {
			text-shadow: 0 0 1rem #a6d59088;
		}
	}
</style>

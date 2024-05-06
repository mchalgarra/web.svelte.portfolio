<script lang="ts">
	import { goto } from '$app/navigation';
	import { SECTIONS } from '../../constants/sections.constant';
	import type { ISection } from '../../interfaces/section.interface';
	import Chevron from '../icons/Chevron.svelte';
	import MemphiDashedCircle from '../memphis/MemphiDashedCircle.svelte';
	import MemphiTwoLineDots from '../memphis/MemphiTwoLineDots.svelte';
	import { CurrentSection } from './current-section.svelte';

	interface IProps {
		show: boolean;
		onclose: () => void;
	}

	const currentSection = new CurrentSection();

	let { show = false, onclose }: IProps = $props();

	let _drawer: HTMLDivElement;
	let _elements: HTMLElement[] = [];
	let _indicator: HTMLDivElement;
	let _span: HTMLSpanElement;

	let top = $state(0);

	$effect(() => {
		const index = SECTIONS.findIndex((section) => section.name === currentSection.name);
		const element = _elements[index];

		if (!element) return;

		top = element.offsetTop + element.offsetHeight / 2 - 12;
	});

	$effect(() => {
		if (show) {
			document.body.style.overflow = 'hidden';
			enterAnimation();
		} else {
			leaveAnimation();

			setTimeout(() => {
				if (!show) document.body.style.overflow = 'unset';
			}, 1000);
		}
	});

	function enterAnimation() {
		_drawer.animate([{ transform: 'translateY(-100%)' }, { transform: 'translateY(0)' }], {
			duration: 500,
			fill: 'forwards',
			easing: 'ease'
		});

		_elements.forEach((element, index) => {
			element.animate(
				[
					{ transform: 'translateY(-100%)', opacity: 0 },
					{ transform: 'translateY(0)', opacity: 1 }
				],
				{
					duration: 500,
					delay: index * 100 + 400,
					fill: 'forwards',
					easing: 'ease'
				}
			);
		});

		_indicator.animate(
			[
				{ transform: 'translateY(-100%)', opacity: 0 },
				{ transform: 'translateY(0)', opacity: 1 }
			],
			{
				duration: 500,
				delay: 800,
				fill: 'forwards',
				easing: 'ease'
			}
		);

		_span.animate(
			[
				{ transform: 'translate(-50%, 100%)', opacity: 0 },
				{ transform: 'translate(-50%, 0)', opacity: 1 }
			],
			{
				duration: 500,
				delay: 1000,
				fill: 'forwards',
				easing: 'ease'
			}
		);
	}

	function leaveAnimation() {
		_indicator.animate([{ opacity: 1 }, { opacity: 0 }], {
			duration: 400,
			fill: 'forwards',
			easing: 'ease'
		});

		_span.animate(
			[
				{ transform: 'translate(-50%, 0)', opacity: 1 },
				{ transform: 'translate(-50%, 100%)', opacity: 0 }
			],
			{
				duration: 200,
				fill: 'forwards',
				easing: 'ease'
			}
		);

		_elements.forEach((element, index) => {
			const odd = index % 2;

			element.animate(
				[
					{ transform: 'translateX(0)', opacity: 1 },
					{ transform: `translateX(${!odd ? '-' : ''}25%)`, opacity: 0 }
				],
				{
					duration: 300,
					delay: index * 100 + 200,
					fill: 'forwards',
					easing: 'ease'
				}
			);
		});

		_drawer.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-100%)' }], {
			duration: 300,
			delay: 800,
			fill: 'forwards',
			easing: 'ease'
		});
	}

	function setSection(section: ISection) {
		currentSection.name = section.name;
		goto(`#${section.name}`);

		onclose();
	}
</script>

<div
	bind:this={_drawer}
	class:visible={show}
	class="drawer fixed w-screen h-screen bg-drawer overflow-hidden z-10"
>
	<div class="content relative flex flex-col justify-center items-center gap-6 w-full h-full p-6">
		{#each SECTIONS as section, index (section.name)}
			<button
				bind:this={_elements[index]}
				class:active={section.name === currentSection.name}
				class="section w-full p-2 text-4xl text-100 font-medium uppercase transition-all"
				onclick={() => setSection(section)}
			>
				{section.name}
			</button>
		{/each}

		<div
			bind:this={_indicator}
			class="indicator absolute flex items-center justify-between w-full px-8 pointer-events-none transition-all"
			style:top={top + 'px'}
		>
			<div>
				<Chevron className="text-accent" />
			</div>

			<div>
				<Chevron className="text-accent" direction="left" />
			</div>
		</div>

		<span
			bind:this={_span}
			class="absolute bottom-6 left-1/2 -translate-x-1/2 w-full text-100 text-center font-medium"
		>
			© 2024 Michell Algarra Barros
		</span>

		<MemphiDashedCircle className="z-0 top-[77px] right-[-55px] w-28 h-28 text-accent opacity-70" />
		<MemphiTwoLineDots className="z-0 bottom-[60px] left-[-37px] w-32 h-4 text-accent opacity-70" />

		<div class="absolute z-0 top-0 left-0 h-full text-accent pointer-events-none">
			<svg
				class="w-full h-full text-accent"
				width="359"
				height="881"
				viewBox="0 0 359 881"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					opacity="0.7"
					d="M-59 0.5C-59 0.5 68.9568 142.752 72.5 227C77.1133 336.693 5.5527 453.225 -20 560C-65.3586 749.536 205.373 848.414 358 903"
					stroke="currentColor"
					stroke-opacity="0.7"
				/>
			</svg>
		</div>
	</div>
</div>

<style lang="scss">
	.drawer {
		transform-origin: top center;
	}

	.content {
		& .section {
			opacity: 0;
			transform: translateX(-100%);
		}
	}

	.section {
		cursor: pointer;

		&:hover {
			transform: scale(1.1);
		}

		&.active {
			color: var(--pfl-accent);
			font-weight: 700;
		}
	}

	.indicator {
		opacity: 0;

		& > div {
			width: 1.5rem;
			height: 1.5rem;
		}
	}

	span {
		opacity: 0;
	}
</style>

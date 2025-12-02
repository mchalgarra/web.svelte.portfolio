<script lang="ts">
	import { HtmlUtils } from '$lib/classes/html-utils';
	import { uuid } from '$lib/functions/uuid';
	import { onMount } from 'svelte';

	let {
		className = '',
		color1 = '#362384',
		color2 = '#592384',
		color3 = '#669EFF',
		color4 = '#AF3092',
		animate = false
	} = $props();

	const id = uuid();

	let svg: SVGElement;

	onMount(() => {
		if (animate && HtmlUtils.getSVGVisibility(svg)) {
			svg.style.animationPlayState = 'running';
		}
	});
</script>

<svelte:window
	on:scroll={() => {
		if (!svg) return;
		if (animate && HtmlUtils.getSVGVisibility(svg)) {
			svg.style.animationPlayState = 'running';
		} else {
			svg.style.animationPlayState = 'paused';
		}
	}}
/>

<svg
	bind:this={svg}
	class="glow pointer-events-none {className}"
	width="1353"
	height="1008"
	viewBox="0 0 1353 1008"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g filter="url(#filter0_f_{id})">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M799.952 205.829C896.662 228.901 962.009 301.169 1020.69 367.58C1086.2 441.719 1172.92 524.481 1147.89 599.585C1122.97 674.336 994.115 677.548 906.025 711.574C808.945 749.073 733.886 822.131 614.547 805.597C474.873 786.246 326.542 719.919 252.558 621.041C178.997 522.728 185.833 403.446 253.54 323.117C310.89 255.074 453.148 280.166 559.025 257.439C642.492 239.523 707.93 183.875 799.952 205.829Z"
			fill="url(#paint0_linear_{id})"
			fill-opacity="0.3"
		/>
	</g>
	<defs>
		<filter
			id="filter0_f_{id}"
			x="0.0332031"
			y="0.778168"
			width="1352.27"
			height="1007.22"
			filterUnits="userSpaceOnUse"
			color-interpolation-filters="sRGB"
		>
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_{id}" />
		</filter>
		<linearGradient
			id="paint0_linear_{id}"
			x1="223.115"
			y1="360.452"
			x2="1134.72"
			y2="642.254"
			gradientUnits="userSpaceOnUse"
		>
			<stop stop-color={color1} />
			<stop offset="0.345" stop-color={color2} />
			<stop offset="0.7" stop-color={color3} />
			<stop offset="1" stop-color={color4} />
		</linearGradient>
	</defs>
</svg>

<style lang="scss">
	svg {
		animation: glow 5s infinite;
		animation-play-state: paused;
		animation-timing-function: linear;
	}

	@keyframes glow {
		0% {
			filter: hue-rotate(0deg);
		}
		100% {
			filter: hue-rotate(360deg);
		}
	}
</style>

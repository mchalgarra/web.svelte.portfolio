<script lang="ts">
	type Direction = 'up' | 'down' | 'left' | 'right';
	interface IProps {
		className?: string;
		direction?: Direction;
	}

	let { className = '', direction = 'right' }: IProps = $props();

	if (direction === 'up') className += ' rotate-180';
	else if (direction === 'down') className += ' rotate-0';
	else if (direction === 'left') className += ' rotate-90';
	else if (direction === 'right') className += ' -rotate-90';
</script>

<svg
	class={className}
	width="24"
	height="24"
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M20.5561 6.96183C20.852 7.26972 21 7.66158 21 8.13741C21 8.61323 20.852 9.00509 20.5561 9.31298L13.13 17.0382C12.9686 17.2061 12.7937 17.3248 12.6054 17.3942C12.417 17.4636 12.2152 17.4989 12 17.5C11.7848 17.5 11.576 17.458 11.3736 17.374C11.1713 17.2901 11.0034 17.1781 10.87 17.0382L3.44395 9.31298C3.14798 9.00509 3 8.61323 3 8.13741C3 7.66158 3.14798 7.26972 3.44395 6.96183C3.73991 6.65394 4.11659 6.5 4.57399 6.5C5.03139 6.5 5.40807 6.65394 5.70404 6.96183L12 13.5115L18.296 6.96183C18.5919 6.65394 18.9686 6.5 19.426 6.5C19.8834 6.5 20.2601 6.65394 20.5561 6.96183Z"
		fill="currentColor"
	/>
</svg>

<style>
	svg {
		width: 100%;
		height: 100%;
	}
</style>

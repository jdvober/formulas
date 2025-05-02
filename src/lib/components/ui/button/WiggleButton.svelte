<script>
	//@ts-nocheck
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	let {
		text = 'hover me',
		width = 100,
		points = 30,
		duration = 0.6,
		textColor = 'white',
		fontSize = '3vmin',
		onClick,
	} = $props();
	const spacing = width / points;

	let button;
	let svg;
	let wiggle;
	let isAnimating = false;
	let pointzArray = [];

	onMount(() => {
		// Create SVG points
		for (let i = 0; i < points; i++) {
			const position = i / (points - 1);
			const point = svg.createSVGPoint();

			point.x = i * spacing;
			point.y = (25 / 30) * points;
			wiggle.points.appendItem(point);
			pointzArray.push(point);
		}
	});

	const handleMouseEnter = () => {
		if (isAnimating) return;
		isAnimating = true;

		pointzArray.forEach((point, index) => {
			const mapper = gsap.utils.mapRange(0, points, 0, 0.4);
			const config = {
				keyframes: [
					{ y: '+=6', ease: 'Sine.easeInOut' },
					{ y: '-=12', ease: 'Sine.easeInOut' },
					{ y: '+=6', ease: 'Sine.easeInOut' },
				],
				yoyo: true,
				duration: duration,
			};

			if (index === 0) {
				config.onComplete = () => (isAnimating = false);
			}

			gsap.to(point, config).progress(mapper(index));
		});
	};
</script>

<div style:width>
	<button
		onmouseenter={handleMouseEnter}
		onclick={() => {
			onClick();
		}}
		bind:this={button}
		class="animated-button"
		style={`position: relative; outline: none; border: none; border-radius: ${0.99 * width}px; padding: 1rem 2rem; background-color: transparent; overflow: visible; color: ${textColor};`}
	>
		<span
			style={`
		position: relative;
		z-index: 2;
		font-size: ${fontSize};
	`}>{text}</span
		>
		<svg
			bind:this={svg}
			viewBox="0 0 100 50"
			preserveAspectRatio="none"
			style={`position: absolute;
		top: 50%;
		right: 0;
		left: 15%;
		width: 75%;
		transform: translateY(-50%);
		z-index: 1;
		overflow: visible;
`}
		>
			<polyline
				bind:this={wiggle}
				stroke="#17bbab"
				fill="none"
				stroke-width="45"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>
</div>

<style>
</style>

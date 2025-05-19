<script>
	import { gsap } from 'gsap';

	let { children, width = '10em', height = '2em', onClick } = $props();
	let buttonRef;
	/**
	 * @type {gsap.TweenTarget}
	 */
	let glowRef;

	const handleMouseEnter = () => {
		gsap.to(glowRef, {
			opacity: 1,
			duration: 0.3,
			ease: 'power2.out',
		});
	};

	const handleMouseLeave = () => {
		gsap.to(glowRef, {
			opacity: 0,
			duration: 0.3,
			ease: 'power2.out',
		});
	};
</script>

<button
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
	bind:this={buttonRef}
	class={`glow-button`}
	style:width
	style:height
	onclick={() => {
		onClick();
	}}
>
	<span class="content">{@render children()}</span>
	<div
		class="glow-effect"
		bind:this={glowRef}
	></div>
</button>

<style>
	.glow-button {
		position: relative;
		border: none;
		border-radius: 0.5em;
		background: #6272a4;
		color: #f8f8f2;
		cursor: pointer;
		overflow: hidden;
		transition: transform 0.2s ease;
	}

	.glow-effect {
		position: absolute;
		inset: 0;
		background: radial-gradient(
			circle at center,
			rgba(255, 255, 255, 0.8) 0%,
			transparent 70%
		);
		opacity: 0;
		filter: blur(20px);
		pointer-events: none;
	}

	.content {
		position: relative;
		z-index: 1;
		font-weight: 600;
	}

	/* Optional: Add slight scale effect */
	.glow-button:hover {
		transform: scale(1.1);
	}
</style>

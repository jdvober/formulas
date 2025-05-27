<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	let { element } = $props();

	import { gsap } from 'gsap';
	let buttonRef;
	/**
	 * @type {gsap.TweenTarget}
	 */
	let glowRef: any;

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

	const doNothing = () => {
		return;
	};
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div
	class="element-container"
	style:background-color={element.color}
>
	<button
		onmouseenter={element.atomicNumber === 0 ? doNothing : handleMouseEnter}
		onmouseleave={handleMouseLeave}
		bind:this={buttonRef}
		class={`glow-button`}
		style:width="9vmin"
		style:height="9vmin"
		style:background={element.color}
		style:color="#282A36"
		style:cursor={element.atomicNumber === 0 ? 'default' : 'help'}
		onclick={() => {
			console.log('Clicked');
		}}
	>
		<div class="atomic-number">
			{element.atomicNumber === 0 ? null : element.atomicNumber}
		</div>
		<div class="symbol">{element.symbol}</div>
		<div class="name">{element.name}</div>
		<div
			class="glow-effect"
			bind:this={glowRef}
		></div>
	</button>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.element-container {
		display: grid;

		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: auto;
		grid-template-areas:
			'atomic-number . . .'
			'. symbol symbol .'
			'. symbol symbol .'
			'name name name name';

		border-radius: 10%;
		width: 9vmin;
		height: 9vmin;
		color: black;
		padding: 0.2vmin;
	}

	.atomic-number {
		grid-area: atomic-number;
		justify-self: center;
		align-self: center;
	}
	.symbol {
		grid-area: symbol;
		justify-self: center;
		align-self: center;
		font-size: 1em;
	}

	.name {
		grid-area: name;
		font-size: 0.5em;
		justify-self: center;
		align-self: center;
	}

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

	.glow-button {
		position: relative;
		border: none;
		border-radius: 0.5em;
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

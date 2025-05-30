<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	let { element }: { element: ElementType } = $props();

	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import { infoBox } from '../../../state/periodicTableState.svelte';
	let buttonRef;
	/**
	 * @type {gsap.TweenTarget}
	 */
	let glowRef: any;

	// Need to wait for window to load before using these
	let width = $state(0);
	let height = $state(0);
	onMount(() => {
		width = window.innerWidth;
		height = window.innerHeight;
	});

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

	const handleClick = () => {
		// Update the Info Box
		infoBox.info = {
			...element,
			name: element.name ?? '',
			appearance: element.appearance ?? '',
			atomicMass: element.atomicMass ?? 0,
			boil: element.boil ?? 0,
			category: element.category ?? '',
			density: element.density ?? 0,
			discoveredBy: element.discoveredBy ?? '',
			melt: element.melt ?? 0,
			molarHeat: element.molarHeat ?? 0,
			namedBy: element.namedBy ?? '',
			number: element.number ?? 0,
			period: element.period ?? 0,
			phase: element.phase ?? '',
			source: element.source ?? '',
			spectralImg: element.spectralImg ?? '',
			summary: element.summary ?? '',
			symbol: element.symbol ?? '',
			xpos: element.xpos ?? 0,
			ypos: element.ypos ?? 0,
			//@ts-ignore
			shells: element.shells ?? [0],
			electronConfiguration: element.electronConfiguration ?? '',
			electronConfigurationSemantic:
				element.electronConfigurationSemantic ?? '',
			electronAffinity: element.electronAffinity ?? 0,
			electronegativityPauling: element.electronegativityPauling ?? 0,
			ionizationEnergies: (element.ionizationEnergies as number[]) ?? [0],
			hex: element.hex ?? '',
			block: element.block ?? '',
			color: element.color ?? '',
			background: element.background ?? '',
		};
	};

	const doNothing = () => {
		return;
	};
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="element-container">
	<button
		onmouseenter={element.number === 0 ? doNothing : handleMouseEnter}
		onmouseleave={handleMouseLeave}
		bind:this={buttonRef}
		class={`glow-button`}
		style:width="8vmin"
		style:height="8vmin"
		style:color={element.color}
		style:background={element.background}
		style:cursor={element.number === 0 ? 'default' : 'help'}
		onclick={() => {
			handleClick();
		}}
	>
		<div class="atomic-number">
			{element.number === 0 ? null : element.number}
		</div>
		<div class="symbol">{element.symbol}</div>
		<div class="name">{element.name}</div>
		<div
			class="glow-effect"
			bind:this={glowRef}
		></div>
		<div class="charge">{element.charge}</div>
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
			'atomic-number . . charge'
			'. symbol symbol .'
			'. symbol symbol .'
			'name name name name';

		border-radius: 10%;
		width: 9vmin;
		height: 9vmin;
		color: black;
	}

	.charge {
		font-family: 'Atkinson Hyperlegible Next';
	}

	.atomic-number {
		grid-area: atomic-number;
		justify-self: start;
		align-self: center;
		font-size: 0.75em;
		margin: 0.2vmin;
		margin-left: 0.4vmin;
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
		border: none;
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

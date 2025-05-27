<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { gsap } from 'gsap';
	import { v4 as uuid } from 'uuid';

	import { onMount } from 'svelte';
	import { getElementPos } from '../../functions/GetElementPosition.svelte';
	import {
		getUseLongValues,
		setUnitInfo,
	} from '../../state/mainState.svelte';
	import {
		unitInfoBoxCoordinatesState,
		unitInfoBoxVisibilityState,
	} from './Measurements/UnitInfoBox.svelte';

	let {
		color = 'black',
		subscript = '',
		content,
	}: {
		color?: string | undefined;
		subscript?: string | number | undefined;
		content: any;
	} = $props();

	let glowRef: gsap.TweenTarget;

	let uniqueID = uuid();
	let element = $state(null as HTMLElement | null);
	let elementPosition = $state({ x: 0, y: 0, w: 0, h: 0 });

	// Check to make sure we are not running on the server by only declaring element once it is mounted to the DOM.  If we don't do this, we get a "document is not defined error"
	onMount(() => {
		element = document.getElementById(`${uniqueID}`);
	});

	let getRenderCoord = (ey: number) => {
		let coord = {
			x: -1,
			y: -1,
		};
		if (ey >= window.innerHeight / 2) {
			coord = {
				x: 0,
				y: window.innerHeight - window.innerHeight * 0.65,
			};
			console.log('Rendering box on top.');
		} else {
			coord = {
				x: 0,
				y: window.innerHeight - window.innerHeight * 0.05,
			};
			console.log('Rendering box on bottom.');
		}
		return coord;
	};

	const handleMouseEnter = () => {
		gsap.to(glowRef, {
			opacity: 1,
			duration: 0.3,
			ease: 'power2.out',
		});

		// Update element position
		elementPosition = getElementPos(element);

		unitInfoBoxCoordinatesState.setCoordinates(
			getRenderCoord(elementPosition.y)
		);
		setUnitInfo(content);
		unitInfoBoxVisibilityState.setVisibility(true);
	};

	const handleMouseLeave = () => {
		gsap.to(glowRef, {
			opacity: 0,
			duration: 0.3,
			ease: 'power2.out',
		});
	};
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
{#snippet glowEffect()}
	<div
		class="glow-effect"
		bind:this={glowRef}
	></div>
{/snippet}

<mrow id={`${uniqueID}`}>
	{#if typeof content === 'object'}
		<msub
			style:color={content.color}
			style:margin-bottom={subscript !== 'NONE' ? '0.25em' : '0px'}
			role="math"
			class="glow-term"
			onmouseleave={handleMouseLeave}
			onmouseenter={handleMouseEnter}
		>
			<ms>
				{getUseLongValues() === true
					? content.value.long
					: content.value.short}
				{@render glowEffect()}
			</ms>
			{#if subscript !== 'NONE'}
				<ms>{subscript}</ms>
			{/if}
		</msub>
	{:else if typeof content === 'string' && content.length === 1}
		<msub
			style:color
			style:margin-bottom={subscript !== 'NONE' ? '0.25em' : '0px'}
			role="math"
			onmouseleave={handleMouseLeave}
			onmouseenter={handleMouseEnter}
		>
			<mi>
				{content}
				{@render glowEffect()}
			</mi>
			{#if subscript !== 'NONE'}
				<ms>{subscript}</ms>
			{/if}
		</msub>
	{:else if typeof content === 'string'}
		<msub
			style:color
			style:margin-bottom={subscript !== 'NONE' ? '0.25em' : '0px'}
			role="math"
			onmouseleave={handleMouseLeave}
			onmouseenter={handleMouseEnter}
		>
			<ms>
				{content}
				{@render glowEffect()}
			</ms>
			{#if subscript !== 'NONE'}
				<ms>{subscript}</ms>
			{/if}
		</msub>
	{:else if typeof content === 'number'}
		<msub
			style:color
			style:margin-bottom={subscript !== 'NONE' ? '0.25em' : '0px'}
			role="math"
			onmouseleave={handleMouseLeave}
			onmouseenter={handleMouseEnter}
		>
			<mn>
				{content}
				{@render glowEffect()}
			</mn>
			{#if subscript !== 'NONE'}
				<ms>{subscript}</ms>
			{/if}
		</msub>
	{:else}
		<msub
			style:color
			style:margin-bottom={subscript !== 'NONE' ? '0.25em' : '0px'}
			role="math"
		>
			<ms>
				{@render content()}
				{@render glowEffect()}
			</ms>
			{#if subscript !== 'NONE'}
				<ms>{subscript}</ms>
			{/if}
		</msub>
	{/if}
</mrow>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	msub {
		border: '1px solid red';
	}
	.glow-term {
		position: relative;
		border: none;
		border-radius: 0.5em;
		cursor: pointer;
		transition: transform 0.2s ease;
	}

	/* Optional: Add slight scale effect */
	.glow-term:hover {
		transform: scale(1.1);
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
</style>

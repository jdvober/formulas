<!--TODO: For some reason, when changing from long to short values, the formula disappears for anything with a subscript.  Probably the way MathMl is rendered in Chromium based browsers.-->
<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { gsap } from 'gsap';

	import { getUseLongValues, setUnitInfo } from '../state/mainState.svelte';
	import { unitInfoBoxVisibilityState } from './Measurements/UnitInfoBox.svelte';

	let { color = 'black', subscript, content } = $props();

	let glowRef: gsap.TweenTarget;

	const handleMouseEnter = () => {
		gsap.to(glowRef, {
			opacity: 1,
			duration: 0.3,
			ease: 'power2.out',
		});

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

<mrow class="Term">
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

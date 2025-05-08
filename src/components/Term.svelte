<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { gsap } from 'gsap';

	import { getUseLongValues, setUnitInfo } from '../state/mainState.svelte';

	let { color = 'black', ...props } = $props();
	let buttonRef;

	/**
	 * @type {gsap.TweenTarget}
	 */
	let glowRef: gsap.TweenTarget = null;

	const handleMouseEnter = () => {
		gsap.to(glowRef, {
			opacity: 1,
			duration: 0.3,
			ease: 'power2.out',
		});

		setUnitInfo(props.content);
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
<mrow class="Term">
	{#if typeof props.content === 'object'}
		<ms
			style:border="1px solid red"
			style:color={props.content.color}
			role="tooltip"
			bind:this={buttonRef}
			onmouseleave={handleMouseLeave}
			onmouseenter={handleMouseEnter}
		>
			{getUseLongValues() === true
				? props.content.value.long
				: props.content.value.short}

			<div
				class="glow-effect"
				bind:this={glowRef}
			></div>
		</ms>
	{:else if typeof props.content === 'string' && props.content.length === 1}
		<mi
			style:border="1px solid blue"
			style:color={props.color}
			role="tooltip"
			bind:this={buttonRef}
			onmouseleave={handleMouseLeave}
			onmouseenter={handleMouseEnter}
			>{props.content}

			<div
				class="glow-effect"
				bind:this={glowRef}
			></div>
		</mi>
	{:else if typeof props.content === 'string'}
		<ms
			style:border="1px solid green"
			style:color={props.color}
			role="tooltip"
			bind:this={buttonRef}
			onmouseleave={handleMouseLeave}
			onmouseenter={handleMouseEnter}
		>
			{props.content}

			<div
				class="glow-effect"
				bind:this={glowRef}
			></div>
		</ms>
	{:else if typeof props.content === 'number'}
		<mn
			style:border="1px solid yellow"
			style:color={props.color}
			role="tooltip"
			bind:this={buttonRef}
			onmouseleave={handleMouseLeave}
			onmouseenter={handleMouseEnter}
			>{props.content}

			<div
				class="glow-effect"
				bind:this={glowRef}
			></div>
		</mn>
	{:else}
		<ms
			style:border="1px solid orange"
			style:width="20vw"
			style:height="15vh"
			style:color={props.color}
			bind:this={buttonRef}
			role="tooltip"
		>
			{@render props.content()}

			<div
				class="glow-effect"
				bind:this={glowRef}
			></div>
		</ms>
	{/if}
</mrow>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.glow-term {
		position: relative;
		border: none;
		border-radius: 0.5em;
		cursor: pointer;
		overflow: hidden;
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

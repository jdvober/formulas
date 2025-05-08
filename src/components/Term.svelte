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
			style:color={props.content.color}
			role="tooltip"
			bind:this={buttonRef}
			class="glow-button"
			onmouseleave={handleMouseLeave}
			onmouseenter={handleMouseEnter}
		>
			<span
				>{getUseLongValues() === true
					? props.content.value.long
					: props.content.value.short}</span
			>
			<div
				class="glow-effect"
				bind:this={glowRef}
			></div>
		</ms>
	{:else if typeof props.content === 'string' && props.content.length === 1}
		<mi
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
	.glow-button {
		position: relative;
		border: none;
		border-radius: 0.5em;
		cursor: pointer;
		transition: transform 0.2s ease;
	}

	/* Optional: Add slight scale effect */
	.glow-button:hover {
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

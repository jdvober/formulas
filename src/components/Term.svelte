<!--TODO: For some reason, when changing from long to short values, the formula disappears for anything with a subscript-->
<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { gsap } from 'gsap';

	import { getUseLongValues, setUnitInfo } from '../state/mainState.svelte';

	let { color = 'black', subscript, ...props } = $props();

	let buttonRef = $state();
	let glowRef: gsap.TweenTarget;

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
{#snippet glowEffect()}
	<div
		class="glow-effect"
		bind:this={glowRef}
	></div>
{/snippet}

<mrow class="Term">
	{#if typeof props.content === 'object'}
		<msub
			style:color={props.content.color}
			style:margin-bottom={subscript !== 'NONE' ? '0.25em' : '0px'}
			role="math"
			bind:this={buttonRef}
			class="glow-term"
			onmouseleave={handleMouseLeave}
			onmouseenter={handleMouseEnter}
		>
			<ms>
				{getUseLongValues() === true
					? props.content.value.long
					: props.content.value.short}
				{@render glowEffect()}
			</ms>
			{#if subscript !== 'NONE'}
				<ms>{subscript}</ms>
			{/if}
		</msub>
	{:else if typeof props.content === 'string' && props.content.length === 1}
		<msub
			style:color={props.color}
			style:margin-bottom={subscript !== 'NONE' ? '0.25em' : '0px'}
			role="math"
			bind:this={buttonRef}
			onmouseleave={handleMouseLeave}
			onmouseenter={handleMouseEnter}
		>
			<mi>
				{props.content}
				{@render glowEffect()}
			</mi>
			{#if subscript !== 'NONE'}
				<ms>{subscript}</ms>
			{/if}
		</msub>
	{:else if typeof props.content === 'string'}
		<msub
			style:color={props.color}
			style:margin-bottom={subscript !== 'NONE' ? '0.25em' : '0px'}
			role="math"
			bind:this={buttonRef}
			onmouseleave={handleMouseLeave}
			onmouseenter={handleMouseEnter}
		>
			<ms>
				{props.content}
				{@render glowEffect()}
			</ms>
			{#if subscript !== 'NONE'}
				<ms>{subscript}</ms>
			{/if}
		</msub>
	{:else if typeof props.content === 'number'}
		<msub
			style:color={props.color}
			style:margin-bottom={subscript !== 'NONE' ? '0.25em' : '0px'}
			role="math"
			bind:this={buttonRef}
			onmouseleave={handleMouseLeave}
			onmouseenter={handleMouseEnter}
		>
			<mn>
				{props.content}
				{@render glowEffect()}
			</mn>
			{#if subscript !== 'NONE'}
				<ms>{subscript}</ms>
			{/if}
		</msub>
	{:else}
		<msub
			style:color={props.color}
			style:margin-bottom={subscript !== 'NONE' ? '0.25em' : '0px'}
			role="math"
			bind:this={buttonRef}
		>
			<ms>
				{@render props.content()}
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

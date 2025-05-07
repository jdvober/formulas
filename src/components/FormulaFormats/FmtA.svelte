<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import type { Component } from 'svelte';
	import Term from '../Term.svelte';

	let {
		a,
		b,
		c,
		variant,
	}: {
		a: TermType | Component;
		b: TermType | Component;
		c: TermType | Component;
		variant: 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
	} = $props();
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->

{#if variant === 'PRIMARY'}
	<math>
		<mrow>
			{#if typeof a === 'object'}
				<mi style:color={a.color}>{a.value.long as string}</mi>
			{:else}
				<mi><Term content={a} /></mi>
			{/if}
			<mo>=</mo>
			<mfrac>
				{#if typeof b === 'object'}
					<mi style:color={b.color}>{b.value.long as string}</mi>
				{:else}
					<mi><Term content={b} /></mi>
				{/if}
				{#if typeof c === 'object'}
					<mi style:color={c.color}>{c.value.long as string}</mi>
				{:else}
					<mi><Term content={c} /></mi>
				{/if}
			</mfrac>
		</mrow>
	</math>
{/if}

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.FmtA {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		height: auto;
		min-height: 25vh;
		padding: 0.5em;
		border: 1px solid #fafaf2;
		border-radius: 1em;
		min-width: 43vw;
		max-width: 86vw;
		overflow-x: scroll;
	}
</style>

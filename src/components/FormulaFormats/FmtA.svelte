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
		subscripts,
		variant,
	}: {
		a: TermType | Component;
		b: TermType | Component;
		c: TermType | Component;
		subscripts: {
			a: string | number;
			b: string | number;
			c: string | number;
		};
		variant: 'DEFAULT' | 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
	} = $props();
	let v = $state(variant);
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->

{#snippet A()}
	<button
		onclick={() => {
			v = 'PRIMARY';
		}}
		><Term
			content={a}
			subscript={subscripts.a}
		/></button
	>
{/snippet}

{#snippet B()}
	<button
		onclick={() => {
			v = 'SECONDARY';
		}}
		><Term
			content={b}
			subscript={subscripts.b}
		/></button
	>
{/snippet}

{#snippet C()}
	<button
		onclick={() => {
			v = 'TERTIARY';
		}}
		><Term
			content={c}
			subscript={subscripts.c}
		/></button
	>
{/snippet}

{#if v === 'PRIMARY'}
	<math>
		<mrow>
			<mi>{@render A()}</mi>
			<mo>=</mo>
			<mfrac>
				<mi>{@render B()}</mi>
				<mi>{@render C()}</mi>
			</mfrac>
		</mrow>
	</math>
{:else if v === 'SECONDARY'}
	<math>
		<mrow>
			<mi>{@render B()}</mi>
			<mo>=</mo>
			<mi>{@render A()}</mi>
			<mo>&middot</mo>
			<mi>{@render C()}</mi>
		</mrow>
	</math>
{:else}
	<math>
		<mrow>
			<mi>{@render C()}</mi>
			<mo>=</mo>
			<mfrac>
				<mi>{@render B()}</mi>
				<mi>{@render A()}</mi>
			</mfrac>
		</mrow>
	</math>
{/if}

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	math {
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
		margin-left: auto;
		margin-right: auto;
	}
</style>

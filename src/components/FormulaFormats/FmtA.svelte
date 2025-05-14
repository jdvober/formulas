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
		variant = 'DEFAULT',
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

{#if v === 'PRIMARY' || v === 'DEFAULT'}
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
</style>

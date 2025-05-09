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
		d,
		subscripts,
		variant = 'DEFAULT',
	}: {
		a: TermType | Component;
		b: TermType | Component;
		c: TermType | Component;
		d: TermType | Component;
		subscripts: {
			a: string | number;
			b: string | number;
			c: string | number;
			d: string | number;
		};
		variant:
			| 'DEFAULT'
			| 'PRIMARY'
			| 'SECONDARY'
			| 'TERTIARY'
			| 'QUARTENARY';
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

{#snippet D()}
	<button
		onclick={() => {
			v = 'QUARTENARY';
		}}
		><Term
			content={d}
			subscript={subscripts.d}
		/></button
	>
{/snippet}

{#if v === 'DEFAULT' || v === 'PRIMARY'}
	<!--a=bcd-->
	<math>
		<mrow>
			<msub>{@render A()}</msub>
			<mo>=</mo>
			<msub>{@render B()}</msub>
			<mo>&middot</mo>
			<msub>{@render C()}</msub>
			<mo>&middot</mo>
			<msub>{@render D()}</msub>
		</mrow>
	</math>
{:else if v === 'SECONDARY'}
	<!--b=a/cd-->
	<math>
		<mrow>
			<mi>{@render B()}</mi>
			<mo>=</mo>
			<mfrac>
				<mrow>
					<mi>{@render A()}</mi>
				</mrow>
				<mrow>
					<ms>{@render C()}</ms>
					<mo>&middot</mo>
					<mi>{@render D()}</mi>
				</mrow>
			</mfrac>
		</mrow>
	</math>
{:else if v === 'TERTIARY'}
	<!--c=a/bd-->
	<math>
		<mrow>
			<mi>{@render C()}</mi>
			<mo>=</mo>
			<mfrac>
				<mrow>
					<mi>{@render A()}</mi>
				</mrow>
				<mrow>
					<ms>{@render B()}</ms>
					<mo>&middot</mo>
					<mi>{@render D()}</mi>
				</mrow>
			</mfrac>
		</mrow>
	</math>
{:else if v === 'QUARTENARY'}
	<!--d=a/bc-->
	<math>
		<mrow>
			<mi>{@render D()}</mi>
			<mo>=</mo>
			<mfrac>
				<mrow>
					<mi>{@render A()}</mi>
				</mrow>
				<mrow>
					<ms>{@render B()}</ms>
					<mo>&middot</mo>
					<mi>{@render C()}</mi>
				</mrow>
			</mfrac>
		</mrow>
	</math>
{:else}
	<!--d=ab/c-->
	<math>
		<mrow>
			<mi>{@render D()}</mi>
			<mo>=</mo>
			<mfrac>
				<mrow>
					<mi>{@render A()}</mi>
				</mrow>
				<mrow>
					<ms>{@render B()}</ms>
					<mo>&middot</mo>
					<mi>{@render C()}</mi>
				</mrow>
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

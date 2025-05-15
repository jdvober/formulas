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
	<Term
		content={a}
		subscript={subscripts.a}
	/>
{/snippet}

{#snippet B()}
	<Term
		content={b}
		subscript={subscripts.b}
	/>
{/snippet}

{#snippet C()}
	<Term
		content={c}
		subscript={subscripts.c}
	/>
{/snippet}

{#snippet D()}
	<Term
		content={d}
		subscript={subscripts.d}
	/>
{/snippet}

{#if v === 'DEFAULT' || v === 'PRIMARY'}
	<!--ab=cd-->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->

	<math>
		<mrow>
			<msub
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'PRIMARY';
				}}>{@render A()}</msub
			>
			<mo>&middot</mo>
			<msub
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'SECONDARY';
				}}>{@render B()}</msub
			>
			<mo>=</mo>
			<msub
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'TERTIARY';
				}}>{@render C()}</msub
			>
			<mo>&middot</mo>
			<msub
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'QUARTENARY';
				}}>{@render D()}</msub
			>
		</mrow>
	</math>
{:else if v === 'SECONDARY'}
	<!--b=cd/a-->
	<math>
		<mrow>
			<mi
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'SECONDARY';
				}}>{@render B()}</mi
			>
			<mo>=</mo>
			<mfrac>
				<mrow>
					<mi
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'TERTIARY';
						}}>{@render C()}</mi
					>
					<mo>&middot</mo>
					<mi
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'QUARTENARY';
						}}>{@render D()}</mi
					>
				</mrow>
				<mrow>
					<ms
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'PRIMARY';
						}}>{@render A()}</ms
					>
				</mrow>
			</mfrac>
		</mrow>
	</math>
{:else if v === 'TERTIARY'}
	<!--c=ab/d-->
	<math>
		<mrow>
			<mi
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'TERTIARY';
				}}>{@render C()}</mi
			>
			<mo>=</mo>
			<mfrac>
				<mrow>
					<mi
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'PRIMARY';
						}}>{@render A()}</mi
					>
					<mo>&middot</mo>
					<mi
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'SECONDARY';
						}}>{@render B()}</mi
					>
				</mrow>
				<mrow>
					<ms
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'QUARTENARY';
						}}>{@render D()}</ms
					>
				</mrow>
			</mfrac>
		</mrow>
	</math>
{:else}
	<!--d=ab/c-->
	<math>
		<mrow>
			<mi
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'QUARTENARY';
				}}>{@render D()}</mi
			>
			<mo>=</mo>
			<mfrac>
				<mrow>
					<mi
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'PRIMARY';
						}}>{@render A()}</mi
					>
					<mo>&middot</mo>
					<mi
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'SECONDARY';
						}}>{@render B()}</mi
					>
				</mrow>
				<mrow>
					<ms
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'TERTIARY';
						}}>{@render C()}</ms
					>
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
		margin-left: auto;
		margin-right: auto;
	}
</style>

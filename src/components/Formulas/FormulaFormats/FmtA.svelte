<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Component } from 'svelte';
	import Term from '../Term.svelte';
	import { whoosh } from '../../../functions/animations/svelteTransitions.svelte';

	let {
		a,
		b,
		c,
		subscripts,
		variant = 'DEFAULT',
		showAll = false,
	}: {
		a: TermType | Component;
		b: TermType | Component;
		c: TermType | Component;
		subscripts: SubS;
		variant: 'DEFAULT' | 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
		showAll: boolean;
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
		color="black"
	/>
{/snippet}

{#snippet B()}
	<Term
		content={b}
		subscript={subscripts.b}
		color="black"
	/>
{/snippet}

{#snippet C()}
	<Term
		content={c}
		subscript={subscripts.c}
		color="black"
	/>
{/snippet}

{#if showAll === true}
	<div
		in:whoosh={{ delay: 0, duration: 200 }}
		out:fade={{ duration: 0 }}
	>
		<div style:margin={'2vh'}>
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
		</div>
		<div style:margin={'2vh'}>
			<math>
				<mrow>
					<mi>{@render B()}</mi>
					<mo>=</mo>
					<mi>{@render A()}</mi>
					<mo>&middot</mo>
					<mi>{@render C()}</mi>
				</mrow>
			</math>
		</div>
		<div style:margin={'2vh'}>
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
		</div>
	</div>
{:else if v === 'PRIMARY' || v === 'DEFAULT'}
	<math>
		<mrow>
			<mi
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'PRIMARY';
				}}>{@render A()}</mi
			>
			<mo
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}>=</mo
			>
			<mfrac>
				<mi
					in:whoosh={{ delay: 0, duration: 200 }}
					out:fade={{ duration: 0 }}
					role="button"
					aria-label="Interactive math button"
					tabindex="0"
					onclick={() => {
						v = 'SECONDARY';
					}}>{@render B()}</mi
				>
				<mi
					in:whoosh={{ delay: 0, duration: 200 }}
					out:fade={{ duration: 0 }}
					role="button"
					aria-label="Interactive math button"
					tabindex="0"
					onclick={() => {
						v = 'TERTIARY';
					}}>{@render C()}</mi
				>
			</mfrac>
		</mrow>
	</math>
{:else if v === 'SECONDARY'}
	<math>
		<mrow>
			<mrow>
				<mi
					in:whoosh={{ delay: 0, duration: 200 }}
					out:fade={{ duration: 0 }}
					role="button"
					aria-label="Interactive math button"
					tabindex="0"
					onclick={() => {
						v = 'SECONDARY';
					}}>{@render B()}</mi
				>
				<mo
					in:whoosh={{ delay: 0, duration: 200 }}
					out:fade={{ duration: 0 }}>=</mo
				>
				<mi
					in:whoosh={{ delay: 0, duration: 200 }}
					out:fade={{ duration: 0 }}
					role="button"
					aria-label="Interactive math button"
					tabindex="0"
					onclick={() => {
						v = 'PRIMARY';
					}}>{@render A()}</mi
				>
				<mo
					in:whoosh={{ delay: 0, duration: 200 }}
					out:fade={{ duration: 0 }}>&middot</mo
				>
				<mi
					in:whoosh={{ delay: 0, duration: 200 }}
					out:fade={{ duration: 0 }}
					role="button"
					aria-label="Interactive math button"
					tabindex="0"
					onclick={() => {
						v = 'TERTIARY';
					}}>{@render C()}</mi
				>
			</mrow>
		</mrow></math
	>
{:else}
	<math
		in:whoosh={{ delay: 0, duration: 200 }}
		out:fade={{ duration: 0 }}
	>
		<mrow>
			<mi
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'TERTIARY';
				}}>{@render C()}</mi
			>
			<mo
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}>=</mo
			>
			<mfrac>
				<mi
					in:whoosh={{ delay: 0, duration: 200 }}
					out:fade={{ duration: 0 }}
					role="button"
					aria-label="Interactive math button"
					tabindex="0"
					onclick={() => {
						v = 'SECONDARY';
					}}>{@render B()}</mi
				>
				<mi
					in:whoosh={{ delay: 0, duration: 200 }}
					out:fade={{ duration: 0 }}
					role="button"
					aria-label="Interactive math button"
					tabindex="0"
					onclick={() => {
						v = 'PRIMARY';
					}}>{@render A()}</mi
				>
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

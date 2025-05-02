<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import type { Component } from 'svelte';
	import { blankUnitInfo, setUnitInfo } from '../../state/mainState.svelte';
	import Division from '../Operations/Division.svelte';
	import Equals from '../Operations/Equals.svelte';
	import Multiplication from '../Operations/Multiplication.svelte';
	import Term from '../Term.svelte';

	export { A, B, C };

	let {
		a,
		b,
		c,
		variant = $bindable('PRIMARY'),
	}: {
		a: TermType | Component;
		b: TermType | Component;
		c: TermType | Component;
		variant: 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
	} = $props();

	let aColor = typeof a === 'object' ? a.color : 'black';
	let bColor = typeof b === 'object' ? b.color : 'black';
	let cColor = typeof c === 'object' ? c.color : 'black';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<!--TODO: Extract these snippet defs to a new file for use in all formats.-->

{#snippet T(t: TermType | Component, v: 'PRIMARY' | 'SECONDARY' | 'TERTIARY')}
	<div>
		<button
			onclick={() => {
				variant = v;
			}}
			onmouseenter={() => {
				setUnitInfo(typeof t === 'object' ? t : blankUnitInfo);
			}}
		>
			{#if typeof t === 'object'}
				<Term
					content={t}
					color={typeof t === 'object' ? t.color : 'black'}
				/>
			{:else}
				<Term content={t} />
			{/if}
		</button>
	</div>
{/snippet}

{#snippet A(a: TermType | Component)}
	{@render T(a, 'PRIMARY')}
{/snippet}
{#snippet B(b: TermType | Component)}
	{@render T(b, 'SECONDARY')}
{/snippet}
{#snippet C(c: TermType | Component)}
	{@render T(c, 'TERTIARY')}
{/snippet}

<!--a=b/c-->
{#if variant === 'PRIMARY'}
	<div class="FmtA">
		<Equals>
			{#snippet lhs()}
				{@render A(a)}
			{/snippet}
			{#snippet rhs()}
				<Division colors={{ a: bColor, b: cColor }}>
					{#snippet a()}
						{@render B(b)}
					{/snippet}
					{#snippet b()}
						{@render C(c)}
					{/snippet}
				</Division>
			{/snippet}
		</Equals>
	</div>
	<!--b=axc-->
{:else if variant === 'SECONDARY'}
	<div class="FmtA">
		<Equals>
			{#snippet lhs()}
				{@render B(b)}
			{/snippet}
			{#snippet rhs()}
				<Multiplication colors={{ a: aColor, b: cColor }}>
					{#snippet a()}
						{@render A(a)}
					{/snippet}
					{#snippet b()}
						{@render C(c)}
					{/snippet}
				</Multiplication>
			{/snippet}
		</Equals>
	</div>
	<!--c=b/a-->
{:else}
	<div class="FmtA">
		<Equals>
			{#snippet lhs()}
				{@render C(c)}
			{/snippet}
			{#snippet rhs()}
				<Division colors={{ a: bColor, b: cColor }}>
					{#snippet a()}
						{@render B(b)}
					{/snippet}
					{#snippet b()}
						{@render A(a)}
					{/snippet}
				</Division>
			{/snippet}
		</Equals>
	</div>
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

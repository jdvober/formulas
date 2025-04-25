<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import type { Component } from 'svelte';
	import { getUseLongValues } from '../../state/mainState.svelte';
	import Division from '../Operations/Division.svelte';
	import Equals from '../Operations/Equals.svelte';
	import Multiplication from '../Operations/Multiplication.svelte';
	import Term from '../Term.svelte';

	export { A, B, C };

	let variation = $state('PRIMARY');
	let {
		a,
		b,
		c,
	}: {
		a: TermType | Component;
		b: TermType | Component;
		c: TermType | Component;
	} = $props();
	let aColor = typeof a === 'object' ? a.color : 'black';
	let bColor = typeof b === 'object' ? b.color : 'black';
	let cColor = typeof c === 'object' ? c.color : 'black';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<!--TODO: Extract these snippet defs to a new file for use in all formats.-->
{#snippet A()}
	<button
		onclick={() => {
			variation = 'PRIMARY';
		}}
	>
		{#if typeof a === 'object'}
			<Term
				content={getUseLongValues() === true
					? a.value.long
					: a.value.short}
				color={aColor}
			/>
		{:else}
			<Term content={a} />
		{/if}
	</button>
{/snippet}
{#snippet B()}
	<button
		onclick={() => {
			variation = 'SECONDARY';
		}}
	>
		{#if typeof b === 'object'}
			<Term
				content={getUseLongValues() === true
					? b.value.long
					: b.value.short}
				color={bColor}
			/>
		{:else}
			<Term content={b} />
		{/if}
	</button>
{/snippet}
{#snippet C()}
	<button
		onclick={() => {
			variation = 'TERTIARY';
		}}
	>
		{#if typeof c === 'object'}
			<Term
				content={getUseLongValues() === true
					? c.value.long
					: c.value.short}
				color={cColor}
			/>
		{:else}
			<Term content={c} />
		{/if}
	</button>
{/snippet}

<!--a=b/c-->
{#if variation === 'PRIMARY'}
	<div class="FmtA">
		<Equals>
			{#snippet lhs()}
				{@render A()}
			{/snippet}
			{#snippet rhs()}
				<Division colors={{ a: bColor, b: cColor }}>
					{#snippet a()}
						{@render B()}
					{/snippet}
					{#snippet b()}
						{@render C()}
					{/snippet}
				</Division>
			{/snippet}
		</Equals>
	</div>
	<!--b=axc-->
{:else if variation === 'SECONDARY'}
	<div class="FmtA">
		<Equals>
			{#snippet lhs()}
				{@render B()}
			{/snippet}
			{#snippet rhs()}
				<Multiplication colors={{ a: aColor, b: cColor }}>
					{#snippet a()}
						{@render A()}
					{/snippet}
					{#snippet b()}
						{@render C()}
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
				{@render C()}
			{/snippet}
			{#snippet rhs()}
				<Division colors={{ a: bColor, b: cColor }}>
					{#snippet a()}
						{@render B()}
					{/snippet}
					{#snippet b()}
						{@render A()}
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
		align-items: center;
		justify-content: center;
		height: auto;
		min-height: 25vh;
		padding: 0.5em;
		border: 1px solid black;
		width: 43vw;
		margin: 2em;
	}
</style>

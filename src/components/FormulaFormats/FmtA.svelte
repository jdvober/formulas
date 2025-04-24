<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
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
		a: TermType;
		b: TermType;
		c: TermType;
	} = $props();
	let aColor = a.color;
	let bColor = b.color;
	let cColor = c.color;
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
{#snippet A()}
	<button
		onclick={() => {
			variation = 'PRIMARY';
		}}
	>
		<Term
			content={getUseLongValues() === true ? a.value.long : a.value.short}
			color={a.color}
		/>
	</button>
{/snippet}
{#snippet B()}
	<button
		onclick={() => {
			variation = 'SECONDARY';
		}}
	>
		<Term
			content={getUseLongValues() === true ? b.value.long : b.value.short}
			color={b.color}
		/>
	</button>
{/snippet}
{#snippet C()}
	<button
		onclick={() => {
			variation = 'TERTIARY';
		}}
	>
		<Term
			content={getUseLongValues() === true ? c.value.long : c.value.short}
			color={c.color}
		/>
	</button>
{/snippet}

<!--a=b/c-->
{#if variation === 'PRIMARY'}
	<div class="FmtA container">
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
	<div class="FmtA container">
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
	<div class="FmtA container">
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
	div {
		display: flex;
		align-items: center;
		height: 8em;
		border: 1px solid black;
	}
</style>

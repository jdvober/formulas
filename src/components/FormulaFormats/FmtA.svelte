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
	let v = $state(variant);
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->

{#if v === 'PRIMARY'}
	<math class="FmtA">
		<mrow>
			<mi
				><button
					onclick={() => {
						console.log(`Clicked ${a}`);
						v = 'PRIMARY';
					}}
				>
					<Term content={a} />
				</button></mi
			>
			<mo>=</mo>
			<mfrac>
				<mi
					><button
						onclick={() => {
							console.log(`Clicked ${b}`);
							v = 'SECONDARY';
						}}
					>
						<Term content={b} />
					</button></mi
				>
				<mi
					><button
						onclick={() => {
							console.log(`Clicked ${c}`);
							v = 'TERTIARY';
						}}
					>
						<Term content={c} />
					</button></mi
				>
			</mfrac>
		</mrow>
	</math>
{:else if v === 'SECONDARY'}
	<math class="FmtA">
		<mrow>
			<mi><Term content={b} /></mi>
			<mo>=</mo>
			<mi><Term content={a} /></mi>
			<mo>&middot</mo>
			<mi><Term content={c} /></mi>
		</mrow>
	</math>
{:else}
	<math class="FmtA">
		<mrow>
			<mi
				><button
					onclick={() => {
						v = 'TERTIARY';
					}}><Term content={c} /></button
				></mi
			>
			<mo>=</mo>
			<mfrac>
				<mi
					><button
						onclick={() => {
							v = 'SECONDARY';
						}}><Term content={b} /></button
					></mi
				>
				<mi
					><button
						onclick={() => {
							v = 'PRIMARY';
						}}><Term content={a} /></button
					></mi
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
		margin-left: auto;
		margin-right: auto;
	}
</style>

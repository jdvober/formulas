<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { getUseLongValues } from '../../state/mainState.svelte';
	import FmtA from './FmtA.svelte';
	import FmtB from './FmtB.svelte';
	import FmtC from './FmtC.svelte';

	let {
		format,
		initialVariant,
		values,
		subscripts,
		title,
		notes,
	}: {
		format: 'A' | 'B' | 'C';
		initialVariant: 'DEFAULT' | 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
		values: { a: any; b?: any; c?: any; d?: any; e?: any };
		subscripts: {
			a: string | number;
			b: string | number;
			c: string | number;
			d?: string | number;
		};
		title?: string;
		notes?: string;
	} = $props();
	let variant = $state(initialVariant);
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="Formula">
	{#if title !== undefined}
		<u class="title">{title}</u>
	{/if}
	{#if format === 'A'}
		<!-- wrapping the component in a {#key getUseLongValues()} makes sure the component is destroyed and re-rendered when the variant changes! -->
		{#key getUseLongValues()}
			<FmtA
				a={values.a}
				b={values.b}
				c={values.c}
				subscripts={{
					a: subscripts.a,
					b: subscripts.b,
					c: subscripts.c,
				}}
				{variant}
			/>
		{/key}
	{:else if format === 'B'}
		<!-- wrapping the component in a {#key getUseLongValues()} makes sure the component is destroyed and re-rendered when the variant changes! -->
		{#key getUseLongValues()}
			<FmtB
				a={values.a}
				b={values.b}
				c={values.c}
				d={values.d}
				subscripts={{
					a: subscripts.a,
					b: subscripts.b,
					c: subscripts.c,
					d: subscripts.d !== undefined ? subscripts.d : '',
				}}
				{variant}
			/>
		{/key}
	{:else if format === 'C'}
		<!-- wrapping the component in a {#key getUseLongValues()} makes sure the component is destroyed and re-rendered when the variant changes! -->
		{#key getUseLongValues()}
			<FmtC
				a={values.a}
				b={values.b}
				c={values.c}
				d={values.d}
				subscripts={{
					a: subscripts.a,
					b: subscripts.b,
					c: subscripts.c,
					d: subscripts.d !== undefined ? subscripts.d : '',
				}}
				{variant}
			/>
		{/key}
	{/if}
	{#if notes !== undefined}
		<div class="notes">{notes}</div>
	{/if}
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.title {
		align-self: center;
		justify-self: flex-start;
		margin-bottom: 1em;
		font-size: 1.5em;
	}

	.notes {
		align-self: center;
		justify-self: flex-end;
		margin-top: 1em;
		font-size: 1.5em;
	}
	.Formula {
		display: flex;
		flex-direction: column;
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
		overflow-x: auto;
	}
</style>

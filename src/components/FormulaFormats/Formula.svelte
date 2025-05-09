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
	} = $props();
	let variant = $state(initialVariant);
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="Formula">
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
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>

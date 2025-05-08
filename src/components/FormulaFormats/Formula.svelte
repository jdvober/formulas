<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { getUseLongValues } from '../../state/mainState.svelte';
	import FmtA from './FmtA.svelte';
	import FmtB from './FmtB.svelte';

	let {
		format,
		initialVariant,
		values,
	}: {
		format: 'A' | 'B';
		initialVariant: 'DEFAULT' | 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
		values: { a: any; b?: any; c?: any; d?: any; e?: any };
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

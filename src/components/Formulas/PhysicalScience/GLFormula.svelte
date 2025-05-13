<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { findNestedObjectValueById } from '../../../functions/FindNestedObjectValueById.ts';
	import { topicsToggles } from '../../../state/mainState.svelte.ts';
	import Formula from '../../FormulaFormats/Formula.svelte';
	import * as m from '../../Measurements/Measurements.svelte.js';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="GLFormula">
	{#if findNestedObjectValueById(topicsToggles.state(), "Gay-Lussac's Law", 'checkedState') === true}
		<!--Gay-Lussac's Law-->
		<Formula
			format="B"
			initialVariant="DEFAULT"
			values={{
				a: m.TEMPERATURE,
				b: m.PRESSURE,
				c: m.TEMPERATURE,
				d: m.PRESSURE,
			}}
			subscripts={{ a: '1', b: '1', c: '2', d: '2' }}
		/>
	{:else}
		<div></div>
	{/if}
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>

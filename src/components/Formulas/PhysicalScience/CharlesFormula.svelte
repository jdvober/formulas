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
<div class="CharlesFormula">
	{#if findNestedObjectValueById(topicsToggles.state(), "Charles' Law", 'checkedState') === true}
		<!--Boyle's Law-->
		<Formula
			format="B"
			initialVariant="DEFAULT"
			values={{
				a: m.VOLUME,
				b: m.TEMPERATURE,
				c: m.VOLUME,
				d: m.TEMPERATURE,
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

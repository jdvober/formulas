<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { findNestedObjectValueById } from '../../../functions/FindNestedObjectValueById.ts';
	import { topicsToggles } from '../../../state/mainState.svelte.ts';
	import Formula from '../../FormulaFormats/Formula.svelte';
	import * as m from '../../Measurements/Measurements.svelte';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="DensityFormula">
	{#if findNestedObjectValueById(topicsToggles.state(), 'PhysicalScience', 'checkedState') === true || findNestedObjectValueById(topicsToggles.state(), 'Chemistry_PS', 'checkedState') === true || findNestedObjectValueById(topicsToggles.state(), 'Density', 'checkedState') === true}
		<!--Density-->
		<Formula
			format="A"
			initialVariant="DEFAULT"
			values={{ a: m.DENSITY, b: m.MASS, c: m.VOLUME }}
			subscripts={{ a: 'NONE', b: 'NONE', c: 'NONE' }}
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

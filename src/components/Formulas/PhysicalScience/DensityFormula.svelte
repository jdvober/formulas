<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { findNestedObjectValueById } from '../../../functions/FindNestedObjectValueById.ts';
	import Formula from '../../FormulaFormats/Formula.svelte';
	import * as m from '../../Measurements/Measurements.svelte';
	import { getTopicsToggleStates } from './../../../state/mainState.svelte.ts';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="DensityFormula">
	{#if findNestedObjectValueById(getTopicsToggleStates(), 'Density', 'checkedState') === true}
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

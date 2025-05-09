<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { getTopicsToggleStates } from '../../../state/mainState.svelte.ts';
	import Formula from '../../FormulaFormats/Formula.svelte';
	import * as m from '../../Measurements/Measurements.svelte.js';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="PressureFormula">
	{#if getTopicsToggleStates().PS.formulas.chemistry.formulas.pressure.checkedState === true}
		<!--Pressure-->
		<Formula
			format="A"
			initialVariant="DEFAULT"
			values={{ a: m.PRESSURE, b: m.FORCE, c: m.AREA }}
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

<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import Formula from '../../../FormulaFormats/Formula.svelte';
	import * as m from '../../../Measurements/Measurements.svelte.js';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="PressureFormula">
	<!--Pressure-->
	<Formula
		format="A"
		initialVariant="DEFAULT"
		values={{ a: m.PRESSURE, b: m.FORCE, c: m.AREA }}
		subscripts={{ a: 'NONE', b: 'NONE', c: 'NONE' }}
	/>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>

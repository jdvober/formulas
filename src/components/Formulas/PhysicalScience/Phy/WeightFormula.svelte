<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import Formula from '../../../FormulaFormats/Formula.svelte';
	import * as m from '../../../Measurements/Measurements.svelte';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="WeightFormula">
	<!--Weight-->
	<Formula
		format="A"
		initialVariant="SECONDARY"
		values={{ a: m.MASS, b: m.WEIGHT, c: m.ACCELERATION }}
		subscripts={{ a: 'NONE', b: 'NONE', c: 'Gravity' }}
	></Formula>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>

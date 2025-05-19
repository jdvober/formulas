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
<div class="OhmsLawFormula">
	<!--Ohm's Law-->
	<Formula
		format="A"
		initialVariant="SECONDARY"
		values={{ a: m.CURRENT, b: m.VOLTAGE, c: m.RESISTANCE }}
		subscripts={{ a: 'NONE', b: 'NONE', c: 'NONE' }}
	></Formula>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>

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
<div class="ForceGravityFormula">
	<!--Force due to Gravity-->
	<Formula
		format="A"
		initialVariant="SECONDARY"
		values={{ a: m.MASS, b: m.FORCE, c: m.GRAVITATIONAL_ACCELERATION }}
		subscripts={{ a: 'NONE', b: 'Gravity', c: 'NONE' }}
	></Formula>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>

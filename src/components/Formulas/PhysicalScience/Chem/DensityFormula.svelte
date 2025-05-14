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
<div class="DensityFormula">
	<!--Density-->
	<Formula
		format="A"
		initialVariant="DEFAULT"
		values={{ a: m.DENSITY, b: m.MASS, c: m.VOLUME }}
		subscripts={{ a: 'NONE', b: 'NONE', c: 'NONE' }}
	/>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>

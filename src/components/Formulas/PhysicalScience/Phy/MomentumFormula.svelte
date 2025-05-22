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
<div class="SpeedFormula">
	<!--Speed-->
	<Formula
		format="A"
		initialVariant="SECONDARY"
		values={{ a: m.MASS, b: m.MOMENTUM, c: m.VELOCITY }}
		subscripts={{ a: 'NONE', b: 'NONE', c: 'NONE' }}
	/>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>

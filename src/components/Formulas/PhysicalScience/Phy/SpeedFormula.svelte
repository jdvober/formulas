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
		initialVariant="DEFAULT"
		values={{ a: m.SPEED, b: m.DISTANCE, c: m.TIME }}
		subscripts={{ a: 'NONE', b: 'NONE', c: 'NONE' }}
	/>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>

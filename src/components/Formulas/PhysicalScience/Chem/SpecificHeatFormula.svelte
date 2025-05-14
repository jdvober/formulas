<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import Formula from '../../../FormulaFormats/Formula.svelte';
	import * as m from '../../../Measurements/Measurements.svelte';
	import Delta from '../../../Operations/Delta.svelte';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
{#snippet D()}
	<Delta
		f={m.TEMPERATURE}
		subscripts={{ final: 'f', initial: 'i' }}
		colors={{
			f: m.TEMPERATURE.color,
			i: m.TEMPERATURE.color,
			parens: m.TEMPERATURE.color,
		}}
	/>
{/snippet}
<div class="SpecificHeatFormula">
	<!--Specific Heat-->
	<Formula
		format="C"
		initialVariant="DEFAULT"
		values={{
			a: m.THERMAL_ENERGY,
			b: m.MASS,
			c: m.SPECIFIC_HEAT,
			d: D,
		}}
		subscripts={{ a: 'NONE', b: 'NONE', c: 'NONE', d: 'NONE' }}
	/>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>

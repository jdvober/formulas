<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import Formula from '../../../FormulaFormats/Formula.svelte';
	import * as m from '../../../Measurements/Measurements.svelte';
	import { getUseLongValues } from './../../../../state/mainState.svelte.ts';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="GravitationalPotentialEnergyFormula">
	<!--Kinetic Energy-->
	<Formula
		format="C"
		initialVariant="DEFAULT"
		values={{
			a: m.GPE,
			b: m.MASS,
			c: m.GRAVITATIONAL_ACCELERATION,
			d: m.HEIGHT,
		}}
		subscripts={{
			a: 'NONE',
			b: 'NONE',
			c: getUseLongValues() === true ? 'NONE' : 'NONE',
			d: 'NONE',
		}}
	></Formula>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>

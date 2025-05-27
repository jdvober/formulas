<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import Formula from '../../FormulaFormats/Formula.svelte';
	import * as m from '../../Measurements/Measurements.svelte';
	import { getUseLongValues } from './../../../../state/mainState.svelte.ts';
	let name = 'GPE_PS';
	let toggleState = $state(true);

	export const ts: Toggle = $state({
		getName: () => {
			return name;
		},
		isToggled: () => {
			return toggleState;
		},
		toggle: () => (toggleState = toggleState === true ? false : true),
		setToggleState: (newToggleState: boolean) =>
			(toggleState = newToggleState),
	});
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="GravitationalPotentialEnergyFormula">
	<!--Kinetic Energy-->
	<Formula
		title="Gravitational Potential Energy"
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

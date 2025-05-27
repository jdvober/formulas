<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import Formula from "../../FormulaFormats/Formula.svelte";
	import * as m from '../../Measurements/Measurements.svelte';

	let name = 'Ohms_Law_PS';
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
<div class="OhmsLawFormula">
	<!--Ohm's Law-->
	<Formula
		title="Ohm's Law"
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

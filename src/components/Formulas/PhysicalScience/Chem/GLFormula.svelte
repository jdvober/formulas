<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import Formula from '../../FormulaFormats/Formula.svelte';
	import * as m from '../../Measurements/Measurements.svelte';

	let name = 'Gay_Lussac_PS';
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
<div class="GLFormula">
	<!--Gay-Lussac's Law-->
	<Formula
		format="B"
		initialVariant="DEFAULT"
		values={{
			a: m.TEMPERATURE,
			b: m.PRESSURE,
			c: m.TEMPERATURE,
			d: m.PRESSURE,
		}}
		subscripts={{ a: '1', b: '1', c: '2', d: '2' }}
		title="Gay-Lussac's Law"
	/>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>

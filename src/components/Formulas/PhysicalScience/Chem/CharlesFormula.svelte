<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import Formula from '../../FormulaFormats/Formula.svelte';
	import * as m from '../../Measurements/Measurements.svelte';

	let name = 'Charles_Law_PS';
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
<div class="CharlesFormula">
	<!--Boyle's Law-->
	<Formula
		format="B"
		initialVariant="DEFAULT"
		values={{
			a: m.VOLUME,
			b: m.TEMPERATURE,
			c: m.VOLUME,
			d: m.TEMPERATURE,
		}}
		subscripts={{ a: '1', b: '1', c: '2', d: '2' }}
		title="Charles's Law"
	/>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>

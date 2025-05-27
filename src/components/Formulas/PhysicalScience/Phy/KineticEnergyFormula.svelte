<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import Formula from '../../FormulaFormats/Formula.svelte';
	import * as m from '../../Measurements/Measurements.svelte';
	import Superscript from '../../Operations/Superscript.svelte';
	let name = 'Kinetic_Energy_PS';
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
<div class="KineticEnergyFormula">
	<!--Kinetic Energy-->
	{#snippet oneHalf()}
		<math>
			<mfrac>
				<mrow>
					<mn>1</mn>
				</mrow>
				<mrow>
					<mn>2</mn>
				</mrow>
			</mfrac>
		</math>
	{/snippet}
	{#snippet velocitySquared()}
		<Superscript
			base={m.VELOCITY}
			superscriptContent={{
				value: { long: '2', short: '2' },
				color: '#F1FA8C',
			}}
		/>
	{/snippet}
	<Formula
		title="Kinetic Energy"
		format="C"
		initialVariant="DEFAULT"
		values={{
			a: m.KINETIC_ENERGY,
			b: oneHalf,
			c: m.MASS,
			d: velocitySquared,
			coefficient: m.VELOCITY,
		}}
		subscripts={{ a: 'NONE', b: 'NONE', c: 'NONE', d: 'NONE' }}
	></Formula>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>

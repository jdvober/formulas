<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import Formula from '../../FormulaFormats/Formula.svelte';
	import * as m from '../../Measurements/Measurements.svelte';
	import Delta from '../../Operations/Delta.svelte';

	let name = 'SpecificHeat_PS';
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
{#if toggleState === true}
	<div class="SpecificHeatFormula">
		<!--Specific Heat-->
		<Formula
			title="Specific Heat"
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
{/if}

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>

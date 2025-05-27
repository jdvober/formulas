<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script
	module
	lang="ts"
>
	import Formula from '../../FormulaFormats/Formula.svelte';
	import * as m from '../../Measurements/Measurements.svelte';

	let name = 'Density_PS';
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
{#if toggleState === true}
	<div class="DensityFormula">
		<!--Density-->
		<Formula
			format="A"
			initialVariant="DEFAULT"
			values={{ a: m.DENSITY, b: m.MASS, c: m.VOLUME }}
			subscripts={{ a: 'NONE', b: 'NONE', c: 'NONE' }}
			title="Density"
		/>
	</div>
{/if}

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>

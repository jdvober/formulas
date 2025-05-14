<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import BoyleFormula from './BoyleFormula.svelte';
	import CharlesFormula from './CharlesFormula.svelte';
	import DensityFormula from './DensityFormula.svelte';
	import GLFormula from './GLFormula.svelte';
	import PressureFormula from './PressureFormula.svelte';
	import SpecificHeatFormula from './SpecificHeatFormula.svelte';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="PSChemFormulas">
	<div class="header">
		<h1>Chemistry Formulas</h1>
	</div>
	<div class="Formulas">
		<DensityFormula />
		<PressureFormula />
		<BoyleFormula />
		<CharlesFormula />
		<GLFormula />
		<SpecificHeatFormula />
	</div>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.header {
		width: 90vw;
	}
	h1 {
		justify-self: center;
		align-items: center;
		font-size: 4em;
	}
	.Formulas {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
		margin-left: auto;
		margin-right: auto;
		margin-top: 1em;
		border: 1px solid #fafaf2;
		border-radius: 1em;
		overflow-y: auto;
		row-gap: 2vh;
		padding: 2vh;
	}
</style>

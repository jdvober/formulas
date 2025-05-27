<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import UnitInfoBox from './Measurements/UnitInfoBox.svelte';
	import PsChemFormulas from './PhysicalScience/Chem/PSChemFormulas.svelte';
	import PsPhyFormulas from './PhysicalScience/Phy/PSPhyFormulas.svelte';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<!--TODO: Add seperate pages by topic for showing on the board.-->
<div class="formulas-container">
	<div class="Formulas">
		<PsChemFormulas />
		<PsPhyFormulas />
	</div>
	<UnitInfoBox />
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.formulas-container {
		display: flex;
		flex-direction: column;
		width: 100vw;
	}
	.Formulas {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 95vw;
		height: 90vh;
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

<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import * as m from '../Measurements/Measurements.svelte';
	import UnitInfoBox from '../Measurements/UnitInfoBox.svelte';
	import Delta from '../Operations/Delta.svelte';
	import Formula from './Formula.svelte';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<!--TODO: Make categories / be able to select different formulas to display / hide. (FILTER)-->
<div class="formulas-container">
	<UnitInfoBox />
	<div class="Formulas">
		<!--Wave Speed-->
		<Formula
			format="A"
			initialVariant="PRIMARY"
			values={{ a: m.WAVE_SPEED, b: m.FREQUENCY, c: m.WAVELENGTH }}
		></Formula>
		<!--Velocity-->
		{#snippet b1()}
			<Delta
				f={m.POSITION}
				colors={m.POSITION.color}
			/>
		{/snippet}
		{#snippet c()}
			<Delta
				f={m.TIME}
				colors={m.TIME.color}
			/>
		{/snippet}
		<Formula
			format="A"
			initialVariant="PRIMARY"
			values={{ a: m.VELOCITY, b: b1, c: c }}
		></Formula>
	</div>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.formulas-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100vw;
	}
	.Formulas {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 95vw;
		height: 55vh;
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

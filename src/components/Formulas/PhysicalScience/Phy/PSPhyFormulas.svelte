<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import AccelerationFormula from './AccelerationFormula.svelte';
	import ForceFormula from './ForceFormula.svelte';
	import ForceGravityFormula from './ForceGravityFormula.svelte';
	import KineticEnergyFormula from './KineticEnergyFormula.svelte';
	import MomentumFormula from './MomentumFormula.svelte';
	import PowerFormula from './PowerFormula.svelte';
	import SpeedFormula from './SpeedFormula.svelte';
	import VelocityFormula from './VelocityFormula.svelte';
	import WaveSpeedFormula from './WaveSpeedFormula.svelte';
	import WeightFormula from './WeightFormula.svelte';
	import WorkFormula from './WorkFormula.svelte';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="PSChemFormulas">
	<div class="header">
		<h1>Physics Formulas</h1>
	</div>
	<div class="Formulas">
		<SpeedFormula />
		<VelocityFormula />
		<AccelerationFormula />
		<MomentumFormula />
		<ForceFormula />
		<ForceGravityFormula />
		<WeightFormula />
		<WorkFormula />
		<PowerFormula />
		<KineticEnergyFormula />
		<WaveSpeedFormula />
	</div>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.header {
		width: 90vw;
		margin-top: 2em;
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

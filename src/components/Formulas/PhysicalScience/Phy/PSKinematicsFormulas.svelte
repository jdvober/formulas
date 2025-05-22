<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script
	module
	lang="ts"
>
	import AccelerationFormula from './AccelerationFormula.svelte';
	import MomentumFormula from './MomentumFormula.svelte';
	import SpeedFormula from './SpeedFormula.svelte';
	import VelocityFormula from './VelocityFormula.svelte';

	let name = 'Kinematics_PS';
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
<div class="PSKinematicsFormulas">
	{#if toggleState === true}
		<div class="header">
			<h1>Motion (a.k.a. <em>Kinematics</em>)</h1>
		</div>
		<div class="Formulas">
			<SpeedFormula />
			<VelocityFormula />
			<AccelerationFormula />
			<MomentumFormula />
		</div>
	{/if}
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.header {
		width: 100%;
		margin-top: 2em;
	}
	h1 {
		justify-self: center;
		align-items: center;
		font-size: 2em;
	}
	.Formulas {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
		margin-left: auto;
		margin-right: auto;
		margin-top: 1em;
		border-radius: 1em;
		overflow-y: auto;
		row-gap: 2vh;
		padding: 2vh;
	}
</style>

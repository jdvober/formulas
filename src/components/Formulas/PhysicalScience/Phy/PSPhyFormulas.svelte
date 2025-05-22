<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script
	module
	lang="ts"
>
	import PSDynamicsFormulas from './PSDynamicsFormulas.svelte';
	import PsElectricityFormulas from './PSElectricityFormulas.svelte';
	import PSEnergyFormulas from './PSEnergyFormulas.svelte';
	import PSKinematicsFormulas from './PSKinematicsFormulas.svelte';
	import PSWavesFormulas from './PSWavesFormulas.svelte';

	let name = 'Physics_PS';
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
<div class="PSPhysicsFormulas">
	{#if toggleState === true}
		<div class="header">
			<h1>Physics Formulas</h1>
		</div>
		<div class="Formulas">
			<PSKinematicsFormulas />
			<PSDynamicsFormulas />
			<PSEnergyFormulas />
			<PSWavesFormulas />
			<PsElectricityFormulas />
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
		border-radius: 1em;
		overflow-y: auto;
		row-gap: 2vh;
		padding: 2vh;
	}
</style>

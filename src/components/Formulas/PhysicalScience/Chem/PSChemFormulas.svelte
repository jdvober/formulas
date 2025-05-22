<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script
	module
	lang="ts"
>
	import PSGasLawsFormulas from './PSGasLawsFormulas.svelte';
	import PSMatterFormulas from './PSMatterFormulas.svelte';

	let name = 'Chemistry_PS';
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

<div class="PSChemFormulas">
	{#if toggleState === true}
		<div class="header">
			<h1>Chemistry Formulas</h1>
		</div>
		<div class="Formulas">
			<PSMatterFormulas />
			<PSGasLawsFormulas />
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
		column-gap: 2vw;
		padding: 2vh;
	}
</style>

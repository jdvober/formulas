<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { getUnitInfo } from '../../state/mainState.svelte';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="UnitInfoBox">
	<h2 class="header">Units</h2>
	<div class="measured-in">
		{getUnitInfo().value.long !== ''
			? `${getUnitInfo().value.long} is measured in ${getUnitInfo().units.long}`
			: ''}
	</div>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.UnitInfoBox {
		height: 4em;
		border: 1px solid white;
		width: 90vw;
		justify-content: center;
		justify-self: center;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.header {
		margin-left: auto;
		margin-right: auto;
		border: 1px solid red;
		width: 10vw;
		display: flex;
		justify-content: center;
	}

	.measured-in {
		border: 1px solid yellow;
		min-height: 2em;
	}
</style>

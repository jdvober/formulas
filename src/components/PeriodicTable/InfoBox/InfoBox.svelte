<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { infoBox } from '../../../state/periodicTableState.svelte';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div
	class="InfoBox"
	style:background={infoBox.info.background}
	style:color={infoBox.info.color}
	style:border={`3px solid ${infoBox.info.color}`}
>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<div class="name">{infoBox.info.name}</div>
	<div
		class="symbol"
		style:border={`2px solid ${infoBox.info.color}`}
		style:color={infoBox.info.color}
	>
		{infoBox.info.symbol}
	</div>
	<img
		src={infoBox.info.bohrModelImage}
		alt={`Bohr model of ${infoBox.info.name}`}
	/>
	<div><em><b>Atomic Number:</b></em> {infoBox.info.number}</div>
	<div><em><b>Mass:</b></em> {infoBox.info.atomicMass}</div>
	<span class="description"
		><em><u><b>Description:</b></u></em> {infoBox.info.summary}</span
	>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.InfoBox {
		position: absolute;
		top: 7vh;
		left: 1vw;
		border-radius: 1.5vmin;
		width: 23vw;
		height: 90vh;
		display: flex;
		flex-direction: column;
		padding: 1vmin;
		overflow-y: auto;
	}
	.name {
		justify-self: center;
		align-self: center;
		font-size: 2em;
	}
	.symbol {
		justify-self: center;
		align-self: center;
		font-size: 2em;
		border-radius: 0.25em;
		width: 1.5em;
		height: 1.5em;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.description {
		display: flex;
		flex-direction: column;
	}
	img {
		margin: 0.5em;
		width: 50%;
		justify-self: center;
		align-self: center;
		border-radius: 1.5em;
		-webkit-filter: invert(1);
		filter: invert(1);
	}
</style>

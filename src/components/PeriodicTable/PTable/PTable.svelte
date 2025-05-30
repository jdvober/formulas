<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { elementInfo } from '../ElementInfo.svelte';
	import ElementBox from '../Element/ElementBox.svelte';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->

<!----------------------------------------------------------------->
<div class="PeriodicTable">
	{#each elementInfo as elem}
		<div
			class="elem"
			style:grid-column-start={elem.xpos}
		>
			<ElementBox element={elem} />
		</div>
	{/each}
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.PeriodicTable {
		display: grid;
		row-gap: 1vmin;
		column-gap: 1vmin;
		max-width: 83vw;
		margin-top: 0.5vh;
	}

	.elem {
		width: 8vmin;
		height: 8vmin;
	}
</style>

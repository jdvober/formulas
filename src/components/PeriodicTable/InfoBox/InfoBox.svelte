<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { infoBox } from '../../../state/periodicTableState.svelte';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="InfoBox">
	<!-- svelte-ignore a11y_consider_explicit_label -->
	{infoBox.info.name}
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.InfoBox {
		position: absolute;
		top: 21vh;
		left: 17vw;
		border: 1px solid red;
		border-radius: 1.5vmin;
		width: 47vw;
		height: 17vh;
	}
</style>

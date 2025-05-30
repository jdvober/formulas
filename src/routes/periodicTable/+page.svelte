<script lang="ts">
	import InfoBox from '../../components/PeriodicTable/InfoBox/InfoBox.svelte';
	import PTable from '../../components/PeriodicTable/PTable/PTable.svelte';
</script>

<div class="container">
	<InfoBox />
	<PTable />
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr 6fr;
		column-gap: 1vw;
	}
</style>

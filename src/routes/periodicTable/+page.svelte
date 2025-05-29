<script lang="ts">
	import InfoBox from '../../components/PeriodicTable/InfoBox/InfoBox.svelte';
	import PeriodicTable from '../../components/PeriodicTable/PeriodicTable.svelte';
	import TopInfo from '../../components/PeriodicTable/TopInfo/TopInfo.svelte';
</script>

<div class="container">
	<div class="header">Header</div>
	<div class="pt-top"><TopInfo /></div>
	<div class="PTContainer"><PeriodicTable /></div>
	<InfoBox />
</div>

<style>
	.header {
		height: 10vh;
	}

	.PTContainer {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 90vh;
	}
</style>

<script lang="ts">
	import { elementInfo } from '../../components/PeriodicTable/ElementInfo.svelte';
</script>

<div class="pt-container">
	{#each elementInfo as element}
		<div class="element" style:grid-column-start={element.xpos}>{element.symbol}</div>
	{/each}
</div>

<style>
	.pt-container {
		border: 1px solid red;
		width: 80vw;
		height: 100vh;
		display: grid;
		grid-template-columns: repeat(50px, 18);
		grid-template-rows: repeat(50px, 11);
	}

	.element {
		color: cyan;
		width: 8vmin;
		height: 8vmin;
		border: 1px solid white;
	}
</style>

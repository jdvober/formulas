<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { onMount } from 'svelte';

	// Need to wait for window to load before using these
	let width = $state(0);
	let height = $state(0);
	onMount(() => {
		width = window.innerWidth;
		height = window.innerHeight;
	});

	const getPTXPos = (gridPositionX: number | null) => {
		return `${(gridPositionX ?? 0) * (width / 25)}px`;
	};

	const getPTYPos = (gridPositionY: number | null) => {
		return `${(gridPositionY ?? 0) * 25}%`;
	};

	let charges = [
		{ xpos: 0, ypos: 0, charge: { sign: '+', val: 1 } },
		{ xpos: 1, ypos: 1, charge: { sign: '+', val: 2 } },
		{ xpos: 2, ypos: 3, charge: { sign: '?', val: null } },
		{ xpos: 3, ypos: 3, charge: { sign: '?', val: null } },
		{ xpos: 4, ypos: 3, charge: { sign: '?', val: null } },
		{ xpos: 5, ypos: 3, charge: { sign: '?', val: null } },
		{ xpos: 6, ypos: 3, charge: { sign: '?', val: null } },
		{ xpos: 7, ypos: 3, charge: { sign: '?', val: null } },
		{ xpos: 8, ypos: 3, charge: { sign: '?', val: null } },
		{ xpos: 9, ypos: 3, charge: { sign: '?', val: null } },
		{ xpos: 10, ypos: 3, charge: { sign: '?', val: null } },
		{ xpos: 11, ypos: 3, charge: { sign: '?', val: null } },
		{ xpos: 12, ypos: 1, charge: { sign: '+', val: 3 } },
		{ xpos: 13, ypos: 1, charge: { sign: '±', val: 4 } },
		{ xpos: 14, ypos: 1, charge: { sign: '-', val: 3 } },
		{ xpos: 15, ypos: 1, charge: { sign: '-', val: 2 } },
		{ xpos: 16, ypos: 1, charge: { sign: '-', val: 1 } },
		{ xpos: 17, ypos: 0, charge: { sign: null, val: 0 } },
	];
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="TopInfo">
	{#each charges as charge}
		<div
			class="charge"
			style:left={getPTXPos(charge.xpos)}
			style:top={getPTYPos(charge.ypos)}
		>
			<div class="charge-text">Charge</div>
			<div class="charge-number">
				{charge.charge.sign}{charge.charge.val}
			</div>
		</div>
	{/each}
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.TopInfo {
		position: absolute;
		left: 26vw;
		top: 6vh;
		width: 71.8vw;
		height: 34vh;
	}
	.charge {
		font-family: 'Atkinson Hyperlegible Next';
		font-style: normal;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;
		width: 8vmin;
		height: 8vmin;
		background-color: none;
		color: #f8f8f2;
		font-size: 2em;
	}
	.charge-text {
		font-family: 'Atkinson Hyperlegible Next';
		font-size: 0.5em;
	}
	.charge-number {
		font-family: 'Atkinson Hyperlegible Next';
		font-size: 1em;
	}
</style>

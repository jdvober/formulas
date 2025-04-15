<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { display } from 'mathlifier';

	// Add any JavaScript logic here if needed
	const { a = '?', b = '?', c = '?' } = $props();
	const fmta = `${a}=\\frac{${b}}{${c}}`;
	const fmtb = `${b}=${a} \\cdot ${c}`;
	const fmtc = `${c}=${a} \\cdot ${b}`;
	let choice = $state('a');
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="FormulaA container">
	<div class="math border-4">
		{@html display(choice === 'a' ? fmta : choice === 'b' ? fmtb : fmtc)}
	</div>
	<div class="buttonContainer">
		<button
			class="solveButton"
			onclick={() => {
				choice = 'a';
			}}>{`Solve for ${a}`}</button
		>
		<button
			class="solveButton"
			onclick={() => {
				choice = 'b';
			}}>{`Solve for ${b}`}</button
		>
		<button
			class="solveButton"
			onclick={() => {
				choice = 'c';
			}}>{`Solve for ${c}`}</button
		>
	</div>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.math {
		display: flex;
		flex-direction: row;
		font-size: 200%;
		height: 15vh;
		align-items: center;
		justify-content: center;
	}

	.buttonContainer {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.solveButton {
		border: 2px solid red;
		padding: 5px;
		background-color: blue;
		color: white;
	}
</style>

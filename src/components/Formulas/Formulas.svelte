<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import FormatA from './FormatA.svelte';
	import Formula from './Formula.svelte';

	const propsToPassDown = {
		str: 'Test String',
	};
	let x = $state(1);

	const formulaStrings = $derived([
		`ax^2+bx+c=0`,
		`speed = \\frac{distance}{time}`,
		`\\textcolor{red}{volume_{${x}}} \\cdot \\textcolor{green}{temperature_2} = \\textcolor{blue}{termperature_1} \\cdot \\textcolor{purple}{volume_2}`,
	]);
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="Formulas container">
	{#each formulaStrings as formula}
		<Formula
			{...propsToPassDown}
			str={formula}
		/>
	{/each}
	<button
		onclick={() => {
			x++;
		}}>Increment</button
	>
	<FormatA
		a={'a'}
		b={'b'}
		c={'c'}
	/>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style>
	/* Add any CSS styling here if needed */
	.Formulas {
		align-items: center;
		width: 100vw;
	}
</style>

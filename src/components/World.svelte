<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	// Add any JavaScript logic here if needed
	let count = $state(0);
	let numbers = $state([1, 2, 3, 4]);
	const increment = () => {
		count += 1;
	};
	const addNumber = () => {
		numbers.push(numbers.length + 1);
	};
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<button
	class="incrementButton"
	onclick={increment}
>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

<button
	class="addNumberButton"
	onclick={addNumber}>Add to array</button
>
<div>{numbers}</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any CSS styling here if needed */
	.incrementButton {
		border: 1px solid black;
		width: 50vw;
	}
</style>

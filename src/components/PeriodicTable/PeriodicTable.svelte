<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { elements } from '../PeriodicTable/elements.svelte';
	import Period from './Period/Period.svelte';

	let periodNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	let getPeriod = (elems: typeof elements, periodNumber: number) => {
		return elems.filter((elem) => {
			return elem.period === periodNumber;
		});
	};
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->

<!----------------------------------------------------------------->
<div class="PeriodicTable">
	{#each periodNumbers as periodNumber}
		<Period period={getPeriod(elements, periodNumber)} />
	{/each}
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.PeriodicTable {
		width: 87vw;
	}
</style>

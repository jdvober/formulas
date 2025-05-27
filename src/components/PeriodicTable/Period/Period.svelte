<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import Element from '../Element/Element.svelte';
	let {
		period,
	}: {
		period: {
			name: string;
			symbol: string;
			atomicNumber: number;
			period: number;
			group: number;
			location: string;
			color: string;
		}[];
	} = $props();

	let groupNumbers = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
	];

	let getElement = (p: typeof period, g: number) => {
		let elements = p.filter((elem) => {
			return elem.group === g;
		});

		if (elements.length < 1) {
			// No elements found that match the period / group.  Return a blank space instead.
			return {
				name: '',
				symbol: '',
				atomicNumber: 0,
				period: 0,
				group: 0,
				location: '',
				color: 'rgb(0,0,0,0)',
			};
		}

		// return the first found element (there really should only be one.)
		return elements[0];
	};
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="Period">
	{#each groupNumbers as groupNumber}
		<Element element={getElement(period, groupNumber)} />
	{/each}
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */

	.Period {
		display: flex;
		flex-basis: row wrap;
		margin-bottom: 1vmin;
		column-gap: 1vmin;
		justify-content: center;
	}
</style>

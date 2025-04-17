<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import FormatA from './FormatA.svelte';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="Formulas container">
	{#snippet newA()}
		<FormatA
			a={{
				term: { value: 'speed', color: 'red' },
				sub: { value: '', color: 'red' },
			}}
			b={{
				term: { value: 'distance', color: 'blue' },
				sub: { value: '', color: 'blue' },
			}}
			c={{
				term: { value: 'time', color: 'green' },
				sub: { value: '', color: 'green' },
			}}
		/>
	{/snippet}

	<FormatA
		a={newA}
		b={{
			term: { value: 'force', color: 'yellow' },
			sub: { value: '', color: 'yellow' },
		}}
		c={{
			term: { value: 'area', color: 'purple' },
			sub: { value: '', color: 'purple' },
		}}
	></FormatA>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style>
	/* Add any CSS styling here if needed */
</style>

<script lang="ts">
	import Multiplication from '../../components/Formulas/Multiplication.svelte';

	let term1 = 'x';
	let term2 = 'y';
	let term3 = 'z';
	let term4 = 'p';
</script>

<Multiplication
	aColor="red"
	bColor="blue"
>
	{#snippet a()}
		<Multiplication
			a={term1}
			b={term2}
			aColor="orange"
			bColor="green"
		/>
	{/snippet}
	{#snippet b()}
		<Multiplication
			a={term3}
			b={term4}
			aColor="yellow"
			bColor="purple"
		/>
	{/snippet}
</Multiplication>

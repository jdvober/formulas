<script lang="ts">
	import Division from '../../components/Formulas/Division.svelte';
	import Equals from '../../components/Formulas/Equals.svelte';
	import Multiplication from '../../components/Formulas/Multiplication.svelte';

	let term1 = 'a';
	let term2 = 'b';
	let term3 = 'c';
	let term4 = 'd';
	let term5 = 'w';
	let term6 = 'x';
	let term7 = 'y';
	let term8 = 'z';
</script>

<Equals>
	{#snippet lhs()}
		<Multiplication colors={{ a: 'red', b: 'green', parens: 'blue' }}>
			{#snippet a()}
				<Multiplication
					a={term1}
					b={term2}
					colors={{ a: 'firebrick', b: 'gold', parens: 'dodgerblue' }}
				/>
			{/snippet}
			{#snippet b()}
				<Division
					a={term3}
					b={term4}
					colors={{
						a: 'lightgray',
						b: 'slateblue',
						parens: 'violet',
					}}
				/>
			{/snippet}
		</Multiplication>
	{/snippet}
	{#snippet rhs()}
		<Multiplication colors={{ a: 'tomato', b: 'green', parens: 'blue' }}>
			{#snippet a()}
				<Multiplication
					a={term5}
					b={term6}
					colors={{
						a: 'crimson',
						b: 'darkolivegreen',
						parens: 'lightseagreen',
					}}
				/>
			{/snippet}
			{#snippet b()}
				<Division
					a={term7}
					b={term8}
					colors={{ a: 'lime', b: 'navy', parens: 'orangered' }}
				/>
			{/snippet}
		</Multiplication>
	{/snippet}
</Equals>

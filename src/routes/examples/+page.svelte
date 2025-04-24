<script lang="ts">
	import Division from '../../components/Operations/Division.svelte';
	import Equals from '../../components/Operations/Equals.svelte';
	import Multiplication from '../../components/Operations/Multiplication.svelte';
	import Subscript from '../../components/Operations/Subscript.svelte';
	import Superscript from '../../components/Operations/Superscript.svelte';
	import Delta from './../../components/Operations/Delta.svelte';
	import Root from './../../components/Operations/Root.svelte';

	let term1 = 'a';
	let term2 = 'b';
	let term3 = 'c';
	let term4 = 'd';
	let term5 = 'w';
	let term6 = 'x';
	let term7 = 'y';
	let term8 = 'z';
</script>

<Root rootNumber={3}>
	{#snippet content()}
		<Equals>
			{#snippet lhs()}
				<Multiplication
					colors={{ a: 'red', b: 'green', parens: 'blue' }}
				>
					{#snippet a()}
						<Multiplication
							a={term1}
							b={term2}
							colors={{
								a: 'firebrick',
								b: 'gold',
							}}
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
				<Multiplication
					colors={{ a: 'tomato', b: 'green', parens: 'blue' }}
				>
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
							colors={{
								a: 'lime',
								b: 'navy',
							}}
						/>
					{/snippet}
				</Multiplication>
			{/snippet}
		</Equals>
	{/snippet}
</Root>

<Superscript superscriptContent={5}>
	{#snippet base()}
		<Multiplication
			a={term1}
			b={term2}
			colors={{
				a: 'firebrick',
				b: 'gold',
				parens: 'dodgerblue',
			}}
		/>
	{/snippet}
</Superscript>

<Subscript subscriptContent={5}>
	{#snippet base()}
		<Multiplication
			a={term1}
			b={term2}
			colors={{
				a: 'firebrick',
				b: 'gold',
				parens: 'dodgerblue',
			}}
		/>
	{/snippet}
</Subscript>
<Delta
	finalContent={5}
	colors={{ parens: 'blue' }}
/>

<Delta
	finalContent={5}
	colors={{ parens: 'blue' }}
>
	{#snippet initialContent()}
		<Subscript
			base="Velocity"
			subscriptContent="Initial"
		/>
	{/snippet}
</Delta>

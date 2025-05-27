<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import Term from '../Term.svelte';
	const {
		a,
		b,
		colors,
		subscripts,
	}: {
		a: any;
		b: any;
		colors: { a: string; b: string; parens?: string };
		subscripts: SubS;
	} = $props();
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<math
	display="block"
	class="Multiplication container"
>
	<mrow>
		{#if colors.parens !== undefined}
			{#if colors.parens === 'hidden'}
				<mphantom>(</mphantom>
			{:else}
				<mo
					class="open-parens"
					style:color={colors.parens}>(</mo
				>
			{/if}
		{:else}
			<mn></mn>
		{/if}
		<Term
			content={a}
			color={colors.a}
			subscript={subscripts.a}
		/>
		<mo>&middot</mo>
		<Term
			content={b}
			color={colors.b}
			subscript={subscripts.b}
		/>
		{#if colors.parens !== undefined}
			{#if colors.parens === 'hidden'}
				<mphantom>)</mphantom>
			{:else}
				<mo
					class="close-parens"
					style:color={colors.parens}>)</mo
				>
			{/if}
		{:else}
			<mn></mn>
		{/if}
	</mrow>
</math>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>

<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import Term from '../Term.svelte';
	const {
		a,
		b,
		colors,
	}: { a: any; b: any; colors: { a: string; b: string; parens?: string } } =
		$props();
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
			<mo style:color={colors.parens}>(</mo>
		{:else}
			<mphantom>(</mphantom>
		{/if}
		<Term
			content={a}
			color={colors.a}
		/>
		<mo>&middot</mo>
		<Term
			content={b}
			color={colors.b}
		/>
		{#if colors.parens !== undefined}
			<mo style:color={colors.parens}>)</mo>
		{:else}
			<mphantom>)</mphantom>
		{/if}
	</mrow>
</math>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>

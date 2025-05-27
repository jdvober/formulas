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
<math class="Division container">
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
		<mfrac>
			<mrow>
				<Term
					content={a}
					color={colors.a}
					subscript=""
				/>
			</mrow>
			<mrow>
				<Term
					content={b}
					color={colors.b}
					subscript=""
				/>
			</mrow>
		</mfrac>
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
	.open-parens {
		margin-right: 0.125em;
	}
	.close-parens {
		margin-left: 0.125em;
	}
</style>

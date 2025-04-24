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
			<mo style:color={colors.parens}>(</mo>
		{:else}
			<mphantom>(</mphantom>
		{/if}
		<mfrac>
			<mrow>
				<Term
					content={a}
					color={colors.a}
				/>
			</mrow>
			<mrow>
				<Term
					content={b}
					color={colors.b}
				/>
			</mrow>
		</mfrac>
		{#if colors.parens !== undefined}
			<mo style:color={colors.parens}>)</mo>
		{:else}
			<mphantom
				form="prefix"
				class="close-parens-invis">)</mphantom
			>
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

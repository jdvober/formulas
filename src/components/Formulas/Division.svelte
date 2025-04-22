<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	const {
		a,
		b,
		colors,
	}: { a: any; b: any; colors: { a: string; b: string; parens: string } } =
		$props();
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<math
	class="Division container"
	display="block"
>
	<mrow>
		<mfrac class="test">
			<mrow>
				{#if typeof a === 'string'}
					<mi style:color={colors.a}>{@html a}</mi>
				{:else}
					{@render a()}
				{/if}
			</mrow>
			<mrow>
				{#if typeof b === 'string'}
					<mi
						class={'test'}
						style:font-size="3em"
						style:color={colors.b}>{@html b}</mi
					>
				{:else}
					{@render b()}
				{/if}
			</mrow>
		</mfrac>
	</mrow>
</math>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */

	mfrac {
		font-size: 1em;
	}
</style>

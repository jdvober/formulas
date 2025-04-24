<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	const {
		rootNumber,
		content,
	}: {
		rootNumber: any;
		content: any;
	} = $props();
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<math class="Root container">
	<mrow>
		<mroot>
			<mrow>
				{#if typeof content === 'string'}
					<mi>{@html content}</mi>
				{:else if typeof content === 'number'}
					<mn>{@html content}</mn>
				{:else}
					{@render content()}
				{/if}
			</mrow>
			{#if rootNumber !== undefined}
				{#if typeof rootNumber === 'string'}
					<mi>{@html rootNumber}</mi>
				{:else if typeof rootNumber === 'number'}
					<mn>{rootNumber}</mn>
				{/if}
			{:else}
				<mn>2</mn>
			{/if}
		</mroot>
	</mrow>
</math>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>

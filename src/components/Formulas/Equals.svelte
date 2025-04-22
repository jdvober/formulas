<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	const { lhs, rhs }: { lhs: any; rhs: any } = $props();
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<math class="Equals container">
	<mrow>
		{#if typeof lhs === 'string'}
			<mi>{@html lhs}</mi>
		{:else}
			{@render lhs()}
		{/if}
		<mrow class="equalsSign"><mo>=</mo></mrow>
		{#if typeof rhs === 'string'}
			<mi>{@html rhs}</mi>
		{:else}
			{@render rhs()}
		{/if}
	</mrow>
</math>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	math :global {
		math-style: compact;
		mi {
			font-size: 3em;
		}
		mo {
			font-size: 3em;
		}
	}
	.equalsSign {
		padding: 0 0.5rem;
	}
</style>

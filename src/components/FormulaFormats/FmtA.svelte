<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import Division from '../Operations/Division.svelte';
	import Equals from '../Operations/Equals.svelte';
	import Term from '../Term.svelte';

	let {
		a: A,
		b: B,
		c: C,
	}: {
		a: { value: string; color: string };
		b: { value: string; color: string };
		c: { value: string; color: string };
	} = $props();
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="FmtA container">
	<Equals>
		{#snippet lhs()}
			<Term
				content={A.value}
				color={A.color}
			/>
		{/snippet}
		{#snippet rhs()}
			<Division colors={{ a: 'red', b: 'blue' }}>
				{#snippet a()}
					<Term
						content={B.value}
						color={B.color}
					/>
				{/snippet}
				{#snippet b()}
					<Term
						content={C.value}
						color={C.color}
					/>
				{/snippet}
			</Division>
		{/snippet}
	</Equals>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>

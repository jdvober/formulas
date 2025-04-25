<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import Term from '../Term.svelte';
	import Subscript from './Subscript.svelte';
	type subscriptsType = { final: string | number; initial: string | number };
	let props = $props();
	let f = props.f;
	let i = props.i !== undefined ? props.i : null;
	let colors = props.colors !== undefined ? props.colors : null;
	let subscripts: subscriptsType =
		props.subscripts !== undefined ? props.subscripts : null;
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<math
	display="block"
	class="Delta"
>
	<mrow>
		{#if i === null && i !== undefined}
			<mo style:color={colors.parens}>Δ</mo>
			<Term
				content={f}
				color={colors.f}
			/>
		{:else}
			{#if colors.parens !== null && colors.parens !== undefined}
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
			<Subscript
				base={f}
				baseColor={colors.f}
				subscriptContent={subscripts.final}
				subColor={colors.f}
			/>
			<mo>-</mo>
			<Subscript
				base={i}
				baseColor={colors.i}
				subscriptContent={subscripts.initial}
				subColor={colors.i}
			/>
			{#if colors.parens !== null && colors.parens !== undefined}
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
		{/if}
	</mrow>
</math>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>

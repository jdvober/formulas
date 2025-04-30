<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { blankUnitInfo, setUnitInfo } from '../../state/mainState.svelte';
	import Term from '../Term.svelte';
	import Subscript from './Subscript.svelte';
	type subscriptsType = { final: string | number; initial: string | number };
	let props = $props();
	let final = props.f;
	let initial = props.i !== undefined ? props.i : null;
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
		{#if initial === null && initial !== undefined}
			<mo style:color={colors.parens}>Δ</mo>
			<button
				onmouseenter={() => {
					setUnitInfo(final);
				}}
				onmouseleave={() => {
					setUnitInfo(blankUnitInfo);
				}}
			>
				<Term
					content={final}
					color={colors.f}
				/>
			</button>
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
				base={final}
				baseColor={colors.f}
				subscriptContent={subscripts.final}
				subColor={colors.f}
			/>
			<mo>-</mo>
			<Subscript
				base={initial}
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

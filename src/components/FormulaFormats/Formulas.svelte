<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { getUseLongValues } from '../../state/mainState.svelte';
	import * as m from '../Measurements/Measurements.svelte';
	import Delta from '../Operations/Delta.svelte';
	import Formula from './Formula.svelte';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<!--TODO: Make categories / be able to select different formulas to display / hide. (FILTER)-->
<div class="Formulas">
	<!--Density-->
	<Formula
		format="A"
		initialVariant="PRIMARY"
		values={{ a: m.DENSITY, b: m.MASS, c: m.VOLUME }}
	/>
	<!--Pressure-->
	<Formula
		format="A"
		initialVariant="PRIMARY"
		values={{ a: m.PRESSURE, b: m.FORCE, c: m.AREA }}
	/>
	<!--Speed-->
	<Formula
		format="A"
		initialVariant="PRIMARY"
		values={{ a: m.SPEED, b: m.DISTANCE, c: m.TIME }}
	/>
	<!--Velocity-->
	{#snippet b1()}
		<Delta
			f={m.POSITION}
			subscripts={{ final: 'f', initial: 'i' }}
			colors={{
				f: m.POSITION.color,
				i: m.POSITION.color,
				parens: m.POSITION.color,
			}}
		/>
	{/snippet}
	{#snippet c()}
		<Delta
			f={getUseLongValues() === true
				? m.TIME.value.long
				: m.TIME.value.short}
			subscripts={{ final: 'f', initial: 'i' }}
			colors={{
				f: m.TIME.color,
				i: m.TIME.color,
				parens: m.TIME.color,
			}}
		/>
	{/snippet}
	<Formula
		format="A"
		initialVariant="PRIMARY"
		values={{ a: m.VELOCITY, b: b1, c: c }}
	></Formula>

	{#snippet b2()}
		<Delta
			f={m.VELOCITY}
			subscripts={{ final: 'f', initial: 'i' }}
			colors={{
				f: m.VELOCITY.color,
				i: m.VELOCITY.color,
				parens: m.VELOCITY.color,
			}}
		/>
	{/snippet}

	<!--Acceleration-->
	<Formula
		format="A"
		initialVariant="PRIMARY"
		values={{ a: m.ACCELERATION, b: b2, c: c }}
	></Formula>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.Formulas {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 95vw;
		justify-content: space-evenly;
	}
</style>

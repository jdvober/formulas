<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { getUseLongValues } from '../../state/mainState.svelte';
	import * as m from '../Measurements/Measurements.svelte';
	import Delta from '../Operations/Delta.svelte';
	import FmtA from './FmtA.svelte';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="Formulas">
	<!--Density-->
	<div class="formula">
		<FmtA
			a={m.DENSITY}
			b={m.MASS}
			c={m.VOLUME}
		/>
	</div>
	<!--Pressure-->
	<div class="formula">
		<FmtA
			a={m.PRESSURE}
			b={m.FORCE}
			c={m.AREA}
		/>
	</div>
	<!--Speed-->
	<div class="formula">
		<FmtA
			a={m.SPEED}
			b={m.DISTANCE}
			c={m.TIME}
		/>
	</div>
	<!--Velocity-->
	<div class="formula">
		<FmtA a={m.VELOCITY}>
			{#snippet b()}
				<Delta
					f={getUseLongValues() === true
						? m.POSITION.value.long
						: m.POSITION.value.short}
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
		</FmtA>
	</div>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.Formulas {
		border: 1px solid red;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 95vw;
		justify-content: space-evenly;
	}
</style>

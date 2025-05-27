<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import Formula from '../../FormulaFormats/Formula.svelte';
	import * as m from '../../Measurements/Measurements.svelte';
	import Delta from '../../Operations/Delta.svelte';
	let name = 'Acceleration_PS';
	let toggleState = $state(true);

	export const ts: Toggle = $state({
		getName: () => {
			return name;
		},
		isToggled: () => {
			return toggleState;
		},
		toggle: () => (toggleState = toggleState === true ? false : true),
		setToggleState: (newToggleState: boolean) =>
			(toggleState = newToggleState),
	});
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="AccelerationFormula">
	{#snippet bAcceleration()}
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
	{#snippet c()}
		<Delta
			f={m.TIME}
			colors={m.TIME.color}
		/>
	{/snippet}

	<!--Acceleration-->
	<Formula
		title="Acceleration"
		format="A"
		initialVariant="DEFAULT"
		values={{ a: m.ACCELERATION, b: bAcceleration, c: c }}
		subscripts={{ a: 'NONE', b: 'NONE', c: 'NONE' }}
	></Formula>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>

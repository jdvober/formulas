<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script
	module
	lang="ts"
>
	import { fly } from 'svelte/transition';
	import {
		clickOutside,
		tapOutside,
	} from '../../../functions/ClickOutside.svelte';
	import { getUnitInfo } from '../../../state/mainState.svelte';

	let isVisible = $state(false);
	let coordinates = $state({ x: 0, y: 0 });
	export const unitInfoBoxVisibilityState = $state({
		isVisible: () => {
			return isVisible;
		},
		setVisibility: (newVisibilityState: boolean) => {
			isVisible = newVisibilityState;
		},
		toggle: () => (isVisible = isVisible === true ? false : true),
	});
	export const unitInfoBoxCoordinatesState = $state({
		getCoordinates: () => {
			return coordinates;
		},
		setCoordinates: (newCoordinates: { x: number; y: number }) => {
			coordinates = newCoordinates;
		},
	});
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->

{#if isVisible === true}
	<!--// Re-animate whenever the unit info changes, instead of only when the box-->
	<!--is mounted to the DOM-->
	{#key getUnitInfo()}
		<div
			class="UnitInfoBoxContainer"
			style:top={`${(unitInfoBoxCoordinatesState.getCoordinates().y / window.innerHeight) * 100 - 26}vh`}
			transition:fly={{ y: 60, duration: 200 }}
		>
			<div
				class="UnitInfoBox"
				role="button"
				tabindex="0"
				onclick={() => {
					unitInfoBoxVisibilityState.setVisibility(false);
				}}
				use:clickOutside={() => {
					unitInfoBoxVisibilityState.setVisibility(false);
				}}
				use:tapOutside={() => {
					unitInfoBoxVisibilityState.setVisibility(false);
				}}
			>
				{#if getUnitInfo().value.long !== ''}
					{@render definition()}

					{@render units()}
					{@render example()}
				{/if}
			</div>
		</div>
	{/key}
{/if}

{#snippet definition()}
	<div class="container">
		<u
			class="header"
			style:font-size="1.25em"
		>
			{`DEFINITION`}
		</u>
		<div class="content">
			<div>
				<span style:color={getUnitInfo().color}
					>{`${getUnitInfo().value.long}`}</span
				><span class="space-L-R"></span><span
					>{`is ${getUnitInfo().description}`}</span
				>
			</div>
		</div>
	</div>
{/snippet}
{#snippet units()}
	<div class="container">
		<u
			class="header"
			style:font-size="1.25rem"
			style:margin-left="auto"
			style:margin-right="auto"
		>
			{`UNITS`}
		</u>
		<div class="content">
			<div class="unit-container">
				<div>
					<ms
						style:font-size="1rem"
						style:color={getUnitInfo().color}
						>{getUnitInfo().value.long}</ms
					>
					<ms
						class="space-L-R"
						style:font-size="1rem">is measured in</ms
					>
				</div>
				<div
					class="row"
					style:margin-top="0.5em"
				>
					{@render unitsLong()}
					<div class="space-L-R"></div>
					<ms
						class="space-L-R"
						style:font-size="1rem">a.k.a.</ms
					>
					<div class="space-L-R"></div>
					{@render unitsShort()}
				</div>
			</div>
		</div>
	</div>
{/snippet}
{#snippet example()}
	<div class="container">
		<u
			class="header"
			style:font-size="1.25em"
		>
			{`EXAMPLE`}
		</u>

		<mn class="content">
			<div class="row">
				<mn style:font-size="2rem">{getUnitInfo().exampleValue}</mn>
				<div class="space-L-R"></div>
				{@render unitsShort()}
			</div>
		</mn>
	</div>
{/snippet}
{#snippet frac(n: string, d: string)}
	<math class="unit-fraction">
		<mfrac>
			<mrow><mn style:color={getUnitInfo().color}>{n}</mn></mrow>
			<mrow><mn style:color={getUnitInfo().color}>{d}</mn></mrow>
		</mfrac>
	</math>
{/snippet}
{#snippet unitsShort()}
	{#if getUnitInfo().units.type === 'SIMPLE'}
		<em style:color={getUnitInfo().color}
			>{getUnitInfo().units.short.value1}</em
		>
	{:else if getUnitInfo().units.type === 'FRACTIONAL'}
		{@render frac(
			getUnitInfo().units.short.value1,
			getUnitInfo().units.short.value2
		)}
	{:else}
		<div></div>
	{/if}
{/snippet}
{#snippet unitsLong()}
	{#if getUnitInfo().units.type === 'SIMPLE'}
		<em style:color={getUnitInfo().color}
			>{getUnitInfo().units.long.value1}</em
		>
	{:else if getUnitInfo().units.type === 'FRACTIONAL'}
		{@render frac(
			getUnitInfo().units.long.value1,
			getUnitInfo().units.long.value2
		)}
	{:else}
		<div></div>
	{/if}
{/snippet}

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */

	.UnitInfoBoxContainer {
		position: fixed;
		left: 4.75vw;
	}

	.UnitInfoBox {
		background-color: RGB(40, 42, 54, 0.95);
		min-height: 26vmin;
		max-height: 26vmin;
		border: 1px solid #fafaf2;
		border-radius: 0.5em;
		width: 90.5vw;
		justify-content: center;
		justify-self: center;
		margin-top: 2vh;
		margin-left: auto;
		margin-right: auto;
		display: grid;
		column-gap: 1em;
		grid-template-columns: repeat(3, 1fr);
		font-size: 2.5vmin;
		padding: 3vmin;
	}

	.header {
		grid-area: header;
		justify-self: center;
		align-self: center;
	}

	.content {
		grid-area: content;
		justify-self: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow-y: auto; // Will only show scrollbars when needed, as opposed to overflow-y: scroll, which always shows them.
		overflow-x: auto;
		max-height: 14vh;
		min-width: 26vw;
		margin-left: auto;
		margin-right: auto;
	}

	.container {
		display: grid;
		height: 20vh;
		grid-template-columns: 100%;
		grid-template-rows: 1fr 3fr;
		grid-template-areas:
			'header'
			'content';
		justify-content: flex-start;
		align-items: space-evenly;
		padding-left: 1em;
		padding-right: 1em;
		padding-bottom: 1em;
		border: 1px solid #6272a4;
		border-radius: 0.5em;
		color: #fafaf2;
	}

	.row {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.space-L-R {
		margin-left: 0.25em;
		margin-right: 0.25em;
	}

	.unit-fraction {
		font-size: 2rem;
	}
	.unit-container {
		display: flex;
		align-items: center;
		flex-direction: column;
		min-width: 26vw;
	}
</style>

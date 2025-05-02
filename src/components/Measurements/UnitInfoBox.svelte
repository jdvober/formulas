<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { getUnitInfo } from '../../state/mainState.svelte';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
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
<div class="UnitInfoBox">
	{#if getUnitInfo().value.long !== ''}
		{@render definition()}

		{@render units()}
		{@render example()}
	{/if}
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.UnitInfoBox {
		min-height: 28vmin;
		max-height: 28vmin;
		border: 1px solid #fafaf2;
		border-radius: 0.5em;
		width: 90.5vw;
		justify-content: center;
		justify-self: center;
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
		overflow-x: scroll;
		overflow-y: scroll;
		max-height: 14vh;
		min-width: 26vw;
		margin-left: auto;
		margin-right: auto;
	}

	.container {
		min-height: 4em;
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 1fr 3fr;
		grid-template-areas:
			'header'
			'content';
		justify-content: flex-start;
		align-items: space-evenly;
		overflow-y: scroll;
		padding-left: 1em;
		padding-right: 1em;
		padding-bottom: 1em;
		border: 1px solid #44475a;
		border-radius: 0.5em;
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
	.space-L {
		margin-left: 0.25em;
	}
	.space-R {
		margin-right: 0.25em;
	}

	.unit-fraction {
		font-size: 2rem;
	}
	.def {
		color: 'blue';
	}
	.unit-container {
		display: flex;
		align-items: center;
		flex-direction: column;
		min-width: 26vw;
		overflow-x: scroll;
		overflow-y: scroll;
	}
</style>

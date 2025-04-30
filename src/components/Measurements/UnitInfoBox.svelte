<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { getUnitInfo } from '../../state/mainState.svelte';
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="UnitInfoBox">
	{#if getUnitInfo().value.long !== ''}
		<div class="measured-in">
			<div class="row">
				<u
					class="space-L-R"
					style:font-size="1.25em"
				>
					{`DEFINITION`}
				</u>
			</div>
			<div class="row">
				<div style:color={getUnitInfo().color}>
					{`${getUnitInfo().value.long}`}
				</div>
				<div class="space-L-R">
					{`is ${getUnitInfo().description}`}
				</div>
			</div>
		</div>

		<div class="measured-in">
			<div class="row">
				<u
					class="space-L-R"
					style:font-size="1.25em"
				>
					{`UNITS`}
				</u>
			</div>
			<div class="row">
				<div style:color={getUnitInfo().color}>
					{`${getUnitInfo().value.long}`}
				</div>
				<div class="space-L-R">
					{getUnitInfo().value.long !== '' ? `is measured in` : ''}
				</div>
				<em style:color={getUnitInfo().color}>
					{`${getUnitInfo().units.long}`}
				</em>
				<div class="row">
					<div style:margin-right="0.5em"></div>
					<div class="space-L">
						{`(`}
					</div>
					<em style:color={getUnitInfo().color}>
						{`${getUnitInfo().units.long}`}
					</em>
					<div class="space-L">
						{`uses the symbol "`}
					</div>
					<em style:color={getUnitInfo().color}>
						{`${getUnitInfo().units.short}`}
					</em>
					<div class="space-L-R">
						{`")`}
					</div>
				</div>
			</div>
			<div class="example">
				<div class="row">
					<div style:margin-left="1em"></div>
					<u
						class="space-L-R"
						style:font-size="1.25em"
					>
						{`EXAMPLE`}
					</u>
				</div>

				<div class="row">
					<div class="space-R">
						{`Example: ${getUnitInfo().example}`}
					</div>
					<em style:color={getUnitInfo().color}>
						{`${getUnitInfo().units.short}`}
					</em>
				</div>
			</div>
		</div>
	{/if}
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.UnitInfoBox {
		min-height: 7em;
		border: 1px solid #fafaf2;
		border-radius: 0.5em;
		width: 90.5vw;
		justify-content: center;
		justify-self: center;
		margin-left: auto;
		margin-right: auto;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	.measured-in {
		min-height: 4em;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		overflow-y: scroll;
	}
	.row {
		display: flex;
		flex-direction: row;
	}
	.example {
		display: flex;
		flex-direction: column;
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
</style>

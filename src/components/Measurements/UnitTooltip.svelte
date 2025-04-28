<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import * as HoverCard from '@/components/ui/hover-card';

	let { term }: { term: TermType } = $props();
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="UnitTooltip">
	<!-- {#if term !== undefined && term.value !== undefined && term.value.long !== undefined}
		<u>Units</u>
		<b>{`${term.value.long} is measured in`}</b>
	{:else}
		{'Undefined'}
	{/if}
	{#if term !== undefined && term.units !== undefined && term.units.long !== undefined}
		<em>{term.units.long}</em>
	{:else}
		{'Undefined'}
	{/if} -->

	<HoverCard.Root>
		<HoverCard.Trigger>
			{#if term !== undefined && term.value !== undefined && term.value.long !== undefined}
				{term.value.long}
			{:else}
				TERM VALUE
			{/if}
		</HoverCard.Trigger>
		<HoverCard.Content
			transition="fade"
			transitionConfig={{ duration: 200 }}
			align="center"
			sideOffset={5}
			className="hover-card-content"
		>
			SvelteKit - Web development, streamlined
		</HoverCard.Content>
	</HoverCard.Root>
</div>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.UnitTooltip {
		display: flex;
		flex-direction: column;
	}
</style>

<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { getUseLongValues, setUnitInfo } from '../state/mainState.svelte';

	let props = $props();
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<mrow class="Term">
	{#if props.color !== undefined}
		{#if typeof props.content === 'string' && props.content.length === 1}
			<mi
				role="tooltip"
				onmouseenter={() => {
					setUnitInfo(props.content);
				}}>{props.content}</mi
			>
		{:else if typeof props.content === 'string'}
			<ms
				role="tooltip"
				onmouseenter={() => {
					setUnitInfo(props.content);
				}}>{props.content}</ms
			>
		{:else if typeof props.content === 'number'}
			<mn
				role="tooltip"
				onmouseenter={() => {
					setUnitInfo(props.content);
				}}
				style:color={props.color !== undefined ? props.color : 'black'}
				>{props.content}</mn
			>
		{:else if typeof props.content === 'object'}
			{#if getUseLongValues() === true}
				<ms
					role="tooltip"
					onmouseenter={() => {
						setUnitInfo(props.content);
					}}
				>
					{props.content.value.long}
				</ms>
			{:else}
				<ms
					style:color={props.content.color}
					role="tooltip"
					onmouseenter={() => {
						setUnitInfo(props.content);
					}}
				>
					{props.content.value.short}
				</ms>
			{/if}
		{:else}
			<div
				style:color={props.color}
				role="tooltip"
				onmouseenter={() => {
					setUnitInfo(props.content);
				}}
			>
				{@render props.content()}
			</div>
		{/if}
	{:else if typeof props.content === 'object'}
		{#if getUseLongValues() === true}
			<ms
				style:color={props.content.color}
				role="tooltip"
				onmouseenter={() => {
					setUnitInfo(props.content);
				}}
			>
				{props.content.value.long}
			</ms>
		{:else}
			<ms
				style:color={props.content.color}
				role="tooltip"
				onmouseenter={() => {
					setUnitInfo(props.content);
				}}
			>
				{props.content.value.short}
			</ms>
		{/if}
	{:else if typeof props.content === 'string' && props.content.length === 1}
		<mi
			role="tooltip"
			onmouseenter={() => {
				setUnitInfo(props.content);
			}}>{props.content}</mi
		>
	{:else if typeof props.content === 'string'}
		<ms
			role="tooltip"
			onmouseenter={() => {
				setUnitInfo(props.content);
			}}>{props.content}</ms
		>
	{:else if typeof props.content === 'number'}
		<mn
			role="tooltip"
			onmouseenter={() => {
				setUnitInfo(props.content);
			}}>{props.content}</mn
		>
	{:else}
		<div
			style:color={props.color}
			role="tooltip"
			onmouseenter={() => {
				setUnitInfo(props.content);
			}}
		>
			{@render props.content()}
		</div>
	{/if}
</mrow>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>

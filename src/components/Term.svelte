<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	let props = $props();
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<mrow class="Term">
	{#if props.color !== undefined}
		{#if typeof props.content === 'string' && props.content.length === 1}
			<mi
				mathvariant="normal"
				style:color={props.color}>{props.content}</mi
			>
		{:else if typeof props.content === 'string'}
			<ms style:color={props.color !== undefined ? props.color : 'black'}
				>{props.content}</ms
			>
		{:else if typeof props.content === 'number'}
			<mn style:color={props.color !== undefined ? props.color : 'black'}
				>{props.content}</mn
			>
		{:else}
			{@render props.content()}
		{/if}
	{:else if typeof props.content === 'string' && props.content.length === 1}
		<mi mathvariant="normal">{props.content}</mi>
	{:else if typeof props.content === 'string'}
		<ms>{props.content}</ms>
	{:else if typeof props.content === 'number'}
		<mn>{props.content}</mn>
	{:else}
		{@render props.content()}
	{/if}
</mrow>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>

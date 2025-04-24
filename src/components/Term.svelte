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
			<mi style:color={props.color}>{props.content}</mi>
		{:else if typeof props.content === 'string'}
			<ms style:color={props.color !== undefined ? props.color : 'black'}
				>{props.content}</ms
			>
		{:else if typeof props.content === 'number'}
			<mn style:color={props.color !== undefined ? props.color : 'black'}
				>{props.content}</mn
			>
		{:else}
			<div>{@render props.content()}</div>
		{/if}
	{:else if typeof props.content === 'string' && props.content.length === 1}
		<mi>{props.content}</mi>
	{:else if typeof props.content === 'string'}
		<mtext>{props.content}</mtext>
	{:else if typeof props.content === 'number'}
		<mn>{props.content}</mn>
	{:else}
		<div>{@render props.content()}</div>
	{/if}
</mrow>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
</style>

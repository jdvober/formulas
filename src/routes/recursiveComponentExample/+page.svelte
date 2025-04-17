<script lang="ts">
	import RecursiveComponentExample from '../../components/RecursiveComponentExample/RecursiveComponentExample.svelte';
</script>

{#snippet testSnippet()}
	<div>This is a snippet</div>
{/snippet}
<RecursiveComponentExample
	arrayTree={[
		1,
		2,
		[3, 4, testSnippet],
		5,
		6,
		7,
		[8, [9, 10, testSnippet]],
		11,
		12,
		testSnippet,
	]}
	level={0}
/>

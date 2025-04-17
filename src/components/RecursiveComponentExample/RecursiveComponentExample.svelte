<script lang="ts">
	import RecursiveComponentExample from './RecursiveComponentExample.svelte';

	let { arrayTree, level = 0 } = $props();

	// Improved type check for renderable elements
	function isRenderable(value: any): boolean {
		// Component check (including Svelte 5 components)
		if (typeof value?.render === 'function') return true;

		// Snippet check (Svelte 5 snippet)
		if (value?.[Symbol.toStringTag] === 'Snippet') return true;

		// Array check
		return Array.isArray(value);
	}
</script>

{#each arrayTree as branch}
	{#if Array.isArray(branch)}
		<RecursiveComponentExample
			arrayTree={branch}
			level={level + 1}
		/>
	{:else if isRenderable(branch)}
		<!-- Handle snippets -->
		{#if branch[Symbol.toStringTag] === 'Snippet'}
			{@render branch()}
			<!-- Handle components -->
		{:else if typeof branch?.render === 'function'}
			<svelte:component this={branch} />
		{:else}
			<p>{`_lvl${level}_`.repeat(level)}{branch}</p>
		{/if}
	{:else}
		<p>{`_lvl${level}_`.repeat(level)}{branch}</p>
	{/if}
{/each}

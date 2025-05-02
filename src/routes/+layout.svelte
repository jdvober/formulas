<script lang="ts">
	import '../App.css';

	let { children } = $props();
</script>

<!--Navbar-->
<div>
	<nav class="flex justify-center items-center gap-x-[2vw]">
		<a href="/">Home</a>
		|
		<a href="/examples">Examples</a>
		|
		<a href="/formulas">Formula Sheet</a>
	</nav>
</div>

{@render children()}

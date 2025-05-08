<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<!--Navbar-->
<div>
	<nav class="flex justify-center items-center gap-x-[2vw]">
		<a href="/">Home</a>
		|
		<a href="/physicalScienceReference">Physical Science Reference</a>
		|
		<a href="/apPhysicsReference">AP Physics Reference</a>
		|
		<a href="/physicsReference">Physics Reference</a>
	</nav>
</div>

{@render children()}

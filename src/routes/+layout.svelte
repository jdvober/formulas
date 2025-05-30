<script lang="ts">
	import { Navbar, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
	import '../app.css';

	let { children } = $props();
</script>

<header>
	<Navbar>
		<div class="flex items-center lg:order-2">
			<NavHamburger />
		</div>
		<NavUl>
			<div class="link">
				<NavLi href="/">Home</NavLi>
			</div>
			<div class="link">
				<NavLi href="/physicalScienceReference"
					>Physical Science Formulas</NavLi
				>
			</div>
			<div class="link">
				<NavLi href="/periodicTable">Periodic Table</NavLi>
			</div>
		</NavUl>
	</Navbar>
</header>
<div class="childs">
	{@render children()}
</div>

<style>
	.link {
		color: #f8f8f2;
	}

	header {
		max-height: 10vh;
	}
	.childs {
		max-height: 90vh;
	}
</style>

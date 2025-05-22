<script lang="ts">
	import { gsap } from 'gsap';
	import { Flip } from 'gsap/Flip';

	gsap.registerPlugin(Flip);

	// State management for expandedId (number or null)
	let expandedId: number | null = $state(null);
	const items = [1, 2, 3, 4];

	function handleClick(item: number) {
		// Capture initial state of all boxes
		const boxes = gsap.utils.toArray('.box') as Element[];
		const initialState = Flip.getState(boxes);

		// Update state
		expandedId = expandedId === item ? null : item;

		// Animate the transition
		Flip.from(initialState, {
			duration: 0.1,
			ease: 'power1.out',
			color: 'green',
			absolute: true, // Handles positional changes smoothly
		});
	}
</script>

<div class="container">
	{#each items as item (item)}
		<div
			class="box {expandedId === item ? 'expanded' : ''}"
			role="button"
			tabindex="0"
			aria-pressed={expandedId === item}
			onclick={() => handleClick(item)}
			onkeydown={(e) =>
				(e.key === 'Enter' || e.key === ' ') && handleClick(item)}
		>
			{item}
		</div>
	{/each}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;
		max-width: 600px;
		margin: 2rem auto;
		padding: 0 20px;
	}

	.box {
		background: #f0f0f0;
		padding: 2rem;
		border-radius: 8px;
		cursor: pointer;
		text-align: center;
		transition: background-color 0.2s;
		color: red;
	}

	.box:hover {
		background: #e0e0e0;
	}

	.box.expanded {
		grid-column: 1 / -1;
		background: #4caf50;
		color: white;
	}
</style>

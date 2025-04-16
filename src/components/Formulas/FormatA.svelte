<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { display } from 'mathlifier';
	import { match } from 'ts-pattern';

	// State to track which variable is being solved for
	// Refs for the container and positions of terms
	let mathContainer: HTMLDivElement;

	let { a, b, c }: { a: string; b: string; c: string } = $props();

	$effect(() => {
		console.log(a, b, c);
		updatePosition('A');
		updatePosition('B');
		updatePosition('C');
	});

	let positions = $state([
		{
			top: 0,
			left: 0,
			width: 100,
			height: 100,
		},
		{
			top: 0,
			left: 0,
			width: 100,
			height: 100,
		},
		{
			top: 0,
			left: 0,
			width: 100,
			height: 100,
		},
	]);

	const updatePosition = (term: 'A' | 'B' | 'C') => {
		const t = match(term)
			.with('A', () => {
				return a;
			})
			.with('B', () => {
				return b;
			})
			.with('C', () => {
				return c;
			})
			.exhaustive();

		// Find the location of the term in the latex, and draw a box around it so we can "click" the term and have actions.
		const containerRect = mathContainer.getBoundingClientRect();

		// Use querySelector to find the rendered terms
		const mtexts = mathContainer.querySelectorAll('mtext');
		let el: MathMLElement | null = null;
		mtexts.forEach((_, i) => {
			if (mtexts[i].innerHTML === t) {
				el = mtexts[i];
			}
		});

		if (el !== null) {
			const rect = (el as MathMLElement).getBoundingClientRect();

			match(term)
				.with('A', () => {
					positions[0].top = rect.top;
					positions[0].left = rect.left - containerRect.left;
					positions[0].width = rect.width;
					positions[0].height = rect.height;
				})
				.with('B', () => {
					positions[1].top = rect.top;
					positions[1].left = rect.left - containerRect.left;
					positions[1].width = rect.width;
					positions[1].height = rect.height;
				})
				.with('C', () => {
					positions[2].top = rect.top;
					positions[2].left = rect.left - containerRect.left;
					positions[2].width = rect.width;
					positions[2].height = rect.height;
				})
				.otherwise(() => {
					console.log(
						`Did not find a match for ${t}.  Not changing position values for ${t}`
					);
				});
		} else {
			console.log('Error: el is null');
		}
	};
</script>

<div
	class="FormulaA container"
	bind:this={mathContainer}
>
	<!-- Render the formula dynamically using mathlifier's display() -->
	<div class="math">
		{@html display(`\\text{${a}}=\\frac{\\text{${b}}}{\\text{${c}}}`)}
	</div>

	<!-- Floating boxes over each term -->
	<span
		class="floating-box ${a}"
		style="top: {positions[0].top}px; left: {positions[0]
			.left}px; width: {positions[0].width}px; height: {positions[0]
			.height}px;border: 2px solid red"
	></span>

	<span
		class="floating-box ${b}"
		style="top: {positions[1].top}px; left: {positions[1]
			.left}px; width: {positions[1].width}px; height: {positions[1]
			.height}px;border: 2px solid blue"
	></span>

	<span
		class="floating-box ${c}"
		style="top: {positions[2].top}px; left: {positions[2]
			.left}px; width: {positions[2].width}px; height: {positions[2]
			.height}px;border: 2px solid green"
	></span>
</div>

<style>
	/* Styling for the math display */
	.math {
		position: relative;
		font-size: 200%;
		text-align: center;
	}

	/* Floating boxes over terms */
	.floating-box {
		position: absolute;
		z-index: 10;
		pointer-events: none;
	}
</style>

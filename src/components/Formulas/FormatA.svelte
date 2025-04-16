<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	// import { display } from 'mathlifier';
	// import { match } from 'ts-pattern';

	// State to track which variable is being solved for
	// Refs for the container and positions of terms
	let mathContainer: HTMLDivElement;

	let {
		a,
		b,
		c,
	}: {
		a: { value: string | number; sub: string | number };
		b: { value: string | number; sub: string | number };
		c: { value: string | number; sub: string | number };
	} = $props();

	// const updatePositions = () => {
	// 	updatePosition('A');
	// 	updatePosition('B');
	// 	updatePosition('C');
	// };

	// $effect(() => {
	// 	// Reassign the variable to itself to trigger the effect when it changes.
	// 	formula = formula;
	// 	updatePositions();
	// });

	// let formula = $state(
	// 	`\\text{${a.value}\sb{{${a.sub}}}=\\frac{\\text{${b.value}}}{\\text{${c.value}}}`
	// );

	// let positions = $state([
	// 	{
	// 		top: 0,
	// 		left: 0,
	// 		width: 0,
	// 		height: 0,
	// 	},
	// 	{
	// 		top: 0,
	// 		left: 0,
	// 		width: 0,
	// 		height: 0,
	// 	},
	// 	{
	// 		top: 0,
	// 		left: 0,
	// 		width: 0,
	// 		height: 0,
	// 	},
	// ]);

	// const updatePosition = (term: 'A' | 'B' | 'C') => {
	// 	const t = match(term)
	// 		.with('A', () => {
	// 			return a.value;
	// 		})
	// 		.with('B', () => {
	// 			return b.value;
	// 		})
	// 		.with('C', () => {
	// 			return c.value;
	// 		})
	// 		.exhaustive();

	// 	// Find the location of the term in the latex, and draw a box around it so we can "click" the term and have actions.
	// 	const containerRect = mathContainer.getBoundingClientRect();

	// 	// Use querySelector to find the rendered terms
	// 	const mtexts = mathContainer.querySelectorAll('mtext');
	// 	let el: MathMLElement | null = null;
	// 	mtexts.forEach((_, i) => {
	// 		if (mtexts[i].innerHTML === t) {
	// 			el = mtexts[i];
	// 		}
	// 	});

	// 	if (el !== null) {
	// 		const rect = (el as MathMLElement).getBoundingClientRect();

	// 		match(term)
	// 			.with('A', () => {
	// 				positions[0].top = rect.top;
	// 				positions[0].left = rect.left - containerRect.left;
	// 				positions[0].width = rect.width;
	// 				positions[0].height = rect.height;
	// 			})
	// 			.with('B', () => {
	// 				positions[1].top = rect.top;
	// 				positions[1].left = rect.left - containerRect.left;
	// 				positions[1].width = rect.width;
	// 				positions[1].height = rect.height;
	// 			})
	// 			.with('C', () => {
	// 				positions[2].top = rect.top;
	// 				positions[2].left = rect.left - containerRect.left;
	// 				positions[2].width = rect.width;
	// 				positions[2].height = rect.height;
	// 			})
	// 			.otherwise(() => {
	// 				console.log(
	// 					`Did not find a match for ${t}.  Not changing position values for ${t}`
	// 				);
	// 			});
	// 	} else {
	// 		console.log('Error: el is null');
	// 	}
	// };
</script>

<div
	class="FormulaA container"
	bind:this={mathContainer}
>
	<!-- Render the formula dynamically using mathlifier's display() -->
	<!-- <div class="math">
		{@html display(formula)}
	</div> -->

	<!-- Floating boxes over each term -->
	<!-- <button
		class="floating-box ${a}"
		onclick={() => {
			console.log(`clicked ${a.value}`);
			formula = `\\text{${a.value}_{${a.sub}}}=\\frac{\\text{${b.value}_{${b.sub}}}}{\\text{${c.value}_{${c.sub}}}}`;
			updatePositions();
		}}
		aria-label={`${a} box`}
		style="top: {positions[0].top}px; left: {positions[0]
			.left}px; width: {positions[0].width}px; height: {positions[0]
			.height}px;border: 2px solid red"
	></button>

	<button
		class="floating-box ${b}"
		onclick={() => {
			console.log(`clicked ${b}`);
			formula = `\\text{${b.value}_{${b.sub}}}=\\text{${a.value}_{${a.sub}}} \\cdot \\text{${c.value}_{${c.sub}}}`;
			updatePositions();
		}}
		aria-label={`${a} box`}
		style="top: {positions[1].top}px; left: {positions[1]
			.left}px; width: {positions[1].width}px; height: {positions[1]
			.height}px;border: 2px solid blue"
	></button>

	<button
		class="floating-box ${c}"
		onclick={() => {
			console.log(`clicked ${c}`);
			formula = `\\text{${c}}=\\frac{\\text{${b}}}{\\text{${a}}}`;
			updatePositions();
		}}
		aria-label={`${a} box`}
		style="top: {positions[2].top}px; left: {positions[2]
			.left}px; width: {positions[2].width}px; height: {positions[2]
			.height}px;border: 2px solid green"
	></button> -->
	<math
		display="block"
		class="formula"
	>
		<button
			onclick={() => {
				console.log(`Clicked ${a.value}_${a.sub}`);
			}}
		>
			<msub>
				<mi class="aText">{a.value}</mi>
				<mn class="aSub">{a.sub}</mn>
			</msub>
		</button>
		<mrow>=</mrow>
		<mfrac>
			<!--Numerator-->
			<msub>
				<mi class="bText">{b.value}</mi>
				<mn class="bSub">{b.sub}</mn>
			</msub>
			<!--Denominator-->
			<msub>
				<mi class="cText">{c.value}</mi>
				<mn class="cSub">{c.sub}</mn>
			</msub>
		</mfrac>
	</math>
</div>

<style>
	.formula {
		font-size: 2em;
	}

	.aText {
		color: red;
	}
	.aSub {
		color: pink;
	}

	.bText {
		color: blue;
	}
	.bSub {
		color: lightblue;
	}

	.cText {
		color: green;
	}
	.cSub {
		color: lightgreen;
	}

	/* Styling for the math display */
	/* .math {
		position: relative;
		font-size: 200%;
		text-align: center;
		user-select: none;
	} */

	/* Floating boxes over terms */
	/* .floating-box {
		position: absolute;
	} */
</style>

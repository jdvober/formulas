<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import type { Component } from 'svelte';
	import Term from '../Term.svelte';
	import { fade } from 'svelte/transition';
	import { whoosh } from '../../../functions/animations/svelteTransitions.svelte';

	let {
		a,
		b,
		c,
		d,
		coefficient,
		subscripts,
		showAll = false,
		variant = 'DEFAULT',
	}: {
		a: TermType | Component;
		b: TermType | Component;
		c: TermType | Component;
		d: TermType | Component;
		coefficient?: TermType | Component;
		subscripts: SubS;
		showAll: boolean;
		variant:
			| 'DEFAULT'
			| 'PRIMARY'
			| 'SECONDARY'
			| 'TERTIARY'
			| 'QUARTENARY';
	} = $props();
	let v = $state(variant);
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->

{#snippet A()}
	<Term
		content={a}
		subscript={subscripts.a}
		color="black"
	/>
{/snippet}

{#snippet B()}
	<Term
		content={b}
		subscript={subscripts.b}
		color="black"
	/>
{/snippet}

{#snippet C()}
	<Term
		content={c}
		subscript={subscripts.c}
		color="black"
	/>
{/snippet}

{#snippet D()}
	<Term
		content={d}
		subscript={subscripts.d}
		color="black"
	/>
{/snippet}

{#snippet Coefficient()}
	{#if coefficient !== undefined}
		<Term
			content={coefficient}
			subscript={subscripts.e}
			color="black"
		/>
	{:else}
		<div></div>
	{/if}
{/snippet}

{#if showAll === true}
	{#if coefficient === undefined}
		<div
			in:whoosh={{ delay: 0, duration: 200 }}
			out:fade={{ duration: 0 }}
		>
			<div
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}
				style:margin-top={'1vh'}
				style:margin-bottom={'1vh'}
			>
				<math>
					<mrow>
						<msub
							in:whoosh={{ delay: 0, duration: 200 }}
							out:fade={{ duration: 0 }}>{@render A()}</msub
						>
						<mo
							in:whoosh={{ delay: 0, duration: 200 }}
							out:fade={{ duration: 0 }}>=</mo
						>
						<msub
							in:whoosh={{ delay: 0, duration: 200 }}
							out:fade={{ duration: 0 }}>{@render B()}</msub
						>
						<mo
							in:whoosh={{ delay: 0, duration: 200 }}
							out:fade={{ duration: 0 }}>&middot</mo
						>
						<msub
							in:whoosh={{ delay: 0, duration: 200 }}
							out:fade={{ duration: 0 }}>{@render C()}</msub
						>
						<mo
							in:whoosh={{ delay: 0, duration: 200 }}
							out:fade={{ duration: 0 }}>&middot</mo
						>
						<msub
							in:whoosh={{ delay: 0, duration: 200 }}
							out:fade={{ duration: 0 }}>{@render D()}</msub
						>
					</mrow>
				</math>
			</div>
			<div
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}
				style:margin-top={'1vh'}
				style:margin-bottom={'1vh'}
			>
				<math>
					<mrow>
						<mi>{@render B()}</mi>
						<mo
							in:whoosh={{ delay: 0, duration: 200 }}
							out:fade={{ duration: 0 }}>=</mo
						>
						<mfrac>
							<mrow>
								<mi>{@render A()}</mi>
							</mrow>
							<mrow>
								<ms>{@render C()}</ms>
								<mo
									in:whoosh={{ delay: 0, duration: 200 }}
									out:fade={{ duration: 0 }}>&middot</mo
								>
								<mi>{@render D()}</mi>
							</mrow>
						</mfrac>
					</mrow>
				</math>
			</div>
			<div
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}
				style:margin-top={'1vh'}
				style:margin-bottom={'1vh'}
			>
				<math>
					<mrow>
						<mi>{@render C()}</mi>
						<mo
							in:whoosh={{ delay: 0, duration: 200 }}
							out:fade={{ duration: 0 }}>=</mo
						>
						<mfrac>
							<mrow>
								<mi>{@render A()}</mi>
							</mrow>
							<mrow>
								<ms>{@render B()}</ms>
								<mo
									in:whoosh={{ delay: 0, duration: 200 }}
									out:fade={{ duration: 0 }}>&middot</mo
								>
								<mi>{@render D()}</mi>
							</mrow>
						</mfrac>
					</mrow>
				</math>
			</div>
			<div
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}
				style:margin-top={'1vh'}
				style:margin-bottom={'1vh'}
			>
				<math>
					<mrow
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}
					>
						<mi
							in:whoosh={{ delay: 0, duration: 200 }}
							out:fade={{ duration: 0 }}>{@render D()}</mi
						>
						<mo
							in:whoosh={{ delay: 0, duration: 200 }}
							out:fade={{ duration: 0 }}>=</mo
						>
						<mfrac>
							<mrow>
								<mi
									in:whoosh={{ delay: 0, duration: 200 }}
									out:fade={{ duration: 0 }}>{@render A()}</mi
								>
							</mrow>
							<mrow>
								<ms>{@render B()}</ms>
								<mo
									in:whoosh={{ delay: 0, duration: 200 }}
									out:fade={{ duration: 0 }}>&middot</mo
								>
								<mi>{@render C()}</mi>
							</mrow>
						</mfrac>
					</mrow>
				</math>
			</div>
		</div>
	{:else}
		<!--special case for formula with fraction (kinetic energy)-->
		<div
			in:whoosh={{ delay: 0, duration: 200 }}
			out:fade={{ duration: 0 }}
		>
			<div
				style:margin-top={'1vh'}
				style:margin-bottom={'1vh'}
			>
				<math>
					<mrow>
						<msub
							in:whoosh={{ delay: 0, duration: 200 }}
							out:fade={{ duration: 0 }}>{@render A()}</msub
						>
						<mo
							in:whoosh={{ delay: 0, duration: 200 }}
							out:fade={{ duration: 0 }}>=</mo
						>
						<msub
							in:whoosh={{ delay: 0, duration: 200 }}
							out:fade={{ duration: 0 }}>{@render B()}</msub
						>
						<mo
							in:whoosh={{ delay: 0, duration: 200 }}
							out:fade={{ duration: 0 }}>&middot</mo
						>
						<msub
							in:whoosh={{ delay: 0, duration: 200 }}
							out:fade={{ duration: 0 }}>{@render C()}</msub
						>
						<mo
							in:whoosh={{ delay: 0, duration: 200 }}
							out:fade={{ duration: 0 }}>&middot</mo
						>
						<msub
							in:whoosh={{ delay: 0, duration: 200 }}
							out:fade={{ duration: 0 }}>{@render D()}</msub
						>
					</mrow>
				</math>
			</div>
			<div
				style:margin-top={'1vh'}
				style:margin-bottom={'1vh'}
			>
				<math>
					<mrow>
						<mi>{@render C()}</mi>
						<mo
							in:whoosh={{ delay: 0, duration: 200 }}
							out:fade={{ duration: 0 }}>=</mo
						>
						<mfrac>
							<mrow>
								<mi>{@render A()}</mi>
							</mrow>
							<mrow>
								<mn style:font-size={'1.5em'}>{2}</mn>
								<mo
									in:whoosh={{ delay: 0, duration: 200 }}
									out:fade={{ duration: 0 }}>&middot</mo
								>
								<mi>{@render D()}</mi>
							</mrow>
						</mfrac>
					</mrow>
				</math>
			</div>
			<div
				style:margin-top={'1vh'}
				style:margin-bottom={'1vh'}
			>
				<math>
					<mrow>
						<mi>{@render Coefficient()}</mi>
						<mo
							in:whoosh={{ delay: 0, duration: 200 }}
							out:fade={{ duration: 0 }}>=</mo
						>
						<mrow>
							<msqrt>
								<mrow>
									<mfrac>
										<mrow>
											<mi>{@render A()}</mi>
										</mrow>
										<mrow>
											<mn style:font-size={'1.5em'}
												>{2}</mn
											>
											<mo
												in:whoosh={{
													delay: 0,
													duration: 200,
												}}
												out:fade={{ duration: 0 }}
												>&middot</mo
											>
											<mi>{@render C()}</mi>
										</mrow>
									</mfrac>
								</mrow>
							</msqrt>
						</mrow>
					</mrow></math
				>
			</div>
		</div>
	{/if}
{:else if v === 'DEFAULT' || v === 'PRIMARY'}
	<!--a=bcd-->
	<math>
		<mrow>
			<msub
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'PRIMARY';
				}}>{@render A()}</msub
			>
			<mo
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}>=</mo
			>
			<msub
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'SECONDARY';
				}}>{@render B()}</msub
			>

			<mo
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}>&middot</mo
			>
			<msub
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'TERTIARY';
				}}>{@render C()}</msub
			>

			<mo
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}>&middot</mo
			>
			<mi
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'QUARTENARY';
				}}>{@render D()}</mi
			>
		</mrow>
	</math>
{:else if v === 'SECONDARY'}
	<!--b=a/cd-->
	<math>
		<mrow>
			<ms
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'SECONDARY';
				}}>{@render B()}</ms
			>

			<mo
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}>=</mo
			>
			<mfrac>
				<mrow>
					<mi
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'PRIMARY';
						}}>{@render A()}</mi
					>
				</mrow>
				<mrow>
					<ms
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'TERTIARY';
						}}>{@render C()}</ms
					>
					<mo
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}>&middot</mo
					>
					<mi
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'QUARTENARY';
						}}>{@render D()}</mi
					>
				</mrow>
			</mfrac>
		</mrow>
	</math>
{:else if v === 'TERTIARY'}
	<!--c=a/bd-->
	<math>
		<mrow>
			<mi
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'TERTIARY';
				}}>{@render C()}</mi
			>
			<mo
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}>=</mo
			>
			<mfrac>
				<mrow>
					<mi
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'PRIMARY';
						}}>{@render A()}</mi
					>
				</mrow>
				<mrow>
					<ms
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'SECONDARY';
						}}>{@render B()}</ms
					>

					<mo
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}>&middot</mo
					>
					<mi
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'QUARTENARY';
						}}>{@render D()}</mi
					>
				</mrow>
			</mfrac>
		</mrow>
	</math>
{:else if v === 'QUARTENARY'}
	<!--d=a/bc-->
	<math>
		<mrow>
			<mi
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'QUARTENARY';
				}}>{@render D()}</mi
			>
			<mo
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}>=</mo
			>
			<mfrac>
				<mrow>
					<mi
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'PRIMARY';
						}}>{@render A()}</mi
					>
				</mrow>
				<mrow>
					<ms
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'SECONDARY';
						}}>{@render B()}</ms
					>

					<mo
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}>&middot</mo
					>
					<mi
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'TERTIARY';
						}}>{@render C()}</mi
					>
				</mrow>
			</mfrac>
		</mrow>
	</math>
{:else}
	<!--d=ab/c-->
	<math>
		<mrow>
			<mi
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}
				role="button"
				aria-label="Interactive math button"
				tabindex="0"
				onclick={() => {
					v = 'QUARTENARY';
				}}>{@render D()}</mi
			>
			<mo
				in:whoosh={{ delay: 0, duration: 200 }}
				out:fade={{ duration: 0 }}>=</mo
			>
			<mfrac>
				<mrow>
					<mi
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'PRIMARY';
						}}>{@render A()}</mi
					>
				</mrow>
				<mrow>
					<ms
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'SECONDARY';
						}}>{@render B()}</ms
					>
					<mo
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}>&middot</mo
					>
					<mi
						in:whoosh={{ delay: 0, duration: 200 }}
						out:fade={{ duration: 0 }}
						role="button"
						aria-label="Interactive math button"
						tabindex="0"
						onclick={() => {
							v = 'TERTIARY';
						}}>{@render C()}</mi
					>
				</mrow>
			</mfrac>
		</mrow>
	</math>
{/if}

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */

	math {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		margin-left: auto;
		margin-right: auto;
	}
</style>

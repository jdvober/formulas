<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import { Popover, Modal, Button } from 'flowbite-svelte';
	import { infoBox } from '../../../state/periodicTableState.svelte';
	import { slide } from 'svelte/transition';

	let advancedInfoModal = $state(false);

	const getUniqueStr = (str1: string, str2: string, str3: string) => {
		let words: string[] = [];
		let phrase = str1
			.concat(' ', str2)
			.concat(' ', str3)
			.split(' ')
			.map((word) => {
				return words.includes(word) ? '' : word;
			})
			.toString()
			.replaceAll(',', ' ')
			.toLowerCase();

		return phrase[0].toUpperCase().concat(phrase.slice(1));
	};
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div
	class="InfoBox"
	style:background={infoBox.info.background}
	style:color={infoBox.info.color}
	style:border={`3px solid ${infoBox.info.color}`}
>
	<!--// Don't display if the default is selected (atomic number 0)-->
	{#if infoBox.info.number > 0}
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<div class="name">{infoBox.info.name}</div>
		<div
			class="symbol"
			style:border={`2px solid ${infoBox.info.color}`}
			style:color={infoBox.info.color}
		>
			{infoBox.info.symbol}
		</div>

		<img
			id="preview-bohr"
			alt={`Element ${infoBox.info.number} ${infoBox.info.name} (${infoBox.info.symbol}) enhanced Bohr model`}
			src={`https://cdn.chemicalaid.com/assets/img/bohr-enhanced.php?symbol=${infoBox.info.symbol}`}
		/>

		<div class="entry">
			<em><b>Atomic Number:</b></em>
			{infoBox.info.number}
		</div>
		<div class="entry">
			<em><b>Mass:</b></em>
			{infoBox.info.atomicMass} a.m.u.
		</div>
		<div class="entry">
			<em><b>Valence Electrons:</b></em>
			{infoBox.info.valenceElectrons}
		</div>
		<div class="entry">
			<em><b>Category:</b></em>
			{#if infoBox.info.category.split(' ').length > 1}
				<!--Handle Multiple Words-->
				{infoBox.info.category.split(' ')[0].slice(0, 1).toUpperCase() +
					infoBox.info.category.split(' ')[0].slice(1)}
				{infoBox.info.category.split(' ')[1].slice(0, 1).toUpperCase() +
					infoBox.info.category.split(' ')[1].slice(1)}
			{:else}
				{infoBox.info.category
					.slice(0, 1)
					.toUpperCase()}{infoBox.info.category.slice(1)}
			{/if}
		</div>
		<Button
			onclick={() => (advancedInfoModal = true)}
			class="btn rounded-box mt-auto "
			color="dark">View Detailed Info</Button
		>
	{/if}
</div>

<!--Zoomed in Bohr Model when hovering-->
<Popover
	triggeredBy="#preview-bohr"
	class="pop-container text-sm font-light"
	defaultClass="p-0"
	placement="right"
	transition={slide}
>
	<img
		class="zoomed-img"
		alt={`Element ${infoBox.info.number} ${infoBox.info.name} (${infoBox.info.symbol}) enhanced Bohr model`}
		src={`https://cdn.chemicalaid.com/assets/img/bohr-enhanced.php?symbol=${infoBox.info.symbol}`}
	/>
</Popover>

<!--Advanced Information Modal-->
<Modal
	title={infoBox.info.name}
	bind:open={advancedInfoModal}
	autoclose
	size="xl"
	placement="center"
>
	<div class="row-entry">
		<span class="detailed-entry number-font"
			><em><u><b>Appearance:</b></u></em>
			{getUniqueStr(
				infoBox.info.appearance,
				infoBox.info.phase,
				'at room temperature'
			)}
		</span>

		<span class="detailed-entry number-font"
			><em><u><b>Melting Point:</b></u></em> {infoBox.info.melt} °C</span
		>

		<span class="detailed-entry number-font"
			><em><u><b>Boiling Point:</b></u></em> {infoBox.info.boil} °C</span
		>

		<span class="detailed-entry number-font"
			><em><u><b>Density:</b></u></em> {infoBox.info.density} g/cm³</span
		>
	</div>

	<div class="row-entry">
		<span class="detailed-entry number-font"
			><em><u><b>Electron Configuration:</b></u></em>
			{infoBox.info.electronConfigurationSemantic}</span
		>

		<span class="detailed-entry number-font"
			><em><u><b>Electron Affinity:</b></u></em>
			{infoBox.info.electronAffinity}</span
		>

		<span class="detailed-entry number-font"
			><em><u><b>Electronegativity:</b></u></em>
			{infoBox.info.electronegativityPauling}</span
		>

		<span class="detailed-entry number-font"
			><em><u><b>Block:</b></u></em> {infoBox.info.block}</span
		>
	</div>

	<span class="detailed-entry-long"
		><em><u><b>Description:</b></u></em> {infoBox.info.summary}</span
	>

	<span class="detailed-entry"
		><u
			><a
				href={infoBox.info.source}
				target="_blank">More Information at Wikipedia</a
			></u
		></span
	>
</Modal>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.InfoBox {
		border-radius: 1.5vmin;
		width: 17vw;
		max-width: 17vw;
		height: 90vh;
		display: flex;
		flex-direction: column;
		padding: 1vmin;
		overflow-y: auto;
		overflow-x: hidden;
	}
	.name {
		justify-self: center;
		align-self: center;
		font-size: 2em;
	}
	.symbol {
		justify-self: center;
		align-self: center;
		font-size: 2em;
		border-radius: 0.25em;
		width: 1.5em;
		height: 1.5em;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.detailed-entry {
		display: flex;
		flex-direction: row;
		column-gap: 10px;
	}

	.detailed-entry-long {
		display: flex;
		flex-direction: column;
	}

	.zoomed-img {
		height: 95vmin;
		justify-self: center;
		align-self: center;
		border-radius: 1.5em;
	}

	.entry {
		display: flex;
		column-gap: 5px;
	}

	.number-font {
		font-family: 'Atkinson Hyperlegible Next';
	}

	.row-entry {
		display: flex;
		flex-direction: row;
		column-gap: 10px;
	}
</style>

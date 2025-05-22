<!----------------------------------------------------------------->
<!----------------- Javascript ------------------------------------>
<!----------------------------------------------------------------->
<script lang="ts">
	import GlowButton from '@/components/ui/button/GlowButton.svelte';
	import { psTopics } from '../../../state/mainState.svelte';

	import { ts as Chemistry } from '../PhysicalScience/Chem/PSChemFormulas.svelte';
	import { ts as Gas_Laws } from '../PhysicalScience/Chem/PSGasLawsFormulas.svelte';
	import { ts as Matter } from '../PhysicalScience/Chem/PSMatterFormulas.svelte';
	import { ts as Dynamics } from '../PhysicalScience/Phy/PSDynamicsFormulas.svelte';
	import { ts as Electricity } from '../PhysicalScience/Phy/PSElectricityFormulas.svelte';
	import { ts as Energy } from '../PhysicalScience/Phy/PSEnergyFormulas.svelte';
	import { ts as Kinematics } from '../PhysicalScience/Phy/PSKinematicsFormulas.svelte';
	import { ts as Physics } from '../PhysicalScience/Phy/PSPhyFormulas.svelte';
	import { ts as Waves } from '../PhysicalScience/Phy/PSWavesFormulas.svelte';

	let openModal = () => {
		const modal = document.getElementById(
			'formula-filter-modal'
		) as HTMLDialogElement | null;
		if (modal) {
			modal.showModal();
		}
	};

	// let toggleStates = [
	// 	Chemistry,
	// 	Matter,
	// 	Gas_Laws,
	// 	Physics,
	// 	Kinematics,
	// 	Dynamics,
	// 	Energy,
	// 	Waves,
	// 	Electricity,
	// ];

	let ChemistryTopics = [Matter, Gas_Laws];
	let Chem = [Chemistry, ...ChemistryTopics];

	let PhysicsTopics = [Kinematics, Dynamics, Energy, Waves, Electricity];
	let Phy = [Physics, ...PhysicsTopics];

	let toggleStates = [...Chem, ...Phy];

	let findIfChecked = (topicName: string) => {
		let match = true;
		toggleStates.forEach((toggleState) => {
			if (topicName === toggleState.getName()) {
				match = toggleState.isToggled();
			}
		});

		return match;
	};

	let toggleToggleState = (topicName: string) => {
		toggleStates.forEach((toggleState) => {
			if (topicName === toggleState.getName()) {
				if (topicName === 'Chemistry') {
					let s = findIfChecked('Chemistry');
					if (s === true) {
						Chem.forEach((topic) => {
							topic.setToggleState(false);
						});
					} else {
						Chem.forEach((topic) => {
							topic.setToggleState(true);
						});
					}
				}
				toggleState.toggle();
			}
		});
	};
</script>

<!----------------------------------------------------------------->
<!-----------------| Component |----------------------------------->
<!----------------------------------------------------------------->
<div class="FormulaFilterButton">
	<GlowButton onClick={openModal}>Filter By Topic</GlowButton>
</div>

<dialog
	id="formula-filter-modal"
	class="modal"
>
	<div class="modal-box">
		<!--Title-->
		<div class="header">
			<u class="text-lg font-bold">Select Topics To Display</u>
			<div class="modal-action">
				<form method="dialog">
					<!-- if there is a button in form, it will close the modal -->
					<button class="btn">X</button>
				</form>
			</div>
		</div>
		<!--Content-->
		{#each psTopics as psTopic}
			<div class="toggle-switch-with-label">
				<label class="switch">
					<input
						type="checkbox"
						checked={findIfChecked(psTopic)}
						oninput={() => {
							toggleToggleState(psTopic);
						}}
					/>
					<span class="slider round"></span>
				</label>
				<span class="switch-label"
					>{psTopic.replaceAll('_PS', '').replaceAll('_', ' ')}</span
				>
			</div>
		{/each}
	</div>
</dialog>

<!----------------------------------------------------------------->
<!-----------------| Styling |------------------------------------->
<!----------------------------------------------------------------->
<style lang="scss">
	/* Add any Per-Component CSS styling here */
	.header {
		display: flex;
		flex-basis: wrap;
		gap: 1vw;
		align-items: center;
		justify-content: center;
		height: 7vh;
	}

	.btn {
		display: flex;
		margin-bottom: 4vh;
		margin-top: auto;
		justify-self: flex-end;
		margin-left: 15vw;
	}

	/* The switch - the box around the slider */
	.switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
	}

	.toggle-switch-with-label {
		display: flex;
		flex-basis: row wrap;
		gap: 1vw;
		align-items: center;
		justify-content: flex-start;
		height: 6vh;
	}

	.switch-label {
		font-size: 2.5vh;
	}

	/* Hide default HTML checkbox */
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	/* The slider */
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.2s;
	}

	input:checked + .slider {
		background-color: #2196f3;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #2196f3;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>

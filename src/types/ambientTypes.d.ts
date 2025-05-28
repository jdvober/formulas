/*
Use

type TypeName = {
	...etc
}

to have these types be available everywhere in your file.

You can also import the "Type" of a component!
Example:

declare import type FormatA from '/src/components/Formulas/FormatA.svelte'
 *
*/

type TermType = {
	value: {
		long: string
		short: string
	}
	color: string
	units: {
		type: 'SIMPLE' | 'FRACTIONAL'
		long: { value1: string; value2: string }
		short: { value1: string; value2: string }
	}

	exampleValue: string
	description: string
}

type ToggleState = {
	id: string
	name: string
	checkedState: boolean
	tags: string[]
}

// Accepts any form of {key: string | number}, {a: string | number}, {a: string | number, b: string | number}, {a: string | number, b: string | number, c: string | number} etc.
type SubS = {
	[key: string]: string | number
}

type SupS = {
	[key: string]: string | number
}

type Toggle = {
	getName: () => string
	isToggled: () => boolean
	toggle: () => boolean
	setToggleState: (newToggleState: boolean) => boolean
}

type ElementType = {
	name: string
	appearance: string
	atomic_mass: number
	boil: number
	category: string
	density: number
	discovered_by: string
	melt: number
	molar_heat: number
	named_by: string
	number: number
	period: number
	group: number
	phase: string
	source: string
	bohr_model_image: string
	bohr_model_3d: string
	spectral_img: string
	summary: string
	symbol: string
	xpos: number
	ypos: number
	wxpos: number
	wypos: number
	shells: number[]
	electron_configuration: string
	electron_configuration_semantic: string
	electron_affinity: number
	electronegativity_pauling: number
	ionization_energies: number[]
	hex: string
	image: {
		title: string
		url: string
		attribution: string
	}
	block: string
	location: string
	background: string
	color: string
}

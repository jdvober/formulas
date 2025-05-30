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
	name: string | null
	appearance: string | null
	atomicMass: number | null
	boil: number | null
	category: string | null
	density: number | null
	discoveredBy: string | null
	melt: number | null
	molarHeat: number | null
	namedBy: string | null
	number: number | null
	period: number | null
	group: number | null
	charge: string | null
	phase: string | null
	source: string | null
	bohrModelImage: string | null
	bohrModel3d: string | null
	spectralImg: string | null
	summary: string | null
	symbol: string | null
	xpos: number | null
	ypos: number | null
	wxpos: number | null
	wypos: number | null
	shells: (number | null)[]
	electronConfiguration: string | null
	electronConfigurationSemantic: string | null
	electronAffinity: number | null
	electronegativityPauling: number | null
	ionizationEnergies: (number | null)[]
	hex: string | null
	image: {
		title: string | null
		url: string | null
		attribution: string | null
	}
	valenceElectrons: number | null
	block: string | null
	location: string | null
	background: string | null
	color: string | null
}

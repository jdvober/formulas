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

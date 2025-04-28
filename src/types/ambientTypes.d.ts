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
		long: string
		short: string
	}
	description: string
}

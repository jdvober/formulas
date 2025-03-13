/*

Put Global Types you want to be available everywhere in this file.  Do not export these types.  Included in the tsconfig.json "include" is a wildcard to pick up any *.d.ts files

type Compound = {
}

*/

type Result = { type: 'ok'; data: Data } | { type: 'error'; error: Error }
type Data = { type: 'text'; content: string } | { type: 'img'; src: string }

type FormatID = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'

type Format =
	| {
			id: 'A'
			variables: Variable[]
			variations: [
				// Variation 1
				`$${a}=\\frac{${b}}{${c}}$`,

				// Variation 2
				`$${c}=\\frac{${b}}{${a}}$`,

				// Variation 3
				`$${b}=${a}\\cdot${c}$`,
			]
	  }
	| {
			id: 'B'
			variables: Variable[]
			variations: string[]
	  }
	| {
			id: 'C'
			variables: Variable[]
			variations: string[]
	  }
	| {
			id: 'D'
			variables: Variable[]
			variations: string[]
	  }
	| {
			id: 'E'
			variables: Variable[]
			variations: string[]
	  }
	| {
			id: 'F'
			variables: Variable[]
			variations: string[]
	  }
	| {
			id: 'G'
			variables: Variable[]
			variations: string[]
	  }

type VariableColor = '#50FA7B' | '#FF79C6' | '#BD93F9' | '#8BE9FD'

type Variable = {
	symbol: { short: string; long: string }
	units: { symbol: string; name: string }[]
	color: VariableColor
}

type Topic = {
	title: string
	formulas: Formula[]
}

type Formula = {
	name: string
	id: string
	format: FormatID
	variables: Variable[]
}

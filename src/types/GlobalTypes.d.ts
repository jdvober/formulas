/*

Put Global Types you want to be available everywhere in this file.  Do not export these types.  Included in the tsconfig.json "include" is a wildcard to pick up any *.d.ts files

type Compound = {
}

*/

type FormatID = 'VARDEF' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'

type Format =
	| {
			id: 'VARDEF'
			variables: Variable[]
	  }
	| {
			id: 'A'
			variables: Variable[]
	  }
	| {
			id: 'B'
			variables: Variable[]
	  }
	| {
			id: 'C'
			variables: Variable[]
	  }
	| {
			id: 'D'
			variables: Variable[]
	  }
	| {
			id: 'E'
			variables: Variable[]
	  }
	| {
			id: 'F'
			variables: Variable[]
	  }
	| {
			id: 'G'
			variables: Variable[]
	  }

type VariableColor =
	| '#fe6a00'
	| '#FF5555'
	| '#FF79C6'
	| '#FFB86C'
	| '#F1FA8C'
	| '#D7AF00'
	| '#CAFC03'
	| '#50FA7B'
	| '#527CFA'
	| '#8BE9FD'
	| '#BD93F9'
	| '#B7A48A'
	| '#FF8787'
	| '#F40000'
	| '#EC8DC3'
	| '#FF0F97'
	| '#FFCC95'
	| '#FF8604'
	| '#E3EA9A'
	| '#E4F61F'
	| '#FFD82C'
	| '#997D00'
	| '#D9FD4B'
	| '#91B402'
	| '#6AE288'
	| '#07E63F'
	| '#6A88E2'
	| '#073FE6'
	| '#9CDEED'
	| '#1DD3FC'
	| '#D1B3FB'
	| '#7D2AF3'
	| '#CCBEAB'
	| '#8E7757'
	| '#F8F8F2'

type Unit = {
	short: string
	long: string
}

type VariableSymbol = {
	short: string
	long: string
}

type TermBase = {
	id: string
	color: VariableColor
	description: string
}

type DimensionlessVariable = TermBase & {
	type: 'TERM'
	variableSymbol: VariableSymbol
	subscript: string | number
}

type Variable = DimensionlessVariable & {
	type: 'TERM'
	units: Unit[]
}

type DimensionlessQuantity = TermBase & {
	type: 'TERM'
	magnitude: number
	subscript: number | string
}

type Quantity = DimensionlessQuantity & {
	type: 'TERM'
	units: Unit[]
}

type TermStyle =
	| 'DIMENSIONLESS_VARIABLE'
	| 'VARIABLE'
	| 'DIMENSIONLESS_QUANTITY'
	| 'QUANTITY'

type Term = (
	| DimensionlessQuantity
	| Quantity
	| DimensionlessVariable
	| Variable
) & { termType: TermStyle }

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

type DeltaSubscript =
	| 'NUMERICAL'
	| 'NUMERICAL_ZERO_BASED'
	| 'INITIAL_FINAL'
	| 'BEGINNING_END'
	| 'STARTING_ENDING'

type Operation = 'EQUALS' | 'DIVIDE'
type RPNStackEntry = [string | Term, string | Term, Operation]

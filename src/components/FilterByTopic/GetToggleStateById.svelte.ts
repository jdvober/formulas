export let getToggleStateById = (
	toggleStates: ToggleState[],
	targetId: string
): ToggleState => {
	let rv = [] as ToggleState[]
	toggleStates.forEach((toggleState) => {
		if (toggleState.id === targetId) {
			rv.push(toggleState)
		}
	})
	if (rv.length === 0) {
		return {
			id: 'NONE',
			name: 'NONE',
			checkedState: false,
			tags: ['NONE'],
		}
	} else {
		return rv[0]
	}
}

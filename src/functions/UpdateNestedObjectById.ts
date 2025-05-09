export let updateNestedObjectById = (
	obj: any,
	targetId: string | number,
	keyToUpdate: string,
	newValue: any
) => {
	// Check if the current object is the one we're looking for
	if (obj.id === targetId) {
		obj[keyToUpdate] = newValue
		return true
	}

	// Recursively search through object properties or array elements
	for (const key in obj) {
		if (typeof obj[key] === 'object' && obj[key] !== null) {
			const found = updateNestedObjectById(
				obj[key],
				targetId,
				keyToUpdate,
				newValue
			)
			if (found) return true
		}
	}

	return false
}

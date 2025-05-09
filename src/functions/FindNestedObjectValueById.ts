export let findNestedObjectValueById = (
	obj: any,
	targetId: string | number,
	keyName: string
) => {
	// Check if the current object is the one we're looking for
	if (obj.id === targetId) {
		return obj[keyName]
	}

	// Recursively search through object properties or array elements
	for (const key in obj) {
		if (typeof obj[key] === 'object' && obj[key] !== null) {
			const found = findNestedObjectValueById(obj[key], targetId, keyName)
			if (found) return true
		}
	}

	return false
}

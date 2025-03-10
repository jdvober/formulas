import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

type State = {
	/* Values go here.*/
	exampleValue: number
}

type Action = {
	/* Ways to alter the state go here.*/
	updateExampleValue: ( newValue: number ) => void
}

export const useMainStore = create<State & Action>()(
	persist(
		immer( ( set ) => ( {
			///////////
			// State //
			///////////
			exampleValue: 100,

			/////////////
			// Actions //
			/////////////
			updateExampleValue: ( newValue ) => { set( ( state: State ) => { state.exampleValue = newValue } ) },
		}
		) ),
		{
			// Use Local Storage
			name: "main-storage",
			storage: createJSONStorage( () => localStorage ), // (optional) by default, 'localStorage' is used
		}

	) )


// Zustand Documentation
/*
import { create } from 'zustand'

type State = {
  firstName: string
  lastName: string
}

type Action = {
  updateFirstName: (firstName: State['firstName']) => void
  updateLastName: (lastName: State['lastName']) => void
}

// Create your store, which includes both state and (optionally) actions
const usePersonStore = create<State & Action>((set) => ({
  firstName: '',
  lastName: '',
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
}))

// In consuming app
function App() {
  // "select" the needed state and actions, in this case, the firstName value
  // and the action updateFirstName
  const firstName = usePersonStore((state) => state.firstName)
  const updateFirstName = usePersonStore((state) => state.updateFirstName)

  return (
	<main>
	  <label>
		First name
		<input
		  // Update the "firstName" state
		  onChange={(e) => updateFirstName(e.currentTarget.value)}
		  value={firstName}
		/>
	  </label>

	  <p>
		Hello, <strong>{firstName}!</strong>
	  </p>
	</main>
  )
}


*/

/*
Deeply nested objects

If you have a deep state object like this:

type State = {
  deep: {
	nested: {
	  obj: { count: number }
	}
  }
}

Updating nested state requires some effort to ensure the process is completed immutably.
Normal approach

Similar to React or Redux, the normal approach is to copy each level of the state object. This is done with the spread operator ..., and by manually merging that in with the new state values. Like so:

  normalInc: () =>
	set((state) => ({
	  deep: {
		...state.deep,
		nested: {
		  ...state.deep.nested,
		  obj: {
			...state.deep.nested.obj,
			count: state.deep.nested.obj.count + 1
		  }
		}
	  }
	})),

This is very long! Let's explore some alternatives that will make your life easier.
With Immer

Many people use Immer to update nested values. Immer can be used anytime you need to update nested state such as in React, Redux and of course, Zustand!

You can use Immer to shorten your state updates for deeply nested object. Let's take a look at an example:

  immerInc: () =>
	set(produce((state: State) => { ++state.deep.nested.obj.count })),
*/

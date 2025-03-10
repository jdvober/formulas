import { create } from "zustand"

// import { persist } from "zustand/middleware"

export type GoogleProfile = {
	id: string
	email: string
	verified_email: boolean
	name: string
	given_name: string
	family_name: string
	picture: string
	locale: string
	hd: string
}

export const BlankGoogleProfile = {
	"id": "",
	"email": "",
	"verified_email": true,
	"name": "",
	"given_name": "",
	"family_name": "",
	"picture": "",
	"locale": "",
	"hd": ""
}
interface State {
	isLoggedIn: boolean
	setIsLoggedIn: ( loginStatus: boolean ) => void
	googleProfile: GoogleProfile | null
	setGoogleProfile: ( newGoogleProfile: GoogleProfile | null ) => void
}

export const useGoogleAuthStore = create<State>()(
	// persist(
	( set ) => ( { //(set, get)
		isLoggedIn: false,
		setIsLoggedIn: ( loginStatus ) => set( () => ( {
			isLoggedIn: loginStatus
		} ) ),

		googleProfile: BlankGoogleProfile,
		setGoogleProfile: ( newGoogleProfile ) => set( () => ( {
			googleProfile: newGoogleProfile
		} ) ),
	}
		// ),
		// {
		// name: "main-storage",
		// getStorage: () => sessionStorage,
		// }
	) )

/*
If you would like to use localstorage or sessionstorage, uncomment the commented "persist" sections and see zustand documentation
*/

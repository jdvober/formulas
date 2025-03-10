import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Button, HStack, Text } from '@chakra-ui/react'
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google'

import { Avatar } from '@/components/ui/avatar.tsx'
import { useGoogleAuthStore } from '../../stores/GoogleAuthStore.ts'

interface GoogleLoginButtonProps {}
export const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = () => {
	/* eslint-disable  @typescript-eslint/no-explicit-any */
	const [user, setUser]: [any, any] = useState([])
	/* eslint-disable  @typescript-eslint/no-explicit-any */
	const [profile, setProfile]: [any, any] = useState([])

	// const isLoggedIn = useGoogleAuthStore((state) => state.isLoggedIn)
	const setIsLoggedIn = useGoogleAuthStore((state) => state.setIsLoggedIn)
	// const googleProfile = useGoogleAuthStore((state) => state.googleProfile)
	const setGoogleProfile = useGoogleAuthStore(
		(state) => state.setGoogleProfile
	)

	const login = useGoogleLogin({
		onSuccess: (codeResponse) => {
			setUser(codeResponse)
			setIsLoggedIn(true)
		},
		onError: (error) => console.log('Login Failed:', error),
	})

	useEffect(() => {
		if (user) {
			axios
				.get(
					`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
					{
						headers: {
							Authorization: `Bearer ${user.access_token}`,
							Accept: 'application/json',
						},
					}
				)
				.then((res) => {
					setProfile(res.data)
					setGoogleProfile(res.data)
					console.log(res.data)
				})
				.catch((err) => console.log(err))
		}
	}, [user])

	// log out function to log the user out of google and set the profile array to null
	const logOut = () => {
		googleLogout()
		setProfile(null)
		setGoogleProfile(null)
		setIsLoggedIn(false)
	}

	return (
		<div>
			{profile ? (
				<Button onClick={() => logOut()}>
					<HStack>
						<Avatar
							name={profile.name}
							src={profile.picture}
							size="sm"
						/>
						<Text color="black">Logout</Text>
					</HStack>
				</Button>
			) : (
				<GoogleLogin
					onSuccess={(credentialResponse) => {
						console.log(credentialResponse)
						login()
					}}
					onError={() => {
						console.log('Login Failed')
					}}
				/>
			)}
		</div>
	)
}

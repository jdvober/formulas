import { Button } from "@/components/ui/button"
import React from "react"
import { NavLink } from "react-router-dom"

type Props = {
	children: React.ReactNode // The stuff inside the tag
	to: string // A string with the React Router Route
	// Define arbitrary props
	[key: string]: any
}
type NavLinkButtonProps = Props extends Record<string, never>
	? React.FC<Record<string, never>>
	: React.FC<Props>

export const NavLinkButton: NavLinkButtonProps = ({
	to,
	children,
	...rest
}) => {
	return (
		<Button {...rest}>
			<NavLink className="NavButton" to={to}>
				{children}
			</NavLink>
		</Button>
	)
}

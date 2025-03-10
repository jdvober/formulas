import { Flex, Text } from "@chakra-ui/react"
import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
	const error: any = useRouteError()
	console.error(error)

	return (
		<Flex
			id="error-page"
			direction={"column"}
			overflow={"hidden"}
			h="50vh"
			mt="25vh"
			mb="25vh"
			justifyItems={"center"}
			justifyContent={"center"} /*justify ==> along main axis*/
			alignItems={"center"} /*align ==> along cross axis*/
		>
			<Text textStyle="4xl">Oops!</Text>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</Flex>
	)
}

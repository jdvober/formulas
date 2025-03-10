import { Button } from "@chakra-ui/react"
import { useState } from "react"

const useCopyToClipboard = () => {
	const [isCopied, setIsCopied] = useState(false)

	const copyToClipboard = async (content: any) => {
		try {
			await navigator.clipboard.writeText(content)
			setIsCopied(true)
			console.log("Copied to clipboard:", content)
		} catch (error) {
			setIsCopied(false)
			console.error("Unable to copy to clipboard:", error)
		}
	}

	return { isCopied, copyToClipboard }
}

type But = {
	content: any
}
export const CopyToClipboardButton: React.FC<But> = ({ content }) => {
	const { isCopied, copyToClipboard } = useCopyToClipboard()

	return (
		<div>
			<Button onClick={() => copyToClipboard(content)}>
				{isCopied ? "Copied!" : "Copy to Clipboard"}
			</Button>
		</div>
	)
}

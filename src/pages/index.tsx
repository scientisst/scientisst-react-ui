import { NextPage } from "next"

import TextButton from "../components/inputs/TextButton"

const Page: NextPage = () => {
	return (
		<div className="flex w-full flex-col items-center justify-center p-8">
			<div className="h-16" />
			<TextButton size="base" className="font-primary">
				Connect
			</TextButton>
		</div>
	)
}

export default Page

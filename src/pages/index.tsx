import { NextPage } from "next"

import useMediaQuery from "@/hooks/useMediaQuery"

const Page: NextPage = () => {
	const matches = useMediaQuery("(min-width: 600px)")

	return <>{matches ? "yes" : "no"}</>
}

export default Page

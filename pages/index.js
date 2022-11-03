import { useContext, useEffect } from "react"
import Head from "next/head"
import { tabContext } from "./_app"

const index = () => {
  const tab = useContext(tabContext)

  useEffect(() => tab.setCurrentTab("Home"), [])

  return (
    <div className="grid place-items-center h-screen">
      <Head>
        <title>Home</title>
      </Head>
      <h1 className="text-3xl">Home</h1>
    </div>
  )
}
export default index
import { useRouter } from "next/router"
import { createContext, useState } from "react"
import Layout from '../components/Layout'
import Nav from '../components/nav/Nav'
import '../styles/globals.css'

export const tabContext = createContext()

function MyApp({ Component, pageProps }) {
  const [currentTab, setCurrentTab] = useState("")
  const router = useRouter()

  return (
    router.pathname !== "/login" ?
      <tabContext.Provider value={{currentTab, setCurrentTab}}>
        <Layout>
          <Nav />
          <Component {...pageProps} />
        </Layout>
      </tabContext.Provider>
      :
      <Component {...pageProps} />
  )
}

export default MyApp

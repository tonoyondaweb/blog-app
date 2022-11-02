import { useRouter } from "next/router"
import Layout from '../components/Layout'
import Nav from '../components/nav/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    router.pathname !== "/login" ?
    <Layout>
      <Nav />
      <Component {...pageProps} />
    </Layout>
    :
    <Component {...pageProps} />
  )
}

export default MyApp

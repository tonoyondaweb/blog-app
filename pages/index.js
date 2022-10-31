import Head from "next/head"

const index = () => {
  return (
    <div className="grid place-items-center h-screen">
      <Head>
        <title>Blog App</title>
      </Head>
      <h1 className="text-3xl text-center">Blog App</h1>
    </div>
  )
}
export default index
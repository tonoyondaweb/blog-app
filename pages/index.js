import Head from "next/head"

const index = () => {
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
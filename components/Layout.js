function Layout({children}) {
  return (
    <div className="h-screen flex flex-col-reverse lg:flex-col max-w-[1400px] mx-auto">
        {children}
    </div>
  )
}
export default Layout
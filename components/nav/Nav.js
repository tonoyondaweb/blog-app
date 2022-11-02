import NavElement from "./NavElement"
import { CgHome, CgProfile } from "react-icons/cg"

function Nav() {
  return (
    <nav className="border-t-[0.5px] border-gray/25 w-screen lg:border-t-0 lg:border-b-[0.5px] sticky">
      <ul className="max-w-[700px] mx-auto flex justify-around my-[20px]">
        <NavElement icon={<CgHome />} text="Home" active={true} />
        <NavElement icon={<CgProfile />} text="Profile" active={false} />
      </ul>
    </nav>
  )
}
export default Nav
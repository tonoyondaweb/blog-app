import NavElement from "./NavElement"
import { CgHome, CgProfile } from "react-icons/cg"
import { BiLogIn, BiLogOut } from "react-icons/bi"
import { auth } from '../../utils/firebase-config';
import { signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"

function Nav() {
  const [user] = useAuthState(auth)

  return (
    <nav className="border-t-[0.5px] border-gray/25 w-screen lg:border-t-0 lg:border-b-[0.5px] sticky">
      <ul className="max-w-[500px] mx-auto flex justify-around my-[20px]">
        <NavElement icon={<CgHome />} text="Home" link="/" />
        {user && <NavElement icon={<CgProfile />} text="Profile" link="/profile" />}
        {
          user ?
          <NavElement icon={<BiLogOut />} text="Log Out" clickHandler={() => {
            signOut(auth)
          }} />
          :
          <NavElement icon={<BiLogIn />} text="Log In" link="/login" />
        }
      </ul>
    </nav>
  )
}
export default Nav
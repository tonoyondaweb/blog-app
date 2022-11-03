import { FcGoogle } from "react-icons/fc"
import { auth } from "../utils/firebase-config"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import {useRouter} from "next/router"

function Login() {
    const [user, loading] = useAuthState(auth)
    const route = useRouter()

    const googleProvider = new GoogleAuthProvider()
    const googleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
                .then(result => console.log(result))
        } catch (err) {
            console.log(err)
        }
    }

    if(user) route.push("/")

        return (
            <div className="h-screen grid place-items-center">
                <div className="h-full w-screen flex flex-col justify-center items-center lg:flex-row lg:h-[700px] lg:w-[700px] lg:border-gray">
                    <h1 className="text-3xl">Post your thoughts!</h1>
                    <hr className="my-11 h-[0.5px] w-[70%] border-gray/25 lg:w-[0.5px] lg:h-[50%] lg:border-l lg:mx-11" />
                    <button onClick={googleSignIn} className="bg-cyan flex items-center gap-2 p-2 rounded-lg">
                        <FcGoogle />
                        Login with Google
                    </button>
                </div>
            </div>
        )
}
export default Login
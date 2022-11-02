import { FcGoogle } from "react-icons/fc"

function Login() {
    return (
        <div className="h-screen grid place-items-center">
            <div className="h-full w-screen flex flex-col justify-center items-center lg:flex-row lg:h-[700px] lg:w-[700px] lg:border-gray">
                <h1 className="text-3xl">Post your thoughts!</h1>
                <hr className="my-11 h-[0.5px] w-[70%] border-gray/25 lg:w-[0.5px] lg:h-[50%] lg:border-l lg:mx-11"/>
                <button className="bg-cyan flex items-center gap-2 p-2 rounded-lg">
                    <FcGoogle />
                    Login with Google
                </button>
            </div>
        </div>
    )
}
export default Login
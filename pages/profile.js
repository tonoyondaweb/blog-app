import { useContext, useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import { auth } from '../utils/firebase-config';
import { tabContext } from './_app';

function Profile() {
    const [user] = useAuthState(auth)
    const route = useRouter()
    const tab = useContext(tabContext)

    useEffect(() => {
        if (!user) route.push("/")
    }, [user])

    useEffect(() => tab.setCurrentTab("Profile"), [])
    
    return (
        <div className="h-screen grid place-items-center">
            <h1 className="text-3xl">Profile feed</h1>
        </div>
    )
}
export default Profile
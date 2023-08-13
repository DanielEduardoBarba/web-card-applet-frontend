import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { firebaseConfig } from "../config.js"
import "./login.css"


export default function Signup({setUser}) {


    // const logInWithGoogle =  (setLoggedName) => {

    //     const app = initializeApp(firebaseConfig)
    //     const auth = getAuth(app)
    //     const provider = new GoogleAuthProvider()

    //     signInWithPopup(auth, provider)
    //         .then(_user => {
    //             setLoggedName(_user.user.displayName)
    //         })
    //         .catch(console.error)

    // }


    const handleSubmit = (e) => {
        e.preventDefault()
        
        const userNotice = document.getElementById("info")

        if (document.getElementById("pass").value.length < 6) {
            userNotice.innerText = "Password must be at least 6 characters!"
            userNotice.style.color = "red"
            userNotice.classList.add("shake")
            setTimeout(() => {
                userNotice.classList.remove("shake")
            }, 1000)
            return
        }
        if (document.getElementById("pass").value != document.getElementById("confirmpass").value) {
            userNotice.innerText = "Password does not match!"
            userNotice.style.color = "red"
            userNotice.classList.add("shake")
            setTimeout(() => {
                userNotice.classList.remove("shake")
            }, 1000)
            return
        }
        const email = document.getElementById("email").value
        const pass = document.getElementById("pass").value

        const app = initializeApp(firebaseConfig)
        const auth = getAuth(app)
        createUserWithEmailAndPassword(auth, email, pass)
            .then((_user) => {
                localStorage.setItem("web-card-user",JSON.stringify(_user.user) )
                window.location.href = '/'
            })
            .catch(err=>{
                console.log(err.message)
                userNotice.innerText = err.message
                userNotice.style.color = "red"
                userNotice.classList.add("shake")
                setTimeout(() => {
                userNotice.classList.remove("shake")
            }, 1000)
            })


    }

    return (
        <>

            <main class="relative h-full overflow-hidden bg-white dark:bg-gray-800">

                <div class="min-h-screen bg-blue-400 flex justify-center items-center">
                    <div class="absolute w-60 h-60 rounded-xl bg-yellow-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
                    </div>
                    <div class="absolute w-48 h-48 rounded-xl bg-yellow-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
                    </div>
                    <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                        <div>
                            <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Sign Up</h1>
                            <p id="info" class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                                Create your account to build an e-card!</p>
                        </div>
                        <form onSubmit={handleSubmit}>

                            <div class="space-y-4">
                                <input id="email" type="text" placeholder="Email Address" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                                <input id="pass" type="text" placeholder="Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                                <input id="confirmpass" type="text" placeholder="Confirm Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                            </div>
                            <div class="text-center mt-6">
                                <button class="py-3 w-64 text-xl text-white bg-yellow-400 rounded-2xl">Create Account</button>
                                <p class="mt-4 text-sm">Already a User? <a href="/login" ><span class="underline cursor-pointer"> Log in</span></a>
                                </p>
                            </div>

                        </form>
                    </div>
                    <div class="w-40 h-40 absolute bg-yellow-300 rounded-full top-0 right-12 hidden md:block"></div>
                    <div
                        class="w-20 h-40 absolute bg-yellow-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
                    </div>
                </div>
            </main>

        </>
    )
}
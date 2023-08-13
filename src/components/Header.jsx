import userEvent from "@testing-library/user-event"



export default function Header({user}) {

    return (
        <>
            <header class="z-30 flex items-center w-full h-24 sm:h-32">
                <div class="container flex items-center justify-between px-6 mx-auto">
                    <div class="text-3xl font-black text-gray-800 uppercase dark:text-white">
                        Watch.ME
                    </div>
                    <p class="text-xs">{user?.name}</p>
                    <p class="text-xs">{user?.email}</p>
                    <div class="flex items-center">
                        <nav class="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
                            <a href="/" class="flex px-6 py-2">
                                Home
                            </a>
                            <a href="/about" class="flex px-6 py-2">
                                About
                            </a>
                           
                            {
                            !user
                                ?<a href="/signup" class="flex px-6 py-2">
                                    Sign Up
                                </a>
                                : <a href="/cards" class="flex px-6 py-2">
                                    My Cards
                                    </a>
                                }
                            {
                            !user
                                ?<a href="/login" class="flex px-6 py-2">
                                    Log In
                                </a>
                                :<a href="/logout" class="flex px-6 py-2">
                                Log Out
                                </a>
                                }
                        </nav>
                        <button class="flex flex-col ml-4 lg:hidden">
                            <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                            </span>
                            <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                            </span>
                            <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                            </span>
                        </button>
                    </div>
                </div>
            </header>

        </>
    )
}
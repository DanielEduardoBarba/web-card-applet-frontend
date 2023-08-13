
import Spline from '@splinetool/react-spline';

export default function Home() {

    return (
        <>

            <main  style={{
    transitionProperty: 'all',
    transitionDuration: '1000ms',
    transitionTimingFunction: 'linear',

    boxShadow: 'inset 0px 0px 80px 40px rgba(255, 255, 255, 0.5)',
  }}
                class="relative w-[50vw] rounded-2xl  border-[5px] border-white shadow-2xl inset-l  blur-xl hover:blur-0 ">

                <div class="relative z-20 flex items-center overflow-hidden bg-transparent shadow-xl">
                    <div class="container relative flex px-6 py-16 mx-auto">
                        <div class="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
                            <span class=" h-2 mb-12 bg-white shadow-xl"> </span>
                            <div class="flex flex-col w-screen shadow-xltext-3xl font-black leading-none text-white uppercase font-bebas-neue sm:text-8xl dark:text-white">

                                <p class="text-5xl sm:text-7xl">
                                    There are no 2nd
                                </p>
                                <p class="text-5xl sm:text-5xl">
                                    1st Impressions
                                </p>
                            </div>
                            <p class="my-5 w-screen text-sm text-white sm:text-base dark:text-white">
                                See what difference an e-business card can do for you! Sign up today!
                            </p>
                            <div class="flex mt-8">
                                <a href="/signup" class="px-4 py-2 mr-4 text-white uppercase bg-blue-500 border-2 border-transparent rounded-lg text-md hover:bg-blue-300">
                                    Get started
                                </a>
                                <a href="/about" class="px-4 py-2 text-blue-500 uppercase bg-transparent border-2 border-blue-500 rounded-lg dark:text-white hover:bg-blue-500 hover:text-white text-md">
                                    Read more
                                </a>
                            </div>
                        </div>
                        <div class="relative hidden sm:block sm:w-1/3 lg:w-3/5 rounded-l ">

                            {/* <Spline scene="https://prod.spline.design/zQInmkeEljqqRvmB/scene.splinecode" /> */}
                            {/* <img src="/images/object/10.png" class="max-w-xs m-auto md:max-w-sm" /> */}
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}
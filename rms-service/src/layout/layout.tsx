import React from 'react'
import Link from 'next/link';
import MainNav from './main-nav'
import { useRouter } from 'next/router';


const Layout: React.FC = (props) => {
    const router = useRouter()
    const aspath = router.asPath
    const path = aspath.slice(1)
    const breadcrumbs = path.split('/')

    return (

        <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
            <div className="flex items-start justify-between">
                <div className="h-screen hidden lg:block shadow-lg relative w-60">
                    <div className="bg-white h-full w-full dark:bg-gray-700">
                        <div className="flex items-center justify-start ml-5">
                            <MainNav />
                        </div>
                    </div>
                </div>
                <main className="flex flex-col w-full md:space-y-4">
                    <header className="w-full h-16 z-40 flex items-center justify-between ">
                        <div className="mx-8 flex items-center py-4 whitespace-nowrap">
                            <Link href="/">
                                <a className="text-gray-600 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg>
                                </a>
                            </Link>
                            {router.pathname !== "/" && breadcrumbs.slice(0, 2).map((path, index) =>
                                <div key={index}>
                                    <span className="mx-5 text-gray-500 dark:text-gray-300">
                                        /
                                    </span>
                                    {index === 0 ?
                                        <Link href={`/${path}`}>
                                            <a className="text-gray-600 dark:text-gray-200 hover:underline">
                                                {path}
                                            </a>
                                        </Link> :
                                        <Link href={`/${breadcrumbs[0]}/${path}`}>
                                            <a className="text-gray-600 dark:text-gray-200 hover:underline">
                                                {path}
                                            </a>
                                        </Link>

                                    }
                                </div>

                            )}


                        </div>
                        <div className="block lg:hidden ml-6">
                            <button className="flex p-2 items-center rounded-full bg-white shadow text-gray-500 text-md">
                                <svg width="20" height="20" className="text-gray-400" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
                            <div className="relative p-1 flex items-center w-full space-x-4 justify-end">
                                <button className="flex p-2 items-center rounded-full text-gray-400 hover:text-gray-700 bg-white shadow text-md">
                                    <svg width="20" height="20" className="" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z">
                                        </path>
                                    </svg>
                                </button>
                                <button className="flex p-2 items-center rounded-full bg-white shadow text-gray-400 hover:text-gray-700 text-md">
                                    <svg width="20" height="20" className="text-gray-400" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M912 1696q0-16-16-16-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5q16 0 16-16zm816-288q0 52-38 90t-90 38h-448q0 106-75 181t-181 75-181-75-75-181h-448q-52 0-90-38t-38-90q50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 190 28 307 158.5t117 282.5q0 139 19.5 260t50 206 74.5 158.5 85 119.5 91 88z">
                                        </path>
                                    </svg>
                                </button>
                                <span className="w-1 h-8 rounded-lg bg-gray-200">
                                </span>
                            </div>
                        </div>
                    </header>
                    {props.children}
                </main>
            </div>
        </main>
    )
}

export default Layout
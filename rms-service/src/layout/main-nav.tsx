import Link from 'next/link';

import Logo from './logo'
import React from 'react';
import { useRouter } from 'next/router';


const MainNav: React.FC = () => {
    const router = useRouter()
    
    const onPageStyle: String = "text-gray-800 border-purple-500 border-l-4 ml-[-5px]"
    return (
        <nav>
            <div>
                <Logo />
                <Link href='/'>
                    <a className={`${router.route === "/" ? onPageStyle : "text-gray-400"} w-full  dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start`} >
                        <span className="text-left">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z">
                                </path>
                            </svg>
                        </span>
                        <span className="mx-2 text-sm font-normal">
                            Dashbord
                        </span>
                    </a>
                </Link>
                <Link href='/store'>
                    <a className={`${router.pathname.includes("/store") ? onPageStyle : "text-gray-400"} w-full  flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800  `} >
                        <span className="text-left">

                            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24"
                                width="20" fill="currentColor">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M18.36 9l.6 3H5.04l.6-3h12.72M20 4H4v2h16V4zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zM6 18v-4h6v4H6z" />
                            </svg>
                        </span>
                        <span className="mx-2 text-sm font-normal">
                            Store
                        </span>
                    </a>
                </Link>
                <Link href="/products">
                    <a className={`${router.route.includes("/products") ? onPageStyle : "text-gray-400"} w-full flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 `} >
                        <span className="text-left">

                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" fill="currentColor"><rect fill="none" height="24" width="24" /><path d="M12,5.5l6,4.5v9H6v-9L12,5.5 M12,3L4,9v12h16V9L12,3L12,3z M11.5,9.5v3H11v-3h-1v3H9.5v-3h-1v3c0,0.83,0.67,1.5,1.5,1.5v4h1 v-4c0.83,0,1.5-0.67,1.5-1.5v-3H11.5z M13,11.5v3h1V18h1V9.5C13.9,9.5,13,10.4,13,11.5z" /></svg>
                        </span>
                        <span className="mx-2 text-sm font-normal">
                            Products
                        </span>
                    </a>
                </Link>

                <Link href="/orders">
                    <a className={`${router.pathname.includes("/orders") ? onPageStyle : "text-gray-400"} w-full flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 `} >
                        <span className="text-left">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="currentColor">
                                <path d="M0,0h24v24H0V0z" fill="none" />
                                <g><path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" />
                                    <rect height="2" width="6" x="9" y="7" />
                                    <rect height="2" width="2" x="16" y="7" />
                                    <rect height="2" width="6" x="9" y="10" />
                                    <rect height="2" width="2" x="16" y="10" />
                                </g>
                            </svg>
                        </span>
                        <span className="mx-2 text-sm font-normal">
                            Orders
                        </span>
                    </a>
                </Link>

                <Link href="/sales">
                    <a className={`${router.pathname.includes("/sales") ? onPageStyle : "text-gray-400"} w-full flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 `}>
                        <span className="text-left">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="currentColor"><g><rect fill="none" height="24" width="24" /><path d="M17,2H7C5.9,2,5,2.9,5,4v2c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V4C19,2.9,18.1,2,17,2z M17,6H7V4h10V6z M20,22H4 c-1.1,0-2-0.9-2-2v-1h20v1C22,21.1,21.1,22,20,22z M18.53,10.19C18.21,9.47,17.49,9,16.7,9H7.3c-0.79,0-1.51,0.47-1.83,1.19L2,18 h20L18.53,10.19z M9.5,16h-1C8.22,16,8,15.78,8,15.5C8,15.22,8.22,15,8.5,15h1c0.28,0,0.5,0.22,0.5,0.5C10,15.78,9.78,16,9.5,16z M9.5,14h-1C8.22,14,8,13.78,8,13.5C8,13.22,8.22,13,8.5,13h1c0.28,0,0.5,0.22,0.5,0.5C10,13.78,9.78,14,9.5,14z M9.5,12h-1 C8.22,12,8,11.78,8,11.5C8,11.22,8.22,11,8.5,11h1c0.28,0,0.5,0.22,0.5,0.5C10,11.78,9.78,12,9.5,12z M12.5,16h-1 c-0.28,0-0.5-0.22-0.5-0.5c0-0.28,0.22-0.5,0.5-0.5h1c0.28,0,0.5,0.22,0.5,0.5C13,15.78,12.78,16,12.5,16z M12.5,14h-1 c-0.28,0-0.5-0.22-0.5-0.5c0-0.28,0.22-0.5,0.5-0.5h1c0.28,0,0.5,0.22,0.5,0.5C13,13.78,12.78,14,12.5,14z M12.5,12h-1 c-0.28,0-0.5-0.22-0.5-0.5c0-0.28,0.22-0.5,0.5-0.5h1c0.28,0,0.5,0.22,0.5,0.5C13,11.78,12.78,12,12.5,12z M15.5,16h-1 c-0.28,0-0.5-0.22-0.5-0.5c0-0.28,0.22-0.5,0.5-0.5h1c0.28,0,0.5,0.22,0.5,0.5C16,15.78,15.78,16,15.5,16z M15.5,14h-1 c-0.28,0-0.5-0.22-0.5-0.5c0-0.28,0.22-0.5,0.5-0.5h1c0.28,0,0.5,0.22,0.5,0.5C16,13.78,15.78,14,15.5,14z M15.5,12h-1 c-0.28,0-0.5-0.22-0.5-0.5c0-0.28,0.22-0.5,0.5-0.5h1c0.28,0,0.5,0.22,0.5,0.5C16,11.78,15.78,12,15.5,12z" /></g></svg>
                        </span>
                        <span className="mx-2 text-sm font-normal">
                            Sales
                        </span>
                    </a>
                </Link>

                <Link href="/reports">
                    <a className={` ${router.pathname.includes("/reports") ? onPageStyle : "text-gray-400"} w-full flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 `} >
                        <span className="text-left">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </span>
                        <span className="mx-2 text-sm font-normal">
                            Reports
                        </span>
                    </a>
                </Link>
            </div>
        </nav>
    )
}
export default MainNav

import type { NextPage } from 'next'
import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

const Store: NextPage = () => {
  const [show, setShow] = useState(false)
  const handleDropdown = (e: React.FormEvent): void => {
    e.preventDefault();
    setShow(!show)
  }
  const handleLeave = (e: React.FormEvent): void => {
    e.preventDefault();
    setShow(false)
  }
  return (
    <div >
      <Head>
        <title>Store Management</title>
        <meta name="description" content="Store Management" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col w-full md:space-y-4">
        <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
          <section onMouseLeave={handleLeave} className="bg-white rounded-xl dark:bg-gray-900">
            <div className="container px-4 py-4 mx-auto flex">
              <div className="w-20 h-20 mx-4">
                <Image src="/images/fast-food.png" width={100} height={100} layout="responsive" alt="" />
              </div>
              <div className="grow">
                <p className="">Store Name</p>
                <p className="">State: Active</p>
                <p className="">Store Website: storename.supersonic-rms.com</p>
              </div>
              <div>
                <div className="relative inline-block mx-4">
                  <button onClick={handleDropdown} className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border rounded-xl hover:bg-slate-200">
                    <span className="mx-1">Store Actions</span>
                    <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div className={`${show ? "" : "hidden"} absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800`}>
                    <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                      View Live Site
                    </a>

                    <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                      Change working hours
                    </a>

                    <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                      Pause store : resume store
                    </a>

                    <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                      Early day close
                    </a>

                    <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                      Request domain change
                    </a>

                    <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                      Help
                    </a>
                    <a href="#" className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                      Sign Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-between mx-4 pb-2">
              <div className="">
                <p className="">Store role: Onwer</p>
                <button className="">Manage Roles</button>
              </div>
              <div className="border-l-4 pl-2">
                <p className="">Store plan: Free/pro</p>
                <button className="">Compare Plans</button>
              </div>
              <div className="border-l-4 pl-2">
                <p className="">Business Email: Not connected</p>
                <button className="">Get a Business Email</button>
              </div>
            </div>
          </section>
          <div className="w-3/4 h-auto bg-white mt-4 flex flex-col shadow overflow-hidden">
            <div className="mt-8 mx-auto md:ml-10 md:w-3/4 mb-8">
              <div className="flex justify-between">
                <h1 className="w-3/4 mb-6 text-4xl text-gray-400">Restaurant overview</h1>
                <button className="items-center w-28 p-2 text-sm text-gray-600 bg-white border rounded-xl hover:bg-slate-200">Edit Info</button>
              </div>
              <article className="">
                <section>
                  <table className="table-auto w-full text-gray-500">
                    <tbody>
                      <tr>
                        <td className=' tdstrong'>Restaurant ID</td>
                        <td>ID</td>
                      </tr>
                      <tr>
                        <td className=' tdstrong'>Name</td>
                        <td>name</td>
                      </tr>
                      <tr>
                        <td className=' tdstrong'>Email Address</td>
                        <td>email</td>
                      </tr>
                      <tr>
                        <td className=' tdstrong'>Phone Number</td>
                        <td>phone</td>
                      </tr>
                      <tr>
                        <td className=' tdstrong'>address</td>
                        <td>address</td>
                      </tr>
                    </tbody>
                  </table>
                </section>
              </article>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Store
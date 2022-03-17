import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { Fragment } from 'react'

const Sales: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sales Management</title>
        <meta name="description" content="Sales Management" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col w-full md:space-y-4">
        <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
          <div className="flex justify-between">
            <div className="flex">
              <h1 className="text-4xl font-semibold text-[#20455e]">Sales</h1>
              <span className="text-4xl font-semibold text-gray-400 ml-4">0</span>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
            <div className="py-8">
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>

                      <tr>
                        <th scope="col" className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                          sale ID
                        </th>
                        <th scope="col" className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                          Date
                        </th>
                        <th scope="col" className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                          Payment method
                        </th>
                        <th scope="col" className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                          total
                        </th>
                        <th scope="col" className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                          EXPENSES
                        </th>
                        <th scope="col" className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                          revenue
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            10001
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {Date.now()}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            cash
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            500 LE
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            300 LE
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            200 LE
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[500px] flex justify-center flex-col ">
            <div className="w-32 h-32 mx-auto">
              <Image src="/images/sales.png" width={100} height={100} layout="responsive" alt="" />
            </div>
            <div className="mx-auto text-center">
              <p className="">Once you start selling, you'll see sales here.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sales
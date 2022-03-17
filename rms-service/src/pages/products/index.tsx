import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link';

const Product: NextPage = () => {
  const array = [];
  return (
    <div >
      <Head>
        <title>Product Management</title>
        <meta name="description" content="Product Management" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col w-full md:space-y-4">
        <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
          <div className="flex justify-between">
            <div className="flex">
              <h1 className="text-4xl font-semibold text-[#20455e]">Products</h1>
              <span className="text-4xl font-semibold text-gray-400 ml-4">0</span>
            </div>
            <Link href="/products/create">
              <a className="items-center p-2 text-sm text-gray-600 bg-white border rounded-xl hover:bg-slate-200">+ New Product</a>
            </Link>
          </div>

          <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
            <div className="py-8">
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th colSpan={6} className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                          <div className="flex justify-between">
                            <div>
                              <select className="border border-gray-200 rounded-md ml-3">
                                <option value="All orders">ACTIVE</option>
                                <option value="To fulfill">Out of stock</option>
                                <option value="Canceled">Paused</option>
                              </select>
                            </div>
                            <div>
                              <input readOnly className="bg-gray-100 border border-gray-100 rounded-xl outline-transparent px-2 placeholder:italic placeholder:text-slate-400 " value="" placeholder=' Search' />
                            </div>
                          </div>
                        </th>
                      </tr>
                      <tr>
                        <th scope="col" className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                          Picture
                        </th>
                        <th scope="col" className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                          Name
                        </th>
                        <th scope="col" className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                          Type
                        </th>
                        <th scope="col" className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                          SKU
                        </th>
                        <th scope="col" className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                          Price
                        </th>
                        <th scope="col" className="px-5 py-3 bg-gray-200  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                          State
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="">
                            <Image src="/images/fast-food.png" alt="fast" width="20" height="20" />
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Burger
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            food
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            123
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            100LE
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            active
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {array.length < 1 ?
            <div className="w-full h-[500px] flex flex-col justify-center">
              <div className="w-32 h-32 mx-auto">
                <Image src="/images/fast-food.png" width={100} height={100} layout="responsive" alt="" />
              </div>
              <div className="mx-auto mt-4 text-center">
                <p className="">Add your first product</p>
                <p className="">Once you start adding products, you'll see them here.</p>
                <button className="text-gray-400">+ New Product</button>
              </div>
            </div>
            : ""
          }
        </div>
      </div>
    </div>
  )
}

export default Product
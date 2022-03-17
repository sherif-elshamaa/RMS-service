import React from 'react';

const leftmain: React.FC = () => {

    const handleProductName = (event: React.FormEvent) => {

    }
    const handleProductDescription = (event: React.FormEvent) => {

    }
    const handleCOG = (event: React.FormEvent) => {

    }

    const handleProfit = (event: React.FormEvent) => {

    }

    const handleMargin = (event: React.FormEvent) => {

    }
    return (
        <div className="grow h-auto w-2/4 space-y-16 pb-8">
            <div className="border  border-black rounded-md">
                <h2 className="text-lg px-6 py-6">
                    Images & Videos
                </h2>
                <hr />
                <div className="w-full flex justify-evenly py-6 ">
                    <button className="h-48 w-48 px-2 border border-black ">
                        sss
                    </button>
                    <button className="px-2 h-48 w-48 border border-black">
                        sss
                    </button>
                </div>
            </div>
            <div className=" border border-black rounded-md">
                <h2 className="text-lg px-6 py-6">
                    Product info
                </h2>
                <hr />
                <h3 className="text-md px-6 py-6">
                    BASIC INFO
                </h3>
                <div className="w-full  py-6 px-6">
                    <form className=" space-y-3">
                        <div className="flex flex-col">
                            <label className="">Name</label>
                            <input type="text" className="" value="" placeholder="Add a product name" onChange={handleProductName} />
                        </div>
                        <div className="flex flex-col">
                            <label className="">Description</label>
                            <textarea rows={4} className="" value="" placeholder="Add a product description" onChange={handleProductDescription} />
                        </div>
                    </form>
                </div>
            </div>
            <div className=" border border-black rounded-md">
                <h2 className="text-lg px-6 py-6">
                    Pricing
                </h2>
                <hr />
                <h3 className="text-md px-6 py-6">
                    price
                </h3>
                <div className="w-full  py-6 px-6">
                    <form className="flex justify-between">
                        <div className="flex flex-col w-1/3 px-4">
                            <label className="">Cost of goods</label>
                            <input onChange={handleCOG} type="text" className="" value="" placeholder="EGP 0" />
                        </div>
                        <div className="flex flex-col w-1/3 px-4">
                            <label className="">Profit</label>
                            <input onChange={handleProfit} type="text" className="" value="" placeholder="EGP 0" />
                        </div>
                        <div className="flex flex-col w-1/3 px-4">
                            <label className="">Margin</label>
                            <input onChange={handleMargin} type="text" className="" value="" placeholder="EGP 0" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default leftmain
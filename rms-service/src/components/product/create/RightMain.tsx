import Image from 'next/image';
import React from 'react';

const rightmain: React.FC = () => {
    return (
        <div className="w-1/3 h-80 ">
            <div className=" flex flex-col border border-black rounded-md mb-5 h-18">
                <div className="text-center text-lg space-x-2 mx-6 my-6">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label >Show in online store</label>

                </div>
            </div>
            <div className=" flex flex-col border border-black rounded-md h-full">
                <div className="mx-6 my-6">
                    <h2 className="text-lg ">
                        Collection
                    </h2>
                </div>
                <hr />
                <div className="flex flex-col justify-between grow w-full">
                    <div className="grow text-center text-lg space-x-2">
                        <label > I have a bike</label>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <hr />
                        <p>Create a new Collection.</p>
                        <Image width="100" height="100" src="/images/options.png" alt="" />
                    </div>

                    <div className="h-1/6  text-center text-lg ">
                        <button className="px-2 rounded-full border border-black"> + Create Collection</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default rightmain
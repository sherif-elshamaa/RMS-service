import React from 'react';

interface ScrollString { 
    scroll: String;
}

const tophead: React.FC<ScrollString> = props => {



    return (
        <section className={`${props.scroll} `}>
            <div className="flex justify-between px-20 w-full h-full">
                <h1 className="abslote text-xl grow my-8">United Product</h1>
                <div className="flex justify-between w-44 my-8">
                    <button className="px-2 rounded-full border border-black">
                        ...
                    </button>
                    <button className="px-2 rounded-full border border-black">
                        Cancel
                    </button>
                    <button className="px-2 rounded-full border border-black">
                        Save
                    </button>
                </div>
            </div>
        </section>
    )
}

export default tophead
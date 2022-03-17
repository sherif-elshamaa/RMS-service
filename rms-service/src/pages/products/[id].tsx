import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import TopHead from '../../components/product/create/TopHead'
import LeftMain from '../../components/product/create/LeftMain'
import RightMain from '../../components/product/create/RightMain'

const ProductPage: NextPage = () => {


    const [scroll, setScroll] = useState<String>(' z-40 h-24 w-full');

    const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
        const containerHeight = event.currentTarget.clientHeight;
        const scrollHeight = event.currentTarget.scrollHeight;
        const scrollTop = event.currentTarget.scrollTop;

        // console.log(containerHeight, scrollTop, scrollHeight);
        if (scrollTop < 100) {
            setScroll(' h-24 w-full');
        } else {
            setScroll('z-40 sticky top-0 bg-gradient-to-b from-sky-100 to-sky-50 border-t-2 border-gray-200');
        }


    };
    return (
        <div >
            <Head>
                <title>Create Product</title>
                <meta name="description" content="Create Product" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col w-full ">
                <div onScroll={scrollHandler} className="overflow-auto h-[calc(100vh-80px)] bg-gradient-to-b from-sky-100 to-sky-50">
                    <TopHead scroll={scroll} />
                    <section className=" flex m-6 space-x-6 h-full flex-wrap">
                        <LeftMain />
                        <RightMain />
                    </section>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
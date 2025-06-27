import React from 'react';


import Carousel from '../components/carousel';

const Home = () => {
    return (
        <>
            
                <section className="text-center py-10">
                    <h1 className="text-5xl font-bold">Welcome to Vancouver Indians 🇮🇳🇨🇦</h1>
                    <p className="text-lg mt-4 text-gray-600">
                        A warm and welcoming community for Indian immigrants in Vancouver
                    </p>
                </section>

                <section className="px-4 py-4">
                    <Carousel />
                </section>
                <section className='px-6 py-12 max-w-screen-lg mx-auto'>
                    <h2 className='text-4xl font-bold text-center mb-10'>About</h2>
                    <div className='card bg-base-100 shadow-md p-6'>
                        <h3 className='text-lg font-bold'>Who we are</h3>
                        <p className="text-lg mt-2 text-gray-600">
                            Vancouver Indians Group was founded by <b>Sunil Mantri</b> 16 years ago and is a grassroots community built by and for Indian immigrants living in the Greater Vancouver Area. Whether you’ve just landed or have been here for years, our goal is to make sure you never feel like you’re navigating this new chapter alone. We’re here to share resources, celebrate our culture, and help you find your people.
                        </p>
                    </div>
                    <div className='card bg-base-100 shadow-md p-6'>
                        <h3 className='text-lg font-bold'>What we do</h3>
                        <p className="text-lg mt-2 text-gray-600">
                            From curated WhatsApp groups to local meetups, cultural events, job boards, and food recommendations — we help Indian newcomers build a meaningful life in Vancouver. Our goal is to bridge the gap between back home and your new home, by offering a platform that connects students, working professionals, and families alike.
                        </p>
                    </div>
                    <div className='card bg-base-100 shadow-md p-6'>
                        <h3 className='text-lg font-bold'>Why It Matters</h3>
                        <p className="text-lg mt-2 text-gray-600">
                            Immigrating isn’t easy. It comes with challenges, especially when you’re far from familiar faces. Vancouver Indians was created to make that transition smoother — to help you build friendships, share experiences, and embrace the best of both worlds without losing your identity. Our strength lies in our unity, and we welcome everyone who wants to be part of something bigger than just themselves.
                        </p>
                    </div>
                </section>
                <section className="text-center mt-12 mb-20">
                    <div className="flex justify-center gap-4 mt-8">
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Join WhatsApp Group</button>
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Upcoming Events</button>
                    </div>
                </section>
          


        </>



    );

}

export default Home;
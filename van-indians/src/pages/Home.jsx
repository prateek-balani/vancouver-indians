import React, { useState } from 'react';


import Carousel from '../components/carousel';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [number, setNumber] = useState("");
    const [error, setError] = useState("");

    const isCanadianNumber = (number) => {
        const cleaned = number.replace(/\D/g, ""); // remove spaces, +, -, etc.
        if (!cleaned.startsWith("1") || cleaned.length !== 11) return false;

        const areaCode = cleaned.substring(1, 4);
        const canadianAreaCodes = ["204", "236", "249", "250", "289", "306", "343", "365", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"];

        return canadianAreaCodes.includes(areaCode);
    };

    const handleSubmit = () => {
        if (isCanadianNumber(number)) {
            setShowModal(false);
            window.open("https://chat.whatsapp.com/YOUR_INVITE_LINK", "_blank");
        } else {
            setError("Please enter a valid Canadian phone number starting with +1.");
        }
    };
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
                    <button className="btn btn-xs sm:btn-lg md:btn-md lg:btn-lg xl:btn-xl" onClick={() => setShowModal(true)}>Join WhatsApp Group</button>
                    <button className="btn btn-xs sm:btn-lg md:btn-md lg:btn-lg xl:btn-xl" onClick={() => window.open("https://www.facebook.com/share/p/16YbmoSvbr/")}>Join Facebook Group</button>
                </div>
            </section>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-80 max-w-full">
                        <h3 className="text-lg font-semibold mb-4 text-center">Enter your Canadian phone number</h3>
                        <input
                            type="tel"
                            value={number}
                            onChange={(e) => {
                                setNumber(e.target.value);
                                setError("");
                            }}
                            placeholder="+1 XXX XXX XXXX"
                            className="input input-bordered w-full mb-4"
                        />
                        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                        <div className="flex justify-between">
                            <button className="btn btn-error" onClick={() => setShowModal(false)}>Cancel</button>
                            <button className="btn btn-outline btn-info" onClick={handleSubmit}>Join</button>
                        </div>
                    </div>``
                </div>
            )}



        </>



    );

}

export default Home;
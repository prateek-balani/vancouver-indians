import React from 'react';

const ShortAds = () => {
    const ads = [
        { link: "ad-example.gif" },
        { link: "ad-example.gif" },
        { link: "ad-example.gif" },
        { link: "ad-example.gif" },
        { link: "ad-example.gif" },
        { link: "ad-example.gif" },
        { link: "ad-example.gif" },
        { link: "ad-example.gif" },
        { link: "ad-example.gif" },
        { link: "ad-example.gif" },
    ];
    return (
        <>
            {/* for desktop devices */}
            <div className='hidden xl:block absolute w-40 right-1 top-80 h-full shrink-0 pr-4'>
                <div className="space-y-4 sticky top-80 ">
                    {ads.map((ad, index) => (
                        <div key={index} className="h-[80px] shadow-lg overflow-hidden">
                            <img
                                src={ad.link}
                                alt={`ad-${index}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* for mobile devices */}
            <div className="xl:hidden w-full overflow-x-auto flex gap-2 px-4 py-2 bg-orange-100">
                {ads.map((ad, index) => (
                    <img
                        key={index}
                        src={ad.link}
                        alt={`ad-mobile-${index}`}
                        className="h-20 w-32 flex-shrink-0 rounded shadow"
                    />
                ))}
            </div>
        </>
    );
}

export default ShortAds
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
        <div className='xl:block absolute w-40 right-1 top-0 h-full shrink-0 pr-4'>
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
    );
}

export default ShortAds
import React from 'react';

const LongAds = () => {
    const ads = [
        { link: "ad-example.gif" },
        { link: "ad-example.gif" },
        { link: "ad-example.gif" }
    ];
    return (
        <>
            {ads.length > 0 ? (
                <>
                    {/* for desktop */}
                    < div className='hidden xl:block absolute w-60 left-1 top-60 h-full shrink-0 pr-4'>
                        <div className="space-y-4 sticky top-60 ">
                            {ads.map((ad, index) => (
                                <div key={index} className="h-[500px] shadow-lg overflow-hidden">
                                    <img
                                        src={ad.link}
                                        alt={`ad-${index}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div >
                    {/* for mobile */}
                    < div className="xl:hidden w-full overflow-x-auto flex gap-4 px-4 py-2 bg-orange-100" >
                        {
                            ads.map((ad, index) => (
                                <img
                                    key={index}
                                    src={ad.link}
                                    alt={`ad-mobile-${index}`}
                                    className="w-full h-full object-cover"
                                />
                            ))
                        }
                    </div >
                </>
            ) : null}
        </>
    );
}

export default LongAds
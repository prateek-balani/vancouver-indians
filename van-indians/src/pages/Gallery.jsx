import React from 'react';

const Gallery = () => {
    const imgs = [
        // {
        //     imageLink: "img-1.JPG",
        //     caption: "Volleyball Meet Up"
        // },
        // {
        //     imageLink: "img-2.JPG",
        //     caption: "Sunday lunch"
        // },
        // {
        //     imageLink: "img-3.JPG",
        //     caption: "Sunday lunch"
        // },
        // {
        //     imageLink: "img-4.JPG",
        //     caption: "Sunday lunch"
        // },
        // {
        //     imageLink: "img-5.JPG",
        //     caption: "Coffee Meetup"
        // },
        // {
        //     imageLink: "img-6.JPG",
        //     caption: "Sunday lunch"
        // },
        // {
        //     imageLink: "img-7.JPG",
        //     caption: "Saturday Picnic and Potluck"
        // },
        // {
        //     imageLink: "img-8.JPG",
        //     caption: "Saturday Picnic and Potluck"
        // },
        // {
        //     imageLink: "img-9.JPG",
        //     caption: "Sunday Lunch"
        // },
        // {
        //     imageLink: "img-10.JPG",
        //     caption: "Sunday Lunch"
        // },
        // {
        //     imageLink: "img-11.JPG",
        //     caption: "Sunday Lunch"
        // },
        // {
        //     imageLink: "img-12.JPG",
        //     caption: "Sunday Lunch"
        // },
        // {
        //     imageLink: "img-13.JPG",
        //     caption: "Coffee Meetup"
        // },
        // {
        //     imageLink: "img-14.JPG",
        //     caption: "Saturday Picnic and Potluck"
        // },
        // {
        //     imageLink: "img-15.JPG",
        //     caption: "Lovely cake arranged by one of the members(Poonam Mittal) with Vancouver Indians logo on it"
        // },
        // {
        //     imageLink: "img-16.JPG",
        //     caption: "Saturday Picnic and Potluck"
        // },
        // {
        //     imageLink: "img-17.JPG",
        //     caption: "Coffee meetup"
        // },
        // {
        //     imageLink: "img-18.JPG",
        //     caption: "Coffee meetup"
        // }
    ]
    const columns = 4;
    const columnImgs = Array.from({ length: columns }, (_, i) => imgs.filter((_, index) => index % columns === i));
    return (
        <>
            <div className="text-center py-10">
                <h2 className="text-4xl font-bold mb-6">Community Gallery</h2>
                <p className="text-gray-600 max-w-xl mx-auto">
                    A glimpse into our events, meetups, and celebrations 🎉
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-4">
                {columnImgs.map((columns, colIndex) => (
                    <div className="grid gap-4" key={colIndex}>
                        {columns.map((src, imgIndex) => (
                            <div key={imgIndex} >
                                <img src={src.imageLink} alt={src.caption || `Gallery image ${colIndex}-${imgIndex}`} className='rounded-sm'/>

                            </div>

                        ))}
                    </div>
                ))}
            </div>
        </>
    );

}

export default Gallery;
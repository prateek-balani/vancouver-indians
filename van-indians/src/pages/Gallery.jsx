import React from 'react';

const Gallery = () => {
    const imgs = [
        {
            imageLink: "",
            caption: ""
        },
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {columnImgs.map((columns, colIndex) => (
                    <div className="grid gap-4" key={colIndex}>
                        {columns.map((src, imgIndex) => (
                            <div key={imgIndex}>
                                <img src={src.imageLink} alt={src.caption || `Gallery image ${colIndex}-${imgIndex}`} />

                            </div>

                        ))}
                    </div>
                ))}
            </div>
        </>
    );

}

export default Gallery;
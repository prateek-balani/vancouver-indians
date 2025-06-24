import React from 'react';
const Events = () => {
    const eventList = [
        {
            title: "Brunch in Little India",
            description: "Do you love Indian Food? Come down to Little India and enjoy a wide variety of amazing food.",
            imgSrc: "/img-4.jpg",

        },
        
            {
                title: "Bollywood Dance Night",
                description: "Join us for an evening of Bollywood music and dance. Show off your moves or learn some new ones!",
                imgSrc: "/img-2.jpg",
            },
            {
                title: "Cricket Tournament",
                description: "Participate in our friendly cricket tournament or cheer for your favorite team. Fun for all ages!",
                imgSrc: "/img-5.jpg",
            },
            {
                title: "Diwali Celebration",
                description: "Celebrate the festival of lights with us. Enjoy cultural performances, food, and fireworks!",
                imgSrc: "/img-7.jpeg",
            },
        

    ];
    return (
        <div className="max-w-2xl mx-auto py-10 px-4">
            <h2 className="text-4xl font-bold text-center mb-8">Events</h2>

            <div className="space-y-8">
                {eventList.map((event, index) => (
                    <div className="hero bg-base-20 border border-black-600 shadow-md" key={index}>
                        <div className="hero-content flex-col lg:flex-row-reverse gap-6 w-full">
                            <img
                                src={event.imgSrc}
                                className="max-w-sm h-48 rounded-lg shadow-md object-cover"
                            />
                            <div>
                                <h1 className="text-5xl font-bold">{event.title}</h1>
                                <p className="py-6">
                                    {event.description}
                                </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>



    );

}
export default Events;
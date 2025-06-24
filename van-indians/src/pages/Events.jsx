import React from 'react';
const Events = () => {
    const eventList = [
        {
            title: "Brunch in Little India",
            description: "Do you love Indian Food? Come down to Little India and enjoy a wide variety of amazing food.",

        },
        
            {
                title: "Bollywood Dance Night",
                description: "Join us for an evening of Bollywood music and dance. Show off your moves or learn some new ones!",
            },
            {
                title: "Cricket Tournament",
                description: "Participate in our friendly cricket tournament or cheer for your favorite team. Fun for all ages!",
            },
            {
                title: "Diwali Celebration",
                description: "Celebrate the festival of lights with us. Enjoy cultural performances, food, and fireworks!",
            },
        

    ];
    return (
        <div className="max-w-2xl mx-auto py-10 px-4">
            <h2 className="text-4xl font-bold text-center mb-8">Events</h2>

            <div className="space-y-8">
                {eventList.map((event, index) => (
                    <div className="hero bg-base-20 ">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                className="max-w-sm rounded-lg shadow-2xl"
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
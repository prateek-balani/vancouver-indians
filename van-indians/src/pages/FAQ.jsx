import React from 'react';

const FAQ = () => {
    const faqs = [
    {
        question: "Where can I find rentals?",
        answer: "Check Facebook Marketplace for short and long-term rentals. Also try www.zumper.com, http://myroom-subrent-apartment.epizy.com, and www.airbnb.com."
    },
    {
        question: "What are options for food delivery or mess services?",
        answer: "You can use Uber Eats, Facebook Marketplace for monthly/weekly food delivery, or services like Yogi’s Kitchen."
    },
    {
        question: "How do I find schools in my area?",
        answer: "Visit your area's local school district website, e.g., Surrey schools."
    },
    {
        question: "Where do I go for immigration and work permit help?",
        answer: "Refer to the Indian Consulate (https://cgivancouver.gov.in/pages/Nzcz) and BLS India Visa Application Center (https://www.blsindia-canada.com/)."
    },
    {
        question: "Are there relocation services?",
        answer: "Yes, from USA to Canada or local movers via Facebook Marketplace."
    },
    {
        question: "Where can I find recreation centres?",
        answer: "Search on your local area’s city website for recreation centres."
    },
    {
        question: "Where are the religious places?",
        answer: "Popular options include local Gurudwaras, Burnaby Hindu Temple, and Laxmi Narayan Temple."
    },
    {
        question: "Which universities and colleges are popular?",
        answer: "SFU, UBC, Douglas College, and KPU are well-known institutions in the area."
    },
    {
        question: "Where can I book flights?",
        answer: "Use Google Flights, MakeMyTrip.com, Akbar Travels, or Skyscanner."
    },
    {
        question: "Where do I find jobs?",
        answer: "Check https://www.jobbank.gc.ca/home, LinkedIn, Indeed, Freelancer, and Upwork."
    },
    {
        question: "How can I transfer money internationally?",
        answer: "Use Wise.com, Western Union, or Exiap (https://www.exiap.com/guides/best-international-money-transfer-app)."
    },
    {
        question: "What are the banking options?",
        answer: "Canada's Big 6 banks, PC Financial, and Wealthsimple are reliable choices."
    },
    {
        question: "Where do I file taxes?",
        answer: "Use H&R Block, CRA Netfile, TurboTax, or Wealthsimple."
    },
    {
        question: "Where can I donate or contribute to charity?",
        answer: "Clothes: Thrifties, Salvation Army, Value Village. Blood: Canadian Blood Services. Food: Surrey Food Bank, Guru Nanak Food Bank, Vancouver Food Bank."
    },
    {
        question: "Where can I buy groceries?",
        answer: "No Frills, Real Canadian Superstore, Save-On-Foods, Chalo Freshco, and Walmart are good options."
    },
    {
        question: "Where can I buy Indian groceries?",
        answer: "Visit Fruiticana, Subzi Mandi, Cash & Carry, Indo-Fiji Stores, or Jeya Brothers."
    },
    {
        question: "Where can I buy furniture?",
        answer: "Try IKEA, The Brick, or La-Z-Boy."
    },
    {
        question: "Where do I shop for electronics?",
        answer: "Best Buy is a major retailer for electronics."
    },
    {
        question: "Where can I find home improvement stores?",
        answer: "Home Depot is a common go-to."
    },
    {
        question: "Where can I shop for clothes?",
        answer: "Winners, The Bay, and H&M have a wide selection."
    },
    {
        question: "Are there stores that have everything in one place?",
        answer: "Yes, stores like Walmart, H Mart, and IKEA offer many types of goods."
    },
    {
        question: "What are some discount stores?",
        answer: "Dollar Store, Dollarama, and A Buck or Two are popular discount chains."
    },
    {
        question: "Where can I go shopping?",
        answer: "Shopping centres include Lougheed Mall, Brentwood Mall, Metrotown, Willowbrook Mall, Surrey Central Mall, and Pacific Centre."
    },
    {
        question: "Where can I find discount outlets?",
        answer: "Tsawwassen Mills is a popular discount outlet mall."
    },
    {
        question: "What are some good places to visit?",
        answer: "Visit Horseshoe Bay, Tsawwassen Ferry Terminal, Waterfront, Lonsdale Quay, English Bay, Science World, and take the ferry to Lonsdale Quay."
    },
    {
        question: "Where can I eat at buffets?",
        answer: "Try An Indian Affair, Royal Chaska, Tandoori Flame, and Saravana Bhavan (vegetarian)."
    },
    {
        question: "Any recommendations for South Indian food?",
        answer: "Periavalan Dosa Place, Saravana Bhavan, and A2B are great choices for South Indian cuisine."
    }
];


    return (
        <div className="max-w-2xl mx-auto py-10 px-10">
            <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>

            <div className="space-y-8">
                {faqs.map((faq, index) => (
                    <div className="collapse collapse-arrow bg-base-200 bg-white/60 backdrop-blur-md shadow-md" key={index}>
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-medium">{faq.question}</div>
                        <div className="collapse-content text-base text-base-content/80">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );

}

export default FAQ;
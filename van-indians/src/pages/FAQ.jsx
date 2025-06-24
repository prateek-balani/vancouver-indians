import React from 'react';

const FAQ = () => {
    const faqs = [
        {
            question: "How can I join the Community?",
            answer: "You can join by either joining the Whatsapp Group or the Facebook group"
        },
        {
            question: "How can I join the Community?",
            answer: "You can join by either joining the Whatsapp Group or the Facebook group"

        },
        {
            question: "Is this only for newcomers?",
            answer: "Nope! Anyone in Vancouver with Indian roots is welcome — whether you're a student, professional, or long-term resident."
        },
        {
            question: "What kind of events do you organize?",
            answer: "All events will be listed in the events page, be on the lookout for it!"
        },
        {
            question: "Are job posts allowed in the group?",
            answer: "Yes, we encourage sharing job openings, housing leads, and helpful resources — respectfully."
        }
    ];


    return (
        <div className="max-w-2xl mx-auto py-10 px-4">
            <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div className="collapse collapse-arrow bg-base-200" key={index}>
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
import { useState, useEffect } from 'react';

const testimonialsData = [
    {
        text: "This hotel exceeded all our expectations! The staff was incredibly welcoming.",
        author: "John Doe"
    },
    {
        text: "An amazing experience with top-notch facilities. Highly recommended!",
        author: "Jane Smith"
    },
    {
        text: "The rooms were spotless and the food was delicious. We will definitely return!",
        author: "Sarah Brown"
    }
];

const CommentSlider = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const updateTestimonial = (direction) => {
        if (direction === 'left') {
            setCurrentTestimonial(currentTestimonial > 0 ? currentTestimonial - 1 : testimonialsData.length - 1);
        } else {
            setCurrentTestimonial(currentTestimonial < testimonialsData.length - 1 ? currentTestimonial + 1 : 0);
        }
    };

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            updateTestimonial('right'); // Automatically go to the next testimonial
        }, 3000);
        
        return () => clearInterval(interval); // Cleanup on unmount
    }, [currentTestimonial]); // Depend on currentTestimonial to update correctly

    return (
        <section className="text-center py-12">
            <h2 className="text-3xl mb-8 font-montserrat">What Our Clients Say</h2>
            <div className="relative max-w-2xl mx-auto overflow-hidden bg-white p-5 rounded-lg shadow-lg h-52 flex items-center">
                <button 
                    onClick={() => updateTestimonial('left')} 
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-80 transition duration-300"
                    aria-label="Previous Testimonial"
                >
                    &#10094;
                </button>
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="min-w-full flex flex-col justify-center px-5">
                            <p className="text-lg mb-2 text-gray-800">{testimonial.text}</p>
                            <h4 className="text-md text-gray-600">{`- ${testimonial.author}`}</h4>
                        </div>
                    ))}
                </div>
                <button 
                    onClick={() => updateTestimonial('right')} 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-80 transition duration-300"
                    aria-label="Next Testimonial"
                >
                    &#10095;
                </button>
            </div>
        </section>
    );
};

export default CommentSlider;

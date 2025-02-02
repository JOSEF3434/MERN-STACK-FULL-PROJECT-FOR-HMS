// src/Contact.jsx
import { useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = { name, email, comment };

    try {
        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Network response was not ok');
        }

        toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
        });

        // Clear form fields
        setName('');
        setEmail('');
        setComment('');
    } catch (error) {
        setError('Error: ' + error.message);
    }
  };


    return (
        <section className="md:flex justify-between gap-8 mt-7 p-5 max-w-5xl mx-auto bg-gray-100 rounded-lg shadow-lg" id="contact">
            <div className="flex-1 p-5 text-4xl">
                <h2 className="text-2xl text-gray-800 pb-8">Contact Us</h2>
                <p className="text-lg text-gray-600 pb-2">ሀሣብ አስተያየት ካሎት እባክዎትን ከዚህ ያስቀምጡ 👉</p>
                <a href="#map" className="text-xl text-gray-800 no-underline pb-2">View on Map</a>
                <p className="text-lg text-gray-600 pb-2">Phone: 011000000</p>
                <p className="text-lg text-gray-600">Email: HibrtsegaH@gmail.com</p>
            </div>

            <form className="flex-1 p-5" onSubmit={handleSubmit}>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <div className="mb-5">
                    <label htmlFor="name" className="block text-gray-800 mb-2">Name</label>
                    <input placeholder="Enter your name" id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-800 mb-2">Email</label>
                    <input placeholder="Enter your email" id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="comment" className="block text-gray-800 mb-2">Comment</label>
                    <textarea name="comment" rows="5" placeholder="Enter your text here..." value={comment} onChange={(e) => setComment(e.target.value)} className="w-full p-2 border border-gray-300 rounded resize-y min-h-[100px] max-h-[300px]" required></textarea>
                </div>
                <button name="submit" type="submit" className="bg-yellow-400 text-white py-3 px-5 rounded hover:bg-yellow-300">Submit</button>
            </form>
        </section>
    );
};

export default Contact;

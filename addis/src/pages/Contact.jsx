//import React from 'react';
import Nave from '../public/Nave';
import Sfooter from '../public/Sfooter';

const Contact = () => {
  return (
    <div>
      <Nave />
      <div className="bg-gray-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Contact Us
          </h1>
          <div className="bg-white shadow-md rounded-lg p-4">
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text" id="name" name="name" placeholder="Enter name"
                    className="border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email" id="email" name="email" placeholder="Enter Email"
                    className="border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="message" className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message" name="message" placeholder="Enter Message"
                  rows={3}
                  className="border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Sfooter />
    </div>
  );
};

export default Contact;

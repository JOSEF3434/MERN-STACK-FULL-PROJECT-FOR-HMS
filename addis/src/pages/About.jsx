// About.jsx
import Nave from "../public/Nave";
import Sfooter from "../public/Sfooter";

const About = () => {
  return (
    <div>
      <Nave />
      <div className="bg-gray-100 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Addis Zemen Primary Hospital
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-700 mb-4">
            At Addis Zemen Primary Hospital, our mission is to provide high-quality, compassionate healthcare to our community. We strive to ensure that every patient receives personalized care tailored to their individual needs.
          </p>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            About Our Hospital
          </h2>
          <p className="text-gray-700 mb-4">
            Established with the aim of enhancing healthcare accessibility, Addis Zemen Primary Hospital integrates advanced medical technologies with a dedicated team of healthcare professionals. Our services include comprehensive medical care, preventive health programs, and patient education initiatives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <img
                src="https://via.placeholder.com/500x300"
                alt="Addis Zemen Primary Hospital"
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Why Choose Us?
              </h2>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>State-of-the-art medical facilities</li>
                <li>Experienced and compassionate healthcare professionals</li>
                <li>Comprehensive range of services</li>
                <li>Patient-centered approach to care</li>
                <li>Commitment to community health and wellness</li>
              </ul>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg inline-block"
              >
                Learn More About Our Services
              </a>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-4">
            For more information about our services or to schedule an appointment, please contact us at:
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Email:</strong> info@addiszemenhospital.com<br />
            <strong>Phone:</strong> +251 xxx xxx xxx
          </p>
        </div>
      </div>
      <Sfooter />
    </div>
  );
};

export default About;

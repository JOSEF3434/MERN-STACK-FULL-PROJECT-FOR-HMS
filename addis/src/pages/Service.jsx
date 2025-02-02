// Service.jsx
import Nave from "../public/Nave";
import Sfooter from "../public/Sfooter";

const Service = () => {
  return (
    <div>
      <Nave />
      <div className="bg-gray-100 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Our Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Emergency Care
              </h2>
              <p className="text-gray-700 mb-4">
                Our hospital offers 24/7 emergency services to handle urgent medical needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Outpatient Services
              </h2>
              <p className="text-gray-700 mb-4">
                Comprehensive outpatient services including consultations, diagnostics, and treatments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Inpatient Care
              </h2>
              <p className="text-gray-700 mb-4">
                Comfortable inpatient facilities with round-the-clock care from our dedicated staff.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Specialized Treatments
              </h2>
              <p className="text-gray-700 mb-4">
                We offer specialized treatments in various fields including cardiology, orthopedics, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Sfooter />
    </div>
  );
};

export default Service;

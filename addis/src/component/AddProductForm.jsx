//import React from 'react';

const AddProductForm = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <header className="mb-4 text-center">
          <h2 className="text-2xl text-gray-800">Add Product</h2>
        </header>
        <form
          action=""
          method="post"
          encType="multipart/form-data"
          className="product-form"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block mb-1 text-gray-700">
              Price:
            </label>
            <input
              type="text"
              id="price"
              name="price"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block mb-1 text-gray-700">
              Image:
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="type" className="block mb-1 text-gray-700">
              Type:
            </label>
            <select
              id="type"
              name="type"
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="" selected>
                Select Type Of Product
              </option>
              <option value="food">Food</option>
              <option value="drink">Drink</option>
              <option value="room">Room</option>
            </select>
          </div>

          <div>
            <input
              type="submit"
              value="Submit"
              className="bg-blue-500 text-white p-2 rounded cursor-pointer w-full hover:bg-blue-600"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;

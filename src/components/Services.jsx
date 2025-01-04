import React from 'react';
import { FaHome, FaHeart, FaBirthdayCake, FaUsers } from 'react-icons/fa'; // Font Awesome icons

const Services = () => {
  return (
    <div className="bg-gray-500 py-12 flex flex-col justify-center items-center">
      {/* Our Service Button */}
      <button className="bg-yellow-500 text-white py-3 px-8 rounded-full text-xl font-bold mb-6 hover:bg-yellow-600 transition-all">
        Outros Serviços
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-screen-lg w-full px-4">
        {/* Home Delivery Card */}
        <div className="bg-white p-6 rounded-lg shadow-xl text-center transition-transform transform hover:scale-105">
          <FaHome className="text-4xl text-yellow-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-bold text-yellow-500 mb-4">Home Delivery</h3>
          <p className="text-md text-gray-700">Aproveite a conveniência do nosso serviço de entrega para sua casa.</p>
        </div>

        {/* Wedding Party Card */}
        <div className="bg-white p-6 rounded-lg shadow-xl text-center transition-transform transform hover:scale-105">
          <FaHeart className="text-4xl text-yellow-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-bold text-yellow-500 mb-4">Wedding Party</h3>
          <p className="text-md text-gray-700">Celebre o amor com uma festa de casamento inesquecível.</p>
        </div>

        {/* Birthday Party Card */}
        <div className="bg-white p-6 rounded-lg shadow-xl text-center transition-transform transform hover:scale-105">
          <FaBirthdayCake className="text-4xl text-yellow-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-bold text-yellow-500 mb-4">Birthday Party</h3>
          <p className="text-md text-gray-700">Comemore seu aniversário com uma festa incrível!</p>
        </div>

        {/* Event Party Card */}
        <div className="bg-white p-6 rounded-lg shadow-xl text-center transition-transform transform hover:scale-105">
          <FaUsers className="text-4xl text-yellow-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-bold text-yellow-500 mb-4">Event Party</h3>
          <p className="text-md text-gray-700">Organize eventos especiais com um toque único.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;

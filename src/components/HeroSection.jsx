import React from 'react';
import aaaaImage from '../assets/aaaa.png';

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[80vh] md:h-[100vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${aaaaImage})` }}
    >
      {/* Camada de sobreposição escura */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Conteúdo da Hero Section */}
      <div className="relative z-20 text-center text-white flex flex-col justify-center items-center h-full px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Bem-vindo ao Culinary!
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          Descubra os sabores do mundo e viva uma experiência única.
        </p>

        {/* Botões de ação */}
        <div className="mt-8">
          <a
            href="#menu"
            className="inline-block bg-yellow-500 text-white px-8 py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Explore o Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

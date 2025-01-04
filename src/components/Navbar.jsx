import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar a visibilidade do menu

  // Monitorar a rolagem da página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="text-yellow-500 font-bold text-2xl uppercase tracking-wider">
          Culinary
        </div>

        {/* Links de Navegação para dispositivos maiores */}
        <div className="hidden md:flex space-x-12 text-lg font-medium">
          <a
            href="#home"
            className="text-gray-800 hover:text-yellow-500 transition duration-300"
          >
            Home
          </a>
          <a
            href="#menu"
            className="text-gray-800 hover:text-yellow-500 transition duration-300"
          >
            Menu
          </a>
          <a
            href="#about"
            className="text-gray-800 hover:text-yellow-500 transition duration-300"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-800 hover:text-yellow-500 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Botão de Menu para dispositivos móveis */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-800 hover:text-yellow-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Alterna a visibilidade do menu
          >
            {isMenuOpen ? (
              <span className="text-2xl">X</span> // Botão para fechar
            ) : (
              <span className="text-2xl">☰</span> // Ícone de menu
            )}
          </button>
        </div>
      </div>

      {/* Menu de navegação para dispositivos móveis */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-6 bg-white shadow-lg rounded-lg py-4 px-6">
          <a
            href="#home"
            className="text-gray-800 hover:text-yellow-500 transition duration-300"
            onClick={() => setIsMenuOpen(false)} 
          >
            Home
          </a>
          <a
            href="#menu"
            className="text-gray-800 hover:text-yellow-500 transition duration-300"
            onClick={() => setIsMenuOpen(false)} 
          >
            Menu
          </a>
          <a
            href="#about"
            className="text-gray-800 hover:text-yellow-500 transition duration-300"
            onClick={() => setIsMenuOpen(false)} 
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-800 hover:text-yellow-500 transition duration-300"
            onClick={() => setIsMenuOpen(false)} 
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

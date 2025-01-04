import React from 'react';
import { FaUtensils, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaFacebook } from 'react-icons/fa'; // Ícones relacionados ao tema

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white py-16 px-4 flex flex-col justify-center items-center space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-yellow-400">Sabores que Encantam</h2>
        <p className="text-xl">Transforme seus momentos com a melhor comida e serviços incríveis.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-12">
        {/* Seção de Contato */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-2xl font-semibold">Contato</h3>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-3xl" />
            <p className="text-lg">+55 11 1234-5678</p>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-3xl" />
            <p className="text-lg">Rua das Delícias, 123</p>
          </div>
        </div>

        {/* Seção de Redes Sociais */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-2xl font-semibold">Siga-nos</h3>
          <div className="flex gap-6">
            <a href="https://www.instagram.com" className="text-3xl hover:text-yellow-300 transition-all">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com" className="text-3xl hover:text-yellow-300 transition-all">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Seção de Serviços */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-2xl font-semibold">Nossos Serviços</h3>
          <div className="flex items-center gap-2">
            <FaUtensils className="text-3xl" />
            <p className="text-lg">Entrega Rápida</p>
          </div>
          <div className="flex items-center gap-2">
            <FaUtensils className="text-3xl" />
            <p className="text-lg">Festas e Eventos</p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="text-center">
        <p className="text-lg">&copy; 2025 Restaurante Culinary. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;

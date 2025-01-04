import React from 'react';

const SobreNos = () => {
  return (
    <section className="bg-gray-500 text-white py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Título */}
        <h2 className="text-4xl font-extrabold text-yellow-500 mb-8 text-center">
          Sobre Nós
        </h2>

        {/* Descrição */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-200">
              No <span className="font-semibold text-yellow-500">Culinary</span>, nossa paixão pela culinária nos levou a criar um espaço único onde cada prato conta uma história.
              Combinamos ingredientes frescos, receitas autênticas e um ambiente acolhedor para proporcionar aos nossos clientes uma experiência inesquecível.
            </p>
            <p className="text-lg leading-relaxed text-gray-200">
              Fundado em 2020, nosso restaurante tem como objetivo oferecer uma experiência gastronômica que vai além da refeição. Em cada prato, buscamos expressar a cultura e as tradições da [tipo de culinária], enquanto inovamos e trazemos sabores inesperados para o seu paladar.
            </p>
            <p className="text-lg leading-relaxed text-gray-200">
              Estamos sempre em busca da perfeição e da inovação, criando uma experiência memorável não só com os pratos, mas também com o ambiente e o atendimento.
            </p>
          </div>

          {/* Imagem do Chef e Info */}
          <div className="flex flex-col items-center justify-center space-y-6 lg:space-y-0 lg:flex-row lg:items-start lg:space-x-8">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-yellow-500 transform transition-transform hover:scale-110">
              <img
                src="https://i.pinimg.com/736x/34/62/ae/3462aef9244028e77a94e2709b1a6320.jpg"
                alt="Chef"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-yellow-500">João Silva</h3>
              <p className="text-lg text-gray-200">Chef Executivo</p>
              <p className="mt-4 text-gray-300">"Com dedicação e amor pela gastronomia, busco proporcionar uma experiência única e memorável para cada cliente que entra no nosso restaurante."</p>
            </div>
          </div>
        </div>

        {/* Chamada para ação */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-200 mb-4">Venha viver essa experiência gastronômica conosco!</p>
          <a
            href="#reservas"
            className="inline-block bg-yellow-500 text-gray-800 font-bold text-lg py-3 px-8 rounded-lg shadow-lg transform transition-all hover:bg-yellow-600 hover:scale-105"
          >
            Faça sua Reserva
          </a>
        </div>
      </div>
    </section>
  );
};

export default SobreNos;

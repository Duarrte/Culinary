import React from 'react';

const Testimonial = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-500 mb-8">O que nossos clientes dizem</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-xl">
            <p className="text-xl text-gray-700 mb-6">"A comida é simplesmente incrível! Cada prato é recheado de sabor e bem apresentado. Super recomendo!"</p>
            <h4 className="font-semibold text-2xl text-yellow-500 mb-2">João Silva</h4>
            <p className="text-lg text-gray-500">Cliente Regular</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-xl">
            <p className="text-xl text-gray-700 mb-6">"Uma experiência gastronômica fantástica! O atendimento foi excelente e o ambiente perfeito para nossa celebração familiar."</p>
            <h4 className="font-semibold text-2xl text-yellow-500 mb-2">Maria Oliveira</h4>
            <p className="text-lg text-gray-500">Organizadora de Eventos</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-xl">
            <p className="text-xl text-gray-700 mb-6">"Tive a melhor festa de aniversário graças ao serviço excelente e à comida deliciosa. Com certeza voltarei!"</p>
            <h4 className="font-semibold text-2xl text-yellow-500 mb-2">Ana Costa</h4>
            <p className="text-lg text-gray-500">Celebração de Aniversário</p>
          </div>

          {/* Testimonial 4 */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-xl">
            <p className="text-xl text-gray-700 mb-6">"O serviço de entrega foi super rápido e a comida chegou quentinha! Fiquei muito feliz com a experiência."</p>
            <h4 className="font-semibold text-2xl text-yellow-500 mb-2">Carlos Pereira</h4>
            <p className="text-lg text-gray-500">Cliente Delivery</p>
          </div>

          {/* Testimonial 5 */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-xl">
            <p className="text-xl text-gray-700 mb-6">"O meu casamento foi um sonho realizado! Tudo saiu conforme planejado, desde a comida até o atendimento impecável."</p>
            <h4 className="font-semibold text-2xl text-yellow-500 mb-2">Fernanda Lima</h4>
            <p className="text-lg text-gray-500">Cliente Casamento</p>
          </div>

          {/* Testimonial 6 */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-xl">
            <p className="text-xl text-gray-700 mb-6">"A festa de aniversário do meu filho foi perfeita. A equipe fez tudo para que fosse uma experiência inesquecível. Recomendo muito!"</p>
            <h4 className="font-semibold text-2xl text-yellow-500 mb-2">Juliana Souza</h4>
            <p className="text-lg text-gray-500">Mãe de Aniversariante</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

import React, { useState, useEffect } from 'react';

const MainDishesSection = () => {
  const [meals, setMeals] = useState([]);

  // Função para buscar os pratos principais da API
  const fetchMainDishes = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    console.log(data); // Verifique a resposta da API no console
    setMeals(data.meals ? data.meals.slice(0, 8) : []); // Garante que os dados sejam definidos corretamente
  };

  useEffect(() => {
    fetchMainDishes();
  }, []);

  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Principais Pratos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {meals.length > 0 ? meals.map((meal) => (
            <div key={meal.idMeal} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal || 'Prato'} // Se strMeal não existir, usa "Prato" como fallback
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-yellow-500">{meal.strMeal || 'Prato não disponível'}</h3>
                <p className="mt-2 text-sm">{meal.strArea || 'Área não especificada'}</p>
                {/* Valor fictício */}
                <p className="mt-2 text-lg font-bold">R$ {Math.floor(Math.random() * 50) + 20},00</p>
                <a
                  href={`/meal/${meal.idMeal}`} // Link para a página de detalhes do prato
                  className="mt-4 inline-block bg-yellow-500 text-white px-6 py-2 rounded-full text-lg hover:bg-yellow-600 transition"
                >
                  <i className="fas fa-utensils mr-2"></i> Ver Menu
                </a>
              </div>
            </div>
          )) : <p>Carregando...</p>}
        </div>
      </div>
    </section>
  );
};

export default MainDishesSection;

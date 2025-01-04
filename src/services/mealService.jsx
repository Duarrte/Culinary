import axios from 'axios';

// URL base da API
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

// Função para buscar uma receita aleatória
export const getRandomMeal = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/random.php`);
    return response.data.meals;
  } catch (error) {
    console.error('Erro ao buscar receita aleatória:', error);
    return [];
  }
};

// Função para buscar receitas por categoria
export const getMealsByCategory = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
    return response.data.meals;
  } catch (error) {
    console.error('Erro ao buscar receitas por categoria:', error);
    return [];
  }
};

// Função para buscar receitas por nome
export const searchMealsByName = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}/search.php?s=${name}`);
    return response.data.meals;
  } catch (error) {
    console.error('Erro ao buscar receitas por nome:', error);
    return [];
  }
};
 

// Função para buscar um prato aleatório
export const getPrato = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/random.php`);
    return response.data.meals[0]; // Pega o primeiro prato da resposta
  } catch (error) {
    console.error('Erro ao buscar prato aleatório:', error);
    return null;
  }
};




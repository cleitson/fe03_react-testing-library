import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente Pokedex', () => {
  test('Verificar as informações de determinado Pokémon', async () => {
    renderWithRouter(<App />);
  });

  test('Teste se existe um ícone de estrela nos Pokémon favoritados', async () => {
    renderWithRouter(<App />, { route: '/pokemon/25' });
  });
});

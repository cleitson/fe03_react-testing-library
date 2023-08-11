import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente Pokedex', () => {
  test('Verificar as informações da pokedex', async () => {
    renderWithRouter(<App />);
    const headingText = screen.getByRole('heading', { name: /encountered pokémon/i });
    expect(headingText).toBeInTheDocument();

    const btnNext = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(btnNext).toBeInTheDocument();
  });

  // test('Teste se existe um ícone de estrela nos Pokémon favoritados', async () => {
  //   renderWithRouter(<App />, { route: '/pokemon/25' });
  // });
});

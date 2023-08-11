import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente Pokedex', () => {
  test('Verificar as informações de determinado Pokémon', async () => {
    renderWithRouter(<App />);

    const linkMoreDetails = screen.getByRole('link', { name: /more details/i });
    const pokemonLink = linkMoreDetails.getAttribute('href');
    expect(pokemonLink).toBe('/pokemon/25');

    const pokemonName = screen.getByText(/pikachu/i);
    expect(pokemonName).toBeInTheDocument();

    const weight = screen.getByText(/average weight: 6\.0 kg/i);
    expect(weight).toBeInTheDocument();

    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType).toHaveTextContent(/electric/i);

    const pikachuImg = screen.getByRole('img', { name: /pikachu sprite/i });
    const imgSrc = pikachuImg.getAttribute('src');
    const imgAlt = pikachuImg.getAttribute('alt');

    expect(imgSrc).toBe('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
    expect(imgAlt).toBe('Pikachu sprite');
  });

  test('Teste se existe um ícone de estrela nos Pokémon favoritados', async () => {
    renderWithRouter(<App />, { route: '/pokemon/25' });

    const favoritarPokemon = screen.getByText(/pokémon favoritado\?/i);
    await userEvent.click(favoritarPokemon);
    const favoritePok = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    const imgSrc = favoritePok.getAttribute('src');
    const imgAlt = favoritePok.getAttribute('alt');

    expect(imgSrc).toBe('/star-icon.png');
    expect(imgAlt).toBe('Pikachu is marked as favorite');
  });
});

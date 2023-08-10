import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente FavoritePokemon', () => {
  test('Caso não tenha Pokémon favorito, e exibida No favorite pokemon found', async () => {
    renderWithRouter(<App />);

    const linkFavorite = screen.getByRole('link', { name: /favorite pokémon/i });
    expect(linkFavorite).toBeInTheDocument();

    await userEvent.click(linkFavorite);

    const verifyText = screen.getByText(/no favorite pokémon found/i);
    expect(verifyText).toBeInTheDocument();
  });
  test('Testa se o pokemon favoritado e exibido nos pokemons favoritos', async () => {
    renderWithRouter(<App />);

    const clickMoreDetails = screen.getByRole('link', { name: /more details/i });
    await userEvent.click(clickMoreDetails);
    const verifyPokemonName = screen.getByRole('heading', { name: /pikachu details/i });
    expect(verifyPokemonName).toBeInTheDocument();

    const clickFavorite = screen.getByText(/pokémon favoritado\?/i);
    await userEvent.click(clickFavorite);

    const clickFavPokemon = screen.getByRole('link', { name: /favorite pokémon/i });
    await userEvent.click(clickFavPokemon);
    const verifyPokemon = screen.getByText(/pikachu/i);
    expect(verifyPokemon).toBeInTheDocument();
  });
});

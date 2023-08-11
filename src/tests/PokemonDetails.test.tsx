import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

const routePath = '/pokemon/65';

describe('Testando o componente PokemonDetails', () => {
  test('Teste se as informações detalhadas do Pokémon são mostradas na tela', () => {
    renderWithRouter(<App />, { route: routePath });

    const name = screen.getByRole('heading', { name: /alakazam details/i });
    expect(name).toBeInTheDocument();
    expect(screen.queryByText(/more details/i)).not.toBeInTheDocument();

    const summary = screen.getByRole('heading', { level: 2, name: /summary/i });
    expect(summary).toBeInTheDocument();

    const paragraph = screen.getByText(/Closing both its eyes heightens/i);
    expect(paragraph).toBeInTheDocument();
  });

  test('Existe na página uma seção com os mapas contendo as localizações do Pokémon', () => {
    renderWithRouter(<App />, { route: routePath });

    const headingName = screen.getByRole('heading', { level: 2, name: /game locations of alakazam/i });
    expect(headingName).toBeInTheDocument();

    const mapName = screen.getByText(/unova accumula town/i);
    const imgMap = screen.getByRole('img', { name: /alakazam location/i });
    const imgMapSrc = imgMap.getAttribute('src');
    const imgMapAlt = imgMap.getAttribute('alt');

    expect(mapName).toBeInTheDocument();
    expect(imgMap).toBeInTheDocument();
    expect(imgMapSrc).toBe('https://archives.bulbagarden.net/media/upload/4/44/Unova_Accumula_Town_Map.png');
    expect(imgMapAlt).toBe('Alakazam location');
  });

  test('Teste se o usuário pode favoritar um Pokémon por meio da página de detalhes', async () => {
    renderWithRouter(<App />, { route: routePath });

    const favPokemon = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    expect(favPokemon).toBeInTheDocument();
    screen.getByRole('checkbox', { checked: false });
    await userEvent.click(favPokemon);
    screen.getByRole('checkbox', { checked: true });
    await userEvent.click(favPokemon);
    screen.getByRole('checkbox', { checked: false });
  });
});

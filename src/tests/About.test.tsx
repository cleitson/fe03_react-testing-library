import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componente About', () => {
  test('A pagina contem as informações sobre a pokédex', () => {
    renderWithRouter(<App />, { route: '/about' });

    const verifyText = screen.getByRole('heading', { level: 2, name: /about pokédex/i });
    expect(verifyText).toBeInTheDocument();

    const paragraph1 = screen.getByText(/This application simulates a Pokédex/i);
    expect(paragraph1).toBeInTheDocument();
    const paragraph2 = screen.getByText(/One can filter Pokémon by type/i);
    expect(paragraph2).toBeInTheDocument();

    const verifyImgLink = screen.getByRole('img', { name: /pokédex/i });
    const imgUrl = verifyImgLink.getAttribute('src');
    expect(imgUrl).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});

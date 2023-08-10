import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

// afterEach(() => {
//   vi.restoreAllMocks();
// });
describe('Testando o componente App', () => {
  test('A pagina deve ter o link Home e redireciona para ela', async () => {
    renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /home/i });
    expect(linkHome).toBeInTheDocument();
    await userEvent.click(linkHome);
    const verifyText = screen.getByRole('heading', { name: /encountered pokémon/i });
    expect(verifyText).toBeInTheDocument();
  });

  test('A pagina deve ter o link About e redireciona para ela', async () => {
    renderWithRouter(<App />);

    const linkAbout = screen.getByRole('link', { name: /about/i });
    expect(linkAbout).toBeInTheDocument();

    await userEvent.click(linkAbout);

    const verifyText = screen.getByRole('heading', { name: /about pokédex/i });
    expect(verifyText).toBeInTheDocument();
  });

  test('A pagina deve ter o link Favorite Pokémon e redireciona para ela', async () => {
    renderWithRouter(<App />);
    const linkFavorite = screen.getByRole('link', { name: /favorite pokémon/i });
    expect(linkFavorite).toBeInTheDocument();

    await userEvent.click(linkFavorite);

    const verifyText = screen.getByRole('heading', { name: /favorite pokémon/i });
    expect(verifyText).toBeInTheDocument();
  });

  test('Verifica se com url errada e redirecionado para pagina NotFound ', async () => {
    renderWithRouter(<App />, { route: 'dasd' });
    const verifyText = screen.getByRole('heading', { name: /page requested not found/i });
    expect(verifyText).toBeInTheDocument();
  });
});

import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testando o componete NotFound', () => {
  test('Teste se a pagina contem o texto, Page requested not found ', () => {
    renderWithRouter(<App />, { route: '/dasdqweq' });

    const verifyText = screen.getByRole('heading', { name: /page requested not found/i });
    expect(verifyText).toBeInTheDocument();

    const verifyImgLink = screen.getByRole('img');
    const imgUrl = verifyImgLink.getAttribute('alt');
    const imgSrc = verifyImgLink.getAttribute('src');

    expect(imgSrc).toBe('/404.gif');
    expect(imgUrl).toBe('Clefairy pushing buttons randomly with text I have no idea what i\'m doing');
  });
});

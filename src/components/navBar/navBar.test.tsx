import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './navBar';

jest.mock('../../../public/pokeapi_256.png', () => '/mocked-pokeapi_256.png');

it('renders the NavBar component', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  );

  const logoLink = screen.getByRole('link', { name: 'Poke logo' });
  const homeLink = screen.getByRole('link', { name: 'Home' });

  expect(logoLink).toBeDefined();
  expect(homeLink).toBeDefined();
});

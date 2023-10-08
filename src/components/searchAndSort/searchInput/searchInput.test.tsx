import { render, screen, fireEvent } from '@testing-library/react';
import { SearchInput } from './searchInput';

describe('SearchInput component', () => {
  it('renders the input element and handles input changes', () => {
    const searchQuery = 'Pikachu';
    const handleSearch = jest.fn();

    render(<SearchInput searchQuery={searchQuery} handleSearch={handleSearch} />);

    const labelElement = screen.getByText('Search by Name:');
    const inputElement = screen.getByPlaceholderText('Search by name');

    expect(labelElement).toBeDefined();
    expect(inputElement).toBeDefined();
    expect(inputElement).toBeDefined();

    fireEvent.change(inputElement, { target: { value: 'Charmander' } });

    expect(handleSearch).toHaveBeenCalledWith('Charmander');
  });
});

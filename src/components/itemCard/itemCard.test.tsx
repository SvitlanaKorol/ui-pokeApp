import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ItemCard } from './itemCard';
import { DataItem } from '../../types/types';

const navigateMock = jest.fn();

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    useNavigate: () => navigateMock,
  };
});

const data: DataItem[] = [
  {
    id: 1,
    src: '/path/to/image1.png',
    name: 'Pikachu',
    types: 'electric',
    stats: [
      {
        base_stat: 100,
        stat: {
          name: 'Stat1',
          url: 'stat-url',
        },
      },
    ],
    movies: 5,
  },
  {
    id: 2,
    src: '/path/to/image2.png',
    name: 'Bulbasaur',
    types: 'grass',
    stats: [
      {
        base_stat: 90,
        stat: {
          name: 'Stat2',
          url: 'stat-url-2',
        },
      },
    ],
    movies: 7,
  },
];

describe('ItemCard component', () => {
  it('should render the ItemCard component for each data item', () => {
    render(
      <MemoryRouter>
        {data.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </MemoryRouter>,
    );

    data.forEach((item) => {
      const itemName = screen.getByText(item.name);
      const itemType = screen.getByText(item.types);
      const previewButton = screen.getAllByText('View details');

      expect(itemName).toBeDefined();
      expect(itemType).toBeDefined();
      expect(previewButton).toBeDefined();
    });
  });

  it('navigates to the correct URL when the preview button is clicked', () => {
    render(
      <MemoryRouter>
        {data.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </MemoryRouter>,
    );

    const previewButtons = screen.getAllByText('View details');

    previewButtons.forEach((previewButton, index) => {
      fireEvent.click(previewButton);

      expect(navigateMock).toHaveBeenCalledWith(`/preview/${data[index].id}`, {
        state: { item: data[index] },
      });
    });
  });
});

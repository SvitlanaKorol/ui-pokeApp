import { render } from '@testing-library/react';
import { ContentView } from './contentView';
import { DataItem } from '../../types/types';

jest.mock('../itemCard/itemCard', () => {
  return {
    ItemCard: ({ item }: { item: DataItem }) => (
      <div data-testid={`item-card-${item.id}`}>{item.name}</div>
    ),
  };
});

const data: DataItem[] = [
  {
    id: 1,
    src: '/path/to/image.png',
    name: 'Pikachu',
    types: 'grass',
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
    src: '/path/to/image.png',
    name: 'Pokemon',
    types: 'poison',
    stats: [
      {
        base_stat: 100,
        stat: {
          name: 'Stat1',
          url: 'stat-url',
        },
      },
    ],
    movies: 7,
  },
];

describe('ContentView component', () => {
  it('renders the ContentView component with items Cards', () => {
    const { getByTestId } = render(<ContentView data={data} />);

    expect(getByTestId('item-card-1')).toBeDefined();
    expect(getByTestId('item-card-2')).toBeDefined();
  });

  it('renders the ContentView component with no items Cards', () => {
    const data: DataItem[] = [];

    const { queryByTestId } = render(<ContentView data={data} />);

    expect(queryByTestId('item-card-1')).toBeNull();
    expect(queryByTestId('item-card-2')).toBeNull();
  });
});

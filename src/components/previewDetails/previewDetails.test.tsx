import { render, screen } from '@testing-library/react';
import PreviewDetails from './previewDatails';
import { DataItem } from '../../types/types';

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
          name: 'Stat',
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
          name: 'Stat',
          url: 'stat-url',
        },
      },
    ],
    movies: 7,
  },
];

it('renders the PreviewDetails component with item data', () => {
  render(<PreviewDetails itemId="1" itemData={data[0]} />);

  const itemTitle = screen.getByText('Information for pokemon with id : 1');

  expect(itemTitle).toBeDefined();
});

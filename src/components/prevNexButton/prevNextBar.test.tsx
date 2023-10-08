import { render, screen, fireEvent } from '@testing-library/react';
import { PrevNexBar } from './prevNexBar';
import { BUTTON_NAMES } from '../../constants/constant';

const nextPage = jest.fn();
const prevPage = jest.fn();

const defaultProps = {
  currentPage: 1,
  totalPages: 10,
  nextPage,
  prevPage,
};

describe('Navbar component', () => {
  it('renders PrevNexBar component with correct buttons and page info', () => {
    render(<PrevNexBar {...defaultProps} />);

    const prevButton = screen.getByRole('button', { name: 'Previous' });
    const nextButton = screen.getByRole('button', { name: 'Next' });
    const pageInfo = screen.getByText('Page 1 of 10');

    expect(prevButton).toBeDefined();
    expect(nextButton).toBeDefined();
    expect(pageInfo).toBeDefined();

    expect(prevButton.textContent).toBe(BUTTON_NAMES.previousButton);
    expect(nextButton.textContent).toBe(BUTTON_NAMES.nextButton);
  });

  it('should calls nextPage when buttons are clicked', () => {
    render(<PrevNexBar {...defaultProps} />);

    const nextButton = screen.getByRole('button', { name: BUTTON_NAMES.nextButton });

    fireEvent.click(nextButton);
    expect(nextPage).toHaveBeenCalled();
  });
});

import { render, fireEvent, screen } from '@testing-library/react';
import { FilterSelect } from './filterSelect';

describe('FilterSelect component', () => {
  it('renders select element with options', () => {
    const selectedType = 'electric';
    const handleTypeChange = jest.fn();
    const uniqueTypes = ['electric', 'water', 'fire'];

    const { getByDisplayValue, getByText } = render(
      <FilterSelect
        selectedType={selectedType}
        handleTypeChange={handleTypeChange}
        uniqueTypes={uniqueTypes}
      />,
    );
    const labelElement = screen.getByTestId('filter-by-type');

    expect(labelElement).toBeDefined();

    const selectElement = getByDisplayValue(selectedType);

    expect(selectElement).toBeDefined();

    uniqueTypes.forEach((type) => {
      const optionElement = getByText(type);
      expect(optionElement).toBeDefined();
    });

    fireEvent.change(selectElement, { target: { value: 'water' } });

    expect(handleTypeChange).toHaveBeenCalledWith('water');
  });
});

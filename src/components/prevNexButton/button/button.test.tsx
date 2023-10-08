import { render, fireEvent } from '@testing-library/react';
import { Button } from './button';

describe('Button component', () => {
  it('renders a button with label', () => {
    const onClickMock = jest.fn();
    const label = 'Click me';

    const { getByText } = render(<Button onClick={onClickMock} label={label} />);

    const buttonElement = getByText(label);

    expect(buttonElement).toBeDefined();

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });

  it('renders a disabled button', () => {
    const onClickMock = jest.fn();
    const label = 'Disabled';

    const { getByText } = render(<Button onClick={onClickMock} label={label} disabled={true} />);

    const buttonElement = getByText(label);

    expect(buttonElement).toBeDefined();
  });
});

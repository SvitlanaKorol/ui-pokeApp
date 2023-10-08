import { render, screen } from '@testing-library/react';
import { LoadingView } from './loadingView';

describe('LoadingView component', () => {
  it('should renders the LoadingView component', () => {
    render(<LoadingView />);

    const loadingWrapper = screen.getByTestId('loading-wrapper');

    expect(loadingWrapper).toBeDefined();
  });
});

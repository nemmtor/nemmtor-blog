import { render, screen } from '@testing-library/react';
import { Hello } from './hello';

describe('Hello', () => {
  it('renders', () => {
    render(<Hello />);
    expect(screen.getByText('hello')).toBeInTheDocument();
  });
});

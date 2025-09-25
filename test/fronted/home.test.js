// test/frontend/home.test.js
import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home';

describe('Home', () => {
  it('should render the welcome message', () => {
    render(<Home />);

    expect(screen.getByText(/Welcome to the Library Management System/i)).toBeInTheDocument();
  });

  it('should render the system description', () => {
    render(<Home />);

    expect(screen.getByText(/This system helps you manage your library's books and other details/i)).toBeInTheDocument();
  });
});

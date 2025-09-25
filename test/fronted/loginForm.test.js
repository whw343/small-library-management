// test/frontend/loginForm.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '../../components/LoginForm';

describe('LoginForm', () => {
  it('should render the login form correctly', () => {
    render(<LoginForm />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  it('should call onLogin function when form is submitted', () => {
    const mockOnLogin = jest.fn();
    render(<LoginForm onLogin={mockOnLogin} />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'testuser@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' },
    });
    fireEvent.click(screen.getByText(/login/i));

    expect(mockOnLogin).toHaveBeenCalledWith({
      email: 'testuser@example.com',
      password: 'password123',
    });
  });
});
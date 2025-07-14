import { render, screen } from '@testing-library/react';
import Footer from '../../components/layout/Footer';

describe('Footer', () => {
  it('renders the copyright notice with the current year', () => {
    render(<Footer />);
    
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(`© ${currentYear} ShowScout. All Rights Reserved.`);
    
    expect(copyrightText).toBeInTheDocument();
  });

  it('renders a link to the TVmaze API', () => {
    render(<Footer />);
    
    const apiLink = screen.getByRole('link', { name: /tvmaze api/i });
    
    expect(apiLink).toBeInTheDocument();
    expect(apiLink).toHaveAttribute('href', 'https://www.tvmaze.com/api');
  });
});

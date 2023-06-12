import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  test('should render logo container with correct src attribute', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const logoElement = screen.getByAltText('Logo');
    const srcAttribute = logoElement.getAttribute('src');
    expect(srcAttribute).toBe('paprback_logo.svg');
  });
});



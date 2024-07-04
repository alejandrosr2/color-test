import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect, test, vi } from 'vitest';

import ColorSelect from './ColorSelect';

test('changes colors correctly when a new color is selected', () => {
  const handleChangeColor = vi.fn();

  render(<ColorSelect onChangeColor={handleChangeColor} />);


  // Select the first "Bg color:" element
  const bgColorElements = screen.getAllByText(/Bg color:/i);
  const h1ColorElements = screen.getAllByText(/H1 color/i);

  // Verify initial state
  expect(bgColorElements[0].nextSibling).toHaveTextContent('#BFDBFE');
  expect(h1ColorElements[0].nextSibling).toHaveTextContent('#5182EF');

  // Change to red
  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'red' } });
  expect(bgColorElements[0].nextSibling).toHaveTextContent('#FECACA');
  expect(h1ColorElements[0].nextSibling).toHaveTextContent('#E35151');

  // Change to yellow
  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'yellow' } });
  expect(bgColorElements[0].nextSibling).toHaveTextContent('#F4E8CD');
  expect(h1ColorElements[0].nextSibling).toHaveTextContent('#D5A136');

  // Change to dark
  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'dark' } });
  expect(bgColorElements[0].nextSibling).toHaveTextContent('#3C3C3F');
  expect(h1ColorElements[0].nextSibling).toHaveTextContent('#F4F4F5');
});

import { render, screen, fireEvent } from '@testing-library/react';
import CowDetails from './CowDetails';

test('should increment the likes local state value onClick', () => {
  render(<CowDetails likes={5} name={"Bessy"} farmName={"Test"} />);
  const buttonElement = screen.getByTestId("cow-details-button");
  expect(buttonElement).toBeInTheDocument();

  const likesElement = screen.getByTestId("cow-details-likes");
  expect(likesElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(likesElement).toHaveTextContent("6");

  fireEvent.click(buttonElement);
  expect(likesElement).toHaveTextContent("7");
});
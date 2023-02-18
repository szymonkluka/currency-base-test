import { render } from '@testing-library/react';
import CurrencyForm from './CurrencyForm';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

describe('Component CurrencyForm', () => {
  it('should render without crashing', () => {
    render(<CurrencyForm action={() => { }} />);
  });
  it('should run action callback with proper data on form submit', () => {
    const action = jest.fn();

    // render component
    render(<CurrencyForm action={action} />);

    //find "convert" button
    const submitButton = screen.getByText('Convert')

    //simulate user click on "convert" button
    userEvent.click(submitButton)

    //check if ation callback was used once(1)
    expect(action).toHaveBeenCalledTimes(1)

    //
  });
});
import { render } from '@testing-library/react';
import ResultBox from './ResultBox';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';


const testCasesChangeUSDtoPLN = [
  { amount: 100, change: '$100.00 = PLN 350.00' },
  { amount: 10, change: '$10.00 = PLN 35.00' },
];

const testCasesChangePLNtoUSD = [
  { amount: 100, change: 'PLN 100.00 = $28.57' },
  { amount: 40, change: 'PLN 40.00 = $11.43' },
];

const testCasesChangePLNtoPLN = [
  { amount: 100, change: 'PLN 100.00 = PLN 100.00' },
];

const testCasesChangeUSDtoUSD = [
  { amount: 100, change: '$100.00 = $100.00' },
];

describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox from="PLN" to="USD" amount={100} />);
  });
  it('should render proper info about conversion when USD -> PLN', () => {

    for (const testObj of testCasesChangeUSDtoPLN) {

      // render component
      render(<ResultBox from="USD" to="PLN" amount={testObj.amount} />);

      // find elements
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(testObj.change);
      // unmount component
      cleanup()

    }
  });

  it('should render proper info about conversion when PLN -> USD', () => {

    for (const testObj of testCasesChangePLNtoUSD) {

      // render component
      render(<ResultBox from="PLN" to="USD" amount={testObj.amount} />);

      // find elements
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(testObj.change);
      // unmount component
      cleanup()

    }
  });

  it('should render proper info about conversion when PLN -> PLN', () => {

    for (const testObj of testCasesChangePLNtoPLN) {

      // render component
      render(<ResultBox from="PLN" to="PLN" amount={testObj.amount} />);

      // find elements
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(testObj.change);
      // unmount component
      cleanup()

    }
  });

  it('should render proper info about conversion when USD -> USD', () => {

    for (const testObj of testCasesChangeUSDtoUSD) {

      // render component
      render(<ResultBox from="USD" to="USD" amount={testObj.amount} />);

      // find elements
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(testObj.change);
      // unmount component
      cleanup()

    }
  });
});
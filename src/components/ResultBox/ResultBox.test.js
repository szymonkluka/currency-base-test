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
  { amount: 122, change: 'PLN 122.00 = PLN 122.00' },
];
const testCasesChangeUSDtoUSD = [
  { amount: 100, change: '$100.00 = $100.00' },
  { amount: 144, change: '$144.00 = $144.00' },
];

const testCasesReturnWrongValuePLNtoUSD = [
  { amount: -100, change: 'Wrong value...' },
  { amount: -40, change: 'Wrong value...' },
];

const testCasesReturnWrongValueUSDtoPLN = [
  { amount: -100, change: 'Wrong value...' },
  { amount: -40, change: 'Wrong value...' },
];

const testCasesReturnWrongValuePLNtoPLN = [
  { amount: -100, change: 'Wrong value...' },
  { amount: -40, change: 'Wrong value...' },
];

const testCasesReturnWrongValueUSDtoUSD = [
  { amount: -100, change: 'Wrong value...' },
  { amount: -40, change: 'Wrong value...' },
];

const testCasesReturnZero = [
  { amount: 0, change: 'Wrong value...' },
  { amount: 0, change: 'Wrong value...' },
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

  it('should return Wrong value... when amount in conversion PLN => USD is smaller than 0', () => {

    for (const testObj of testCasesReturnWrongValuePLNtoUSD) {

      // render component
      render(<ResultBox from="PLN" to="USD" amount={testObj.amount} />);

      // find elements
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(testObj.change);
      // unmount component
      cleanup()

    }
  });

  it('should return Wrong value... when amount in conversion USD => PLN is smaller than 0', () => {

    for (const testObj of testCasesReturnWrongValueUSDtoPLN) {

      // render component
      render(<ResultBox from="USD" to="PLN" amount={testObj.amount} />);

      // find elements
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(testObj.change);
      // unmount component
      cleanup()

    }
  });

  it('should return Wrong value... when amount in conversion PLN => PLN is smaller than 0', () => {

    for (const testObj of testCasesReturnWrongValuePLNtoPLN) {

      // render component
      render(<ResultBox from="PLN" to="PLN" amount={testObj.amount} />);

      // find elements
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(testObj.change);
      // unmount component
      cleanup()

    }
  });

  it('should return Wrong value... when amount in conversion USD => USD is smaller than 0', () => {

    for (const testObj of testCasesReturnWrongValueUSDtoUSD) {

      // render component
      render(<ResultBox from="USD" to="USD" amount={testObj.amount} />);

      // find elements
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(testObj.change);
      // unmount component
      cleanup()

    }
  });

  it('should return Wrong value... when amount in conversion is equal 0', () => {

    for (const testObj of testCasesReturnZero) {

      // render component
      render(<ResultBox from="USD" to="PLN" amount={testObj.amount} />);

      // find elements
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(testObj.change);
      // unmount component
      cleanup()

    }
  });


});
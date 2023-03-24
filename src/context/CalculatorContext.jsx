import { createContext, useReducer } from 'react';
import { calculatorReducer } from './CalucaltorReducer';

export const CalculatorContext = createContext();

const initialState = {
  currentOperand: null,
  previousOperand: null,
  operation: null,
  overwrite: false,
};

const CalculatorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;

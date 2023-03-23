import { createContext, useReducer } from 'react';
import { reducer } from '../reducer/reducer';

export const CalculatorContext = createContext();

const initialState = {
  currentOperand: null,
  previousOperand: null,
  operation: null,
  overwrite: false,
};

const CalculatorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;

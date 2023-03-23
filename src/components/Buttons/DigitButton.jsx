import { useContext } from 'react';
import { ACTIONS } from '../../reducer/reducer';
import { CalculatorContext } from '../../context/CalculatorContext';

const DigitButton = ({ digit }) => {
  const { dispatch } = useContext(CalculatorContext);

  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
};

export default DigitButton;

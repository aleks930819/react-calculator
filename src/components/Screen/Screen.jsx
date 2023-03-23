import { useContext } from 'react';
import { formatOperand } from '../../utils';
import { CalculatorContext } from '../../context/CalculatorContext';
const Screen = () => {
  const { previousOperand, operation, currentOperand } =
    useContext(CalculatorContext).state;
  return (
    <div className="output">
      <div className="previous-operand">
        {formatOperand(previousOperand)} {operation}
      </div>
      <div className="current-operand">{formatOperand(currentOperand)}</div>
    </div>
  );
};

export default Screen;

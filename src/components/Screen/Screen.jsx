import { formatOperand } from '../../utils';
const Screen = ({ previousOperand, operation, currentOperand }) => {
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

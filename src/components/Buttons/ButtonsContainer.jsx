import DigitButton from './DigitButton';
import OperationButton from './OperationButton';

const ButtonsContainer = ({ dispatch }) => {
  return (
    <>
      <OperationButton dispatch={dispatch} operation="AC" span={true} />
      <OperationButton dispatch={dispatch} operation="DEL" />
      <OperationButton dispatch={dispatch} operation="÷" />
      <DigitButton dispatch={dispatch} digit="1" />
      <DigitButton dispatch={dispatch} digit="2" />
      <DigitButton dispatch={dispatch} digit="3" />
      <OperationButton dispatch={dispatch} operation="*" />
      <DigitButton dispatch={dispatch} digit="4" />
      <DigitButton dispatch={dispatch} digit="5" />
      <DigitButton dispatch={dispatch} digit="6" />
      <OperationButton dispatch={dispatch} operation="+" />
      <DigitButton dispatch={dispatch} digit="7" />
      <DigitButton dispatch={dispatch} digit="8" />
      <DigitButton dispatch={dispatch} digit="9" />
      <OperationButton dispatch={dispatch} operation="-" />
      <DigitButton dispatch={dispatch} digit="." />
      <DigitButton dispatch={dispatch} digit="0" />
      <OperationButton dispatch={dispatch} operation="=" span={true} />
    </>
  );
};

export default ButtonsContainer;

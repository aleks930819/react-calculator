import { ACTIONS } from '../../reducer/reducer';
import { CalculatorContext } from '../../context/CalculatorContext';
import { useContext } from 'react';

const OperationButton = ({ operation, span }) => {
  const { dispatch } = useContext(CalculatorContext);

  const className = `${span ? 'span-two' : ''}`;

  const clickHandler = (operation) => {
    switch (operation) {
      case 'AC':
        return dispatch({ type: ACTIONS.CLEAR });
      case 'DEL':
        return dispatch({ type: ACTIONS.DELETE_DIGIT });
      case '=':
        return dispatch({ type: ACTIONS.EVALUATE });
      default:
        return dispatch({
          type: ACTIONS.CHOOSE_OPERATION,
          payload: { operation },
        });
    }
  };

  return (
    <button className={className} onClick={() => clickHandler(operation)}>
      {operation}
    </button>
  );
};

export default OperationButton;

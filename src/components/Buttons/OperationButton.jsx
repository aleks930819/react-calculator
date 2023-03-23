import { ACTIONS } from '../../reducer/reducer';

const OperationButton = ({ dispatch, operation, span }) => {
  const className = `${span ? 'span-two' : ''}`;

  const clickHandler = () => {
    if (operation === 'AC') {
      dispatch({ type: ACTIONS.CLEAR });
    }

    if (operation === 'DEL') {
      dispatch({ type: ACTIONS.DELETE_DIGIT });
    }

    if (operation === '=') {
      dispatch({ type: ACTIONS.EVALUATE });
    }

    if (['+', '-', '*', '÷'].includes(operation)) {
      dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } });
    }
  };

  return (
    <button className={className} onClick={clickHandler}>
      {operation}
    </button>
  );
};

export default OperationButton;

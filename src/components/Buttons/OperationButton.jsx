import { ACTIONS } from '../../reducer/reducer';

const OperationButton = ({ dispatch, operation, span }) => {
  const className = `${span ? 'span-two' : ''}`;
  return (
    <button
      className={className}
      onClick={() => dispatch({ type: ACTIONS.CLEAR, payload: { operation } })}
    >
      {operation}
    </button>
  );
};

export default OperationButton;

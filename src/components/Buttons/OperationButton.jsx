const OperationButton = ({ operation, span }) => {
  const className = `${span ? 'span-two' : ''}`;
  return <button className={className}>{operation}</button>;
};

export default OperationButton;

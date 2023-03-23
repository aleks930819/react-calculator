export const formatOperand = (opreand) => {
  const integer_formater = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
  });

  if (opreand == null) {
    return;
  }
  const [integer, decimal] = opreand.split('.');

  if (decimal == null) {
    return integer_formater.format(integer);
  }
  return `${integer_formater.format(integer)}.${decimal}`;
};

export const evaluate = ({ currentOperand, previousOperand, operation }) => {
  const current = parseFloat(currentOperand);
  const previous = parseFloat(previousOperand);

  if (isNaN(current) || isNaN(previous)) {
    return;
  }
  let computation = '';

  switch (operation) {
    case '+':
      computation = previous + current;
      break;
    case '-':
      computation = previous - current;
      break;
    case '*':
      computation = previous * current;
      break;
    case '÷':
      computation = previous / current;
      break;
    default:
      break;
  }
  return computation.toString();
};

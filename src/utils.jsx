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

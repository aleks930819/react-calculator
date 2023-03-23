import DigitButton from './DigitButton';
import OperationButton from './OperationButton';

const ButtonsContainer = () => {
  return (
    <>
      <OperationButton operation="AC" span={true} />
      <OperationButton operation="DEL" />
      <OperationButton operation="÷" />
      <DigitButton digit="1" />
      <DigitButton digit="2" />
      <DigitButton digit="3" />
      <OperationButton operation="*" />
      <DigitButton digit="4" />
      <DigitButton digit="5" />
      <DigitButton digit="6" />
      <OperationButton operation="+" />
      <DigitButton digit="7" />
      <DigitButton digit="8" />
      <DigitButton digit="9" />
      <OperationButton operation="-" />
      <DigitButton digit="." />
      <DigitButton digit="0" />
      <OperationButton operation="=" span={true} />
    </>
  );
};

export default ButtonsContainer;

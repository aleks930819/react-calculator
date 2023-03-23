import { useReducer } from 'react';

import Container from './components/Container/Container';
import Screen from './components/Screen/Screen';

import './index.css';
import ButtonsContainer from './components/Buttons/ButtonsContainer';
const App = () => {
  // const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
  //   reducer,
  //   {}
  // );

  return (
    <Container>
      <Screen />
      <ButtonsContainer />
    </Container>
  );
};

export default App;

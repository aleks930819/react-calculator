import { useReducer } from 'react';

import Container from './components/Container/Container';
import Screen from './components/Screen/Screen';

import './index.css';
const App = () => {
  // const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
  //   reducer,
  //   {}
  // );

  return (
    <Container>
      <Screen />
    </Container>
  );
};

export default App;

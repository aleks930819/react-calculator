import { useReducer } from 'react';

import './index.css';

import Container from './components/Container/Container';
import Screen from './components/Screen/Screen';
import ButtonsContainer from './components/Buttons/ButtonsContainer';
import { reducer } from './reducer/reducer';

const App = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <Container>
      <Screen
        currentOperand={currentOperand}
        previousOperand={previousOperand}
      />
      <ButtonsContainer dispatch={dispatch} />
    </Container>
  );
};

export default App;

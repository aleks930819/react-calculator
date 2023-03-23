import './index.css';

import Container from './components/Container/Container';
import Screen from './components/Screen/Screen';
import ButtonsContainer from './components/Buttons/ButtonsContainer';
import CalculatorProvider from './context/CalculatorContext';

const App = () => {
  return (
    <CalculatorProvider>
      <Container>
        <Screen />
        <ButtonsContainer />
      </Container>
    </CalculatorProvider>
  );
};

export default App;

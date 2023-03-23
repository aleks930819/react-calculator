import { useReducer } from 'react';



import './index.css';
const App = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return <div className="App"></div>;
};

export default App;

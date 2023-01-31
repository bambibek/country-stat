import { createStore } from 'redux';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const storeAssembly = () => {
  const store = createStore(reducer, composeWithDevTools());
  return store;
};

export default storeAssembly;

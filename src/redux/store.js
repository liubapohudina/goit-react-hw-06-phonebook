import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
  contacts: [],
  filter: ""
}

const enhancer = devToolsEnhancer();

const reducer = (state = initialState) => {
    return state;
}

const store = createStore(reducer, enhancer);

export default store;
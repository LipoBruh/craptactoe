import { createStore } from 'redux';
import root_reducer from './root.reducer';

const store = createStore(root_reducer);
export default store;

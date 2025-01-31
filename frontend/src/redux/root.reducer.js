import { combineReducers } from 'redux';
import gameState_reducer from './gameState/gameState.reducer';
import gameData_reducer from './gameData/gameData.reducer';

const root_reducer = combineReducers({
  gameState: gameState_reducer,
  gameData: gameData_reducer,
});

export default root_reducer;

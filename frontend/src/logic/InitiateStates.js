import * as types from '../redux/gameState/gameState.actionTypes'
import store from '../redux/root.store';
import actions1 from "../redux/gameState/gameState.actions"
import actions2 from "../redux/gameData/gameData.actions"
import botSubscriber  from '../logic/Bot'
const init_offline_states = ()=>{
    //
    //the logic has to be implemented here because action generators are not 
    let myName = generate_myName()
    store.dispatch(actions1.gameState_init_generator(types.MODE1))
    store.dispatch(actions2.gameData_offline_init_generator(myName))
    botSubscriber()
    store.dispatch(actions2.gameData_get_generator())

}

const init_online_states = ()=>{
    store.dispatch(actions1.gameState_init_generator(types.MODE2))
    //store.dispatch(actions2.gameState_init_generator(payload))

}


function generate_myName(){
    const state = store.getState();
    let namePlayer = state.gameData.myName

    if(!namePlayer){
        namePlayer="player"
    }
    return namePlayer
}


export {
    init_offline_states,
    init_online_states
}
import store from "../redux/root.store";
import actions1 from "../redux/gameState/gameState.actions"
import actions2 from "../redux/gameData/gameData.actions"

const botClick = (id)=>{
    const state = store.getState(); 
    const symbol = symbolFX()
    //
    console.log(`bot playing ${id} with symbol ${symbol}`)
    //
    let name = state.gameData.myName
    store.dispatch(actions2.gameData_end_turn_generator(name)) //ends the turn
    store.dispatch(actions1.gameState_move_put_generator(id,symbol)) //updates state




}

function symbolFX(){
    const state = store.getState();
    if(state.gameData.turn){
        return ( (state.gameData.turn==state.gameData.player1.name)? (state.gameData.player1.symbol) : (state.gameData.player2.symbol) )
        }
    return null
    }


export default botClick;



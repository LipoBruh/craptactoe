//we need to know the following states:
// - who's turn is it
// - the state of the board
// - mapping between ids and board
import actions1 from "../redux/gameState/gameState.actions"
import actions2 from "../redux/gameData/gameData.actions"
import store from "../redux/root.store"
import * as types from '../redux/gameState/gameState.actionTypes'







const SquareClick = (id)=>{
    //
    const [row,col]= id;
    //step 1 : check if target is empty 
    if(isEmpty(row,col)){
        //step 2: check if my turn
        if(isMyTurn()){
        //step 3 : check if game is over
        if(!isGameFinished()){ 
            //step 4 : update local state 
            //console.log("on_going")
            const symbol = mySymbol() // fetch player appropriate symbol
            //console.log(symbol)
            if (symbol){
                //
                store.dispatch(actions2.gameData_end_turn_generator(null)) //ends the turn

                let final_state = store.dispatch(actions1.gameState_move_put_generator(id,symbol)) //updates state

                //console.log(id)
                //console.log(final_state)
                console.log(store.getState())
                //
                return true
                }
            }
        }
    }
    return false
}



//Helper function that returns a bool if the target in state.gameState.board is available
const isEmpty = (row,col)=>{
    //
    const state = store.getState();
    const board = state.gameState.board
    const value = board[row][col]
    //
    console.log(value)

    if (!value){
        return true
    }
    return false
}


//helper function that returns a bool if the state.gameState.turn indicates that
// the turn of the client player is now
const isMyTurn = ()=>{
    const state = store.getState();
    return (state.gameData.turn == state.gameData.myName)
}


//helper function that returns the symbol of the client player
const mySymbol=()=>{
    const state = store.getState();
    if(state.gameData.myName){
        if(state.gameData.player1.name){
            if (state.gameData.myName==state.gameData.player1.name){
                return state.gameData.player1.symbol
                }
            return state.gameData.player2.symbol
            }
        }
    return null
    }


//helper function that returns a bool if the state.gameStatus indicates that
// the game is over (a win has been found)
const isGameFinished = () =>{
    const state = store.getState();

    if(state.gameState.gameStatus==types.GAME_STATE1){
        return false
    }
    return true
}

export default SquareClick;
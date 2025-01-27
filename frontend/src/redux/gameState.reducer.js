import * as actions from './gameState.actionTypes'
const GAME_STATE1 = "ongoing"
const GAME_STATE2 = "finished"
const GAME_CONNECTION1 = "online"
const GAME_CONNECTION2 = "offline"



const initialGameState = {
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ],
    gameStatus: GAME_STATE1,
    connectionStatus: GAME_CONNECTION2
};



const newBoard = ([row1,row2,row3]) => {
    [row1,row2,row3]
}


const win = ([row1,row2,row3])=>{
    truth = win_row(row1) || win_row(row2) || win_row(row3) //all rows
    truth = truth || win_row([row1[0],row2[0],row3[0]]) //col1
    truth = truth || win_row([row1[1],row2[1],row3[1]]) //col2
    truth = truth || win_row([row1[2],row2[2],row3[2]]) //col3
    truth = truth || win_row([row1[0],row2[1],row3[2]]) //diag1
    truth = truth || win_row([row1[2],row2[1],row3[0]]) //diag2
    return truth

}

const win_row = ([a,b,c]) =>{
    return a == b && a == c
}



//returns an altered state
export default function reducer(state = initialGameState,action){
    //
    if (action.type==actions.GAME_PUT){
        if(state.gameStatus==GAME_STATE1 || state.connectivity ==GAME_CONNECTION1){
            row = action.payload.row
            col = action.payload.col
            //if board is empty at that pos
            if (!state.board[row][col]){
                //
                newBoard = newBoard(state.board)
                newBoard[row][col]=action.payload.symbol
                //
                gameStatus = win(newBoard)?GAME_STATE2:GAME_STATE1
                //
                return {
                    ...state,
                    board: newBoard,
                    gameStatus: gameStatus,
                };
            }
            else{
                return state
            }
        }
    }
    //
    else if (action.type==actions.GAME_GET){
        return state;
    }
    //
    else if (action.type==actions.GAME_SET){
        return {
            ...state,
            board: action.payload.board,
            gameStatus: win(newBoard)?GAME_STATE2:GAME_STATE1
        };
    }
    //verification of the connectivity should be elaborated here
    else if(action.type==actions.GAME_CONNECT){
        if(actions.payload.connectionStatus){
            return (
                {
                ...state,
                connection: GAME_CONNECTION1
                }
            )
        }
    }
    return state
}
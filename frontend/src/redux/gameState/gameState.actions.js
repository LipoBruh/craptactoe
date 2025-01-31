import * as actions from './gameState.actionTypes'

const gameState_move_put_generator = ([row,column], symbol) => (
    {
        type: actions.GAME_PUT,
        payload: {
            symbol : symbol,
            row : row ,
            col : column
        }
    }
)

const gameState_set_generator = (board) => (
    {
        type: actions.GAME_CONNECT,
        payload: {
            board : board
        }
    }
)

const gameState_connection_generator = (connection) => (
    {
        type: actions.GAME_CONNECT,
        payload: {
            connectionStatus : connection
        }
    }
)

const gameState_mode_put_generator = (mode) => (
    {
        type: actions.MODE_PUT,
        payload: {
            online : mode
        }
    }
)


export default {
    gameState_move_put_generator,
    gameState_set_generator,
    gameState_connection_generator,
    gameState_mode_put_generator

}
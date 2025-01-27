import * as actions from './gameState.actionTypes'

export const gameState_put_generator = ([row,column], symbol) => (
    {
        type: actions.GAME_PUT,
        payload: {
            symbol : symbol,
            row : row ,
            column : column
        }
    }
)

export const gameState_set_generator = (board) => (
    {
        type: actions.GAME_CONNECT,
        payload: {
            board : board
        }
    }
)

export const gameState_connection_generator = (connection) => (
    {
        type: actions.GAME_CONNECT,
        payload: {
            connectionStatus : connection
        }
    }
)
import * as types from './gameState.actionTypes'

const gameState_move_put_generator = ([row,column], symbol) => (
    {
        type: types.GAME_PUT,
        payload: {
            symbol : symbol,
            row : row ,
            col : column
        }
    }
)

const gameState_set_generator = (board) => (
    {
        type: types.GAME_CONNECT,
        payload: {
            board : board
        }
    }
)

const gameState_connection_generator = (connection) => (
    {
        type: types.GAME_CONNECT,
        payload: {
            connectionStatus : connection
        }
    }
)

const gameState_mode_put_generator = (mode) => (
    {
        type: types.MODE_PUT,
        payload: {
            online : mode
        }
    }
)

const gameState_init_generator = (mode) => (
    {
        type: types.INIT,
        payload: {
            board: [
                [null, null, null],
                [null, null, null],
                [null, null, null],
            ],
            gameStatus: types.GAME_STATE1,
            online: mode
        }
    }
)



export default {
    gameState_move_put_generator,
    gameState_set_generator,
    gameState_connection_generator,
    gameState_mode_put_generator,
    gameState_init_generator

}
import * as actionTypes from "./gameData.actionTypes";

export const gameData_set_generator = (data) => (
    {
        type: actionTypes.DATA_SET,
        payload: data
    }
)

export const gameData_myName_put_generator = (name) => (
    {
        type: actionTypes.NAME_PUT,
        payload: {
            myName : name
        }
    })


export const gameData_roomName_put_generator = (name) => (
    {
        type: actionTypes.ROOM_PUT,
        payload: {
            name : name
        }
    })

export const gameData_end_turn_generator = (name) => (
    {
        type: actionTypes.TURN_PUT,
        payload: {
            turn : name
        }
    })

    //requires the player name to
export const gameData_offline_init_generator = (myName) => (
    {
        type: actionTypes.INIT,
        payload: {
            myName:myName,
            turn: (Math.random() < 0.5 ? myName : "bot"),
            player1: {name:myName,id:null,symbol:"x"},
            player2: {name:"bot",id:null,symbol:"o"},
            room: {name:null,id:null},
        }
    })

export const gameData_get_generator = () => (
    {
        type: actionTypes.DATA_GET,
        payload: null
    }
)


export default {
    gameData_set_generator,
    gameData_myName_put_generator,
    gameData_roomName_put_generator,
    gameData_end_turn_generator,
    gameData_offline_init_generator,
    gameData_get_generator

}
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

export const gameData_end_turn_generator = () => (
    {
        type: actionTypes.TURN_PUT,
        payload: {
            turn : null
        }
    })

export default {
    gameData_set_generator,
    gameData_myName_put_generator,
    gameData_roomName_put_generator,
    gameData_end_turn_generator

}
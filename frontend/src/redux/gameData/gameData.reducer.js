import * as actionTypes from "./gameData.actionTypes";

const initialDataState = {
    myName:"null",
    turn: "null",
    player1: {name:"null",id:null,symbol:"x"},
    player2: {name:null,id:null,symbol:"o"},
    room: {name:null,id:null},
}



//returns an altered state - seems to act only as a setter based on conditions / action types
export default function gameData_reducer(state = initialDataState, action) {
    switch (action.type) {

        case actionTypes.DATA_SET:  //we want to overwrite all game data (except names)
            return {
                ...state,
                ...(action.payload || {}) 
            };

        case actionTypes.NAME_PUT:  //if player wants to change his name + updated p1/p2
        //
            if(state.player1.name==action.payload.myName){
                return {
                    ...state,
                    myName: action.payload.myName,
                    player1 : {...state.player1, name: action.payload.myName}
                };
            }
            else{
                return {
                    ...state,
                    myName: action.payload.myName,
                    player2 : {...state.player2, name: action.payload.myName}
                };
            }

        case actionTypes.ROOM_PUT:  //we want to overwrite room name
            return {
                ...state,
                room : {...state.room, name: action.payload.name}
            };

            case actionTypes.TURN_PUT:  //we want to overwrite room name
            return {
                ...state,
                turn : action.payload.name
            };

        default:
            return state;
    }
}

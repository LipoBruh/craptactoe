import store from "../redux/root.store";
import botClick from "./BotClick";

const botSubscriber = () => {
    //
    const state = store.getState(); 
    //
    store.subscribe(() => {
        //
        console.log(state.gameData.turn)
        //
        if (state.gameData.turn && state.gameData.turn === "bot") {
            console.log("Turn of the bot");
            play()
        }
    });
}

function play(){
    const state = store.getState(); 
    //
    let board = state.gameState.board
    let list = get_empty(board)
    //
    if (list.length<=0){
        console.log("no room on board")
        return
    }
    let random = Math.floor(Math.random() * list.length)
    //
    let id = list[random]
    botClick(id)
}


function get_empty(board){
    let list = []
    for (let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(!board[i][j]){
                list.push([i,j])
            }
        }
    }
    return list
}




export default botSubscriber;
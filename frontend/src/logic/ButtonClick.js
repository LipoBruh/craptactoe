import actions1 from "../redux/gameState/gameState.actions"
import store from "../redux/root.store"

const ButtonClick = (mode)=>{
    //
    store.dispatch(actions1.gameState_mode_put_generator(mode))

}

export default ButtonClick;
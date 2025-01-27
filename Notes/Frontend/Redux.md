# REDUX

#### Installation

`npm install @reduxjs/toolkit react-redux`

#### Notes

The store is the javascript object that holds the state, the actions are events and the reducer is the one choosing the modification to the stored based on the action / event.

Components can access the store / global state independently of their context.

Stores are immutable, so they need to be replaced by the reducer rather than modified. The reducer uses the action to update a state / store.

The Action / Event is created by the interface and sent to a centralized part of redux. It allows logging of each action.

The store uses its dispatch() method to forward the action to the reducer.

The reducer acts as the event handler : it gets its current store attribute and updates it without mutation and triggers UI refresh.


#### Ressources

https://www.youtube.com/watch?v=poQXNp9ItL4



## Reducers

```js
export default function reducer(state = [],action){

    if (action.type="type1"){
        return [
            ...state, //copying the content of the previous state
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ]
    }
    else if(action.type="type2"){
        return state.filter(e=>e.id!=action.payload.id)
    }
    return state
}
```


## Store


Create the store :

```js

import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer)
export default store;
```

The store has many properties that are quite useful :
- dispatch(action)
- subscribe(listener)
- getState()
- replaceReducer(reducer2)
- Symbol(observable)
Use the store:


```js
import store from './store';

/*Get the state with*/
store.getState()
/*Add an action to dispatch*/
store.dispatch({
    type:"action1",
    payload:{
        description: "lorem ipsum"
    }
})
/*Add a different type of action that will lead to a different consequence*/
store.dispatch({
    type:"action2",
    payload:{
        id: "21"
    }
})
/* The passed method will be called every time the store is updated  */
/* It also returns a method for unsubscribing, which is why it is stored here*/
const unsubscribe = store.subscribe(
    ()=>{console.log("state updated")}
)
```
## Action & Action types

Export your action types.
```js
//Action types in an action type file
export const ACTION_TYPE1 = "lorem ipsum"
export const ACTION_TYPE2 = "abcde"

```
Create an action and import your action types.
```js
import * as actions from './actionTypes'
//
export const action1 = (description) => ({ //custom actions can be dispatched by the store

    return {
        type: actions.ACTION_TYPE1,
        payload: {
            description
        }
    }
})
```

Import your action types.
```js
import * as actions from './actionTypes'
//
export default function reducer(state = [],action){
    //
    if (action.type = actions.ACTION_TYPE1){ //using the action type
        return [{/*...*/} ]
    }
    return state
}
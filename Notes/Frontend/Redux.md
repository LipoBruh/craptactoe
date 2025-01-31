# REDUX

#### Installation
`npm install redux` Old syntax
`npm install @reduxjs/toolkit react-redux` The toolkit uses the more recent syntax
`npm install redux-thunk`

#### Notes

The store is the javascript object that holds the state, the actions are events and the reducer is the one choosing the modification to the stored based on the action / event.

Components can access the store / global state independently of their context.

Stores are immutable, so they need to be replaced by the reducer rather than modified. The reducer uses the action to update a state / store.

The Action / Event is created by the interface and sent to a centralized part of redux. It allows logging of each action.

The store uses its dispatch() method to forward the action to the reducer.

The reducer acts as the event handler : it gets its current store attribute and updates it without mutation and triggers UI refresh.


#### Ressources
Basics:
https://www.youtube.com/watch?v=poQXNp9ItL4
toolkit:
https://www.youtube.com/watch?v=0awA5Uw6SJE&list=PLC3y8-rFHvwiaOAuTtVXittwybYIorRB3

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
There should be only be one store necessary to a project. It centralizes all of the states in one object. The reducer used in `createStore(reducer)` should be the root reducer, it being the reducer that wraps all of your smaller reducers.

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
```

## Thunks

Redux Thunk is a middleware that allows Redux action creators to return a function instead of just an action object. By default, Redux actions must be plain objects, they cannot handle async logic. This is fine only if data is immediately available, but API requests can induce delays. Thunk allow async operations and dispatch once data is acquired.

This enables asynchronous operations like:
- Fetching data from an API before dispatching an action.
- Performing side effects (logging, caching, etc.).
- Dispatching multiple actions in sequence.

Usage - We need to alter the store / createStore by passing a second argument:

```js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk)); //<- Here
export default store;
```



## Access the state 

Outside of react components:
```js
import store from "../redux/root.store"

const state = store.getState();
```


Inside of react components:
```js
import { useSelector } from 'react-redux';

const SquareClick = (id)=>{

    const user = useSelector(state => state.gameData.player1.name);

    return ({/* ...  */})
}
```


## Dispatch a state modification


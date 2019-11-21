import {createStore} from 'redux'

let reducer = (state, action)=>{
    // 做个深拷贝
    state = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'ADD_ADD': {
            state.list = action.payload
        } break;
        default: break;
    }

    return state;
}

let initialState = {
    list: [],
    cart: [{num: 100}, {num: 200}]
}

export default createStore(reducer, initialState);
//reducer
function todos(state=[],action) {
    if(action ==='ADD_TODO'){
        return state.concat([action.todo]);
    }
    return  state
}

function createStore() {
//    1 state
//    2 get state
//    3 listener
//    4 update
    let state;
    let listeners =[];
    const getState = ()=> state;
    const subscribe = listener =>{
        listeners.push(listener)
        return ()=>{
            listeners = listeners.filter((l)=> l !==listener)
        }
    };

    const dispatch = (action)=> {
        state = todos(state,action)
        listeners.forEach((listener)=>
            listener()
        )

    }


    return {
        getState,
        subscribe,
        dispatch
    }
}

const store = createStore();

store.subscribe(()=>{
    console.log("The new state",store.getState())
});

const unsubscribe = store.subscribe(()=>{
    console.log('The store changed');
});

store.subscribe(()=>{
    console.log('The store changed')
});
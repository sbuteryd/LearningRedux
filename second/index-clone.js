function createStore(reducer,action) {
//    1. state
//    2. get state
//    3. listener
//    4 updater
    let state;
    let listeners=[]
    const getState = ()=> state;
    const  subscribe = listener => {
        listener.push(listener)
        return ()=>{
            listeners.filter(l = l!== listener)
        }

    }

    const dispath = action =>{
        state = reducer(state.action)
        listeners.forEach( listener  => listener())
    }
    return{
        getState,
        subscribe,
        dispath
    }
}

function todos(state=[],action) {
    if(action ==='ADD_TODO'){
        return state.concat(todo)
    }
    return  state
}

const store = createStore(todos)


store.subscribe(()=>{
    console.log('The new state is',store.getState())
})


store.dispath(({
    type:'ADD_TODO',
    todo:{id:0,name:'learn_Redux',complete:false}
}))

const unsubscribe =  store.subscribe(()=>{
    console.log('The store change')
})
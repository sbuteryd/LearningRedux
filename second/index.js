// library code
function createStore(reducer) {
//    状态树需要4个部分
//    1. 状态
//    2. 获取状态
//    3. 监听状态
//    4. 更新状态
    let state;
    let listeners=[];
    const getState = ()=> state;

    const subscribe = listener =>{
        listeners.push(listener)
        return ()=>{
            listeners = listeners.filter(l => l !==listener)
        };
    };

    const dispatch = action =>{
        state = reducer(state,action);
        listeners.forEach(listener => listener());
    }
    return{
        getState,
        subscribe,
        dispatch
    }
}

// App code (reducer)
function todos(state=[],action) {
    if(action ==='ADD_TODO'){
        return state.concat([action.todo])
    }
    return  state
}


const store = createStore(todos);

store.subscribe(()=>{
    console.log('The new state is',store.getState())
});

store.dispatch(({
    type:'ADD_TODO',
    todo:{id:0,name:'Learn Redux',complete:false}
}))

const unsubscribe = store.subscribe(()=>{
    console.log('The store change')
});



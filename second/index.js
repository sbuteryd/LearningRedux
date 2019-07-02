// reducer
function todos(state=[],action) {
    if(action ==='ADD_TODO'){
        return state.concat([action.todo])
    }
    return  state
}

function createStore() {
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
    };
    return{
        getState,
        subscribe
    }
}

const store = createStore();

store.subscribe(()=>{
    console.log('The new state is',store.getState())
});

const unsubscribe = store.subscribe(()=>{
    console.log('The store change')
});
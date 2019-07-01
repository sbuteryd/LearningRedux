function createStorm() {
//    1 state
//    2 get state
//    3 listening state
//    4 update state
    let state;
    let listeners = [];
    const getState =()=> state;

    const subscribe = listener =>{
        listeners.push(listener)
        return()=>{
            listeners =listeners.filter(l=> l!== listener)
        }
    };

    return(
        getState,
        listeners
    )
}

const store = createStorm();

store.subscribe(()=>{
    console.log('The new state is',store.getState())
});

store.unsubscribe(()=>()=>{
    console.log('The store changed');
});

unsubscribe();

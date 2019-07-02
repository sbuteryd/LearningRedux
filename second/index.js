function store() {
//    状态树需要4个部分
//    1. 状态
//    2. 获取状态
//    3. 监听状态
//    4. 更新状态
    let state
    const getState = ()=> state;

    return{
        getState,
    }
}
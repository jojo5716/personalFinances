function reducer(state, action, reducerMap) {
    const isValidAction = reducerMap.indexOf(action.type) !== -1;

    return isValidAction ? {...state, ...action.payload} : state;
}

export default {
    reducer,
};

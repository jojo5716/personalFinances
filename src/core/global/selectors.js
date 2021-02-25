function getYear(state) {
    return state.globalReducer.year;
}

function getMonth(state) {
    console.log(state.globalReducer)
    return state.globalReducer.month;
}

export default {
    getMonth,
    getYear,
}
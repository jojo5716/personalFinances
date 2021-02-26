function getYear(state) {
    return state.globalReducer.year;
}

function getMonth(state) {
    return state.globalReducer.month;
}

export default {
    getMonth,
    getYear,
}
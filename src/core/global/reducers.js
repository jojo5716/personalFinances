import actions from '../../constants/actions';
import reducerHelper from '../../helpers/reducers';
import dateHelper from '../../helpers/date';


const today = new Date();
const initialState = {
    year: dateHelper.getCurrentYear(),
    month: dateHelper.getCurrentMonth(),
    monthName: dateHelper.getCurrentMonthName()
};

const reducerMap = [
    actions.SET_MONTH,
    actions.SET_YEAR,
];

export default (state = initialState, action) => {
    return reducerHelper.reducer(state, action, reducerMap);
}


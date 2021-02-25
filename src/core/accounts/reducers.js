import actions from '../../constants/actions';
import reducerHelper from '../../helpers/reducers';


const initialState = {
    accounts: [],
};

const reducerMap = [
    actions.SET_ACCOUNTS,
    actions.SET_SALARY,
];

export default (state = initialState, action) => {
    return reducerHelper.reducer(state, action, reducerMap);
}


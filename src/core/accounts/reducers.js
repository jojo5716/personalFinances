import actions from '../../constants/actions';
import reducerHelper from '../../helpers/reducers';


const initialState = {
    accounts: {
        data: null,
        error: null,
    },
};

const reducerMap = [
    actions.SET_ACCOUNTS,
];

export default (state = initialState, action) => {
    return reducerHelper.reducer(state, action, reducerMap);
}


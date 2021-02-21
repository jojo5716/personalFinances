import { GET_ACCOUNTS } from '../../constants/actions';
import reducerHelper from '../../helpers/reducers';


const initialState = {
    accounts: {
        data: null,
        error: null,
    },
};

const reducerMap = [
    GET_ACCOUNTS,
];

export default (state = initialState, action) => {
    return reducerHelper.reducer(state, action, reducerMap);
}


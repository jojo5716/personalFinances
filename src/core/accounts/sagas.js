import {
    fork,
    all,
    take,
} from 'redux-saga/effects';

import actions  from '../../constants/actions';


export default function* root() {
    yield all([
        fork(fetchAccounts),
    ]);
}

export function* fetchAccounts() {
    yield take(actions.GET_ACCOUNTS);

    console.log('Fetching accounts...');
}

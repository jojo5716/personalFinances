import {
    fork,
    all,
    take,
    takeEvery,
} from 'redux-saga/effects';

import actions  from '../../constants/actions';


export default function* root() {
    yield all([
        fork(fetchAccounts),
        fork(watcher),
    ]);
}

function* watcher() {
    yield takeEvery(actions.GET_ACCOUNTS, fetchAccounts);
}

function* fetchAccounts() {
    yield take(actions.GET_ACCOUNTS);

    console.log('Fetching accounts...');
}

import {
    all,
    fork,
    put,
    take,
    takeEvery,
} from 'redux-saga/effects';

import actions  from '../../constants/actions';
import api from '../../api';


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

    const accounts = yield api.getParsedData('accounts')

    yield put({
        type: actions.SET_ACCOUNTS,
        payload: {
            accounts: [
                ...accounts,
            ]
        },
    });
}


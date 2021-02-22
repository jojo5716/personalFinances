import {
    all,
    fork,
    put,
    take,
    takeEvery,
} from 'redux-saga/effects';

import actions  from '../../constants/actions';
import storeContants  from '../../constants/store';
import urlContants  from '../../constants/urls';
import apiStore from '../../api';


export default function* root() {
    yield all([
        fork(fetchAccounts),
        fork(createAccount),
        fork(watcher),
    ]);
}

function* watcher() {
    yield takeEvery(actions.GET_ACCOUNTS, fetchAccounts);
    yield takeEvery(actions.CREATE_ACCOUNT, createAccount);
}

function* fetchAccounts() {
    yield take(actions.GET_ACCOUNTS);

    const accounts = yield apiStore.getParsedData('accounts')

    yield put({
        type: actions.SET_ACCOUNTS,
        payload: {
            accounts: [
                ...accounts,
            ]
        },
    });
}

function* createAccount() {
    const { payload } = yield take(actions.CREATE_ACCOUNT);
    const currentAccounts = yield apiStore.getParsedData(storeContants.ACCOUNT_STORE_KEY, []);
    const { name, description, redirectCallback } = payload;
    
    currentAccounts.push({ name, description });

    yield apiStore.setObjectValue(storeContants.ACCOUNT_STORE_KEY, currentAccounts);
    yield put({
        type: actions.SET_ACCOUNTS,
        payload: {
            accounts: [
                ...currentAccounts,
            ]
        },
    });

    redirectCallback(urlContants.ACCOUNT_LIST_PATH);
}
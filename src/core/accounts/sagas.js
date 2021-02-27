import {
    all,
    fork,
    put,
    select,
    take,
    takeEvery,
} from 'redux-saga/effects';

import actions  from '../../constants/actions';
import storeContants  from '../../constants/store';
import urlContants  from '../../constants/urls';
import apiStore from '../../api';
import accountAPI from '../../api/account';
import globalSelectors from '../global/selectors';


export default function* root() {
    yield all([
        fork(fetchAccounts),
        fork(createAccount),
        fork(saveSalary),
        fork(watcher),
    ]);
}

function* watcher() {
    yield takeEvery(actions.GET_ACCOUNTS, fetchAccounts);
    yield takeEvery(actions.CREATE_ACCOUNT, createAccount);
    yield takeEvery(actions.SAVE_SALARY, saveSalary);
}

function* fetchAccounts() {
    yield take(actions.GET_ACCOUNTS);

    const accounts = yield apiStore.getParsedData('accounts', []);

    const currentYear = yield select(globalSelectors.getYear);
    const currentMonth = yield select(globalSelectors.getMonth);

    const accounts2 = new accountAPI();

    const accountApiList = yield accounts2.getAccounts(currentYear, currentMonth);
    console.log(accountApiList);

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
    const { name, description, redirectCallback } = payload;

    const accounts2 = new accountAPI();
    const currentAccounts = yield accounts2.getAccounts();
    // const currentAccounts = yield apiStore.getParsedData(storeContants.ACCOUNT_STORE_KEY, []);

    // yield apiStore.setObjectValue(storeContants.ACCOUNT_STORE_KEY, currentAccounts);

    const accountCreated = yield accounts2.createAccount(name, { name, description });
    currentAccounts.insert(0, accountCreated);

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

function* saveSalary() {
    const { payload } = yield take(actions.SAVE_SALARY);
    const accountSalaryKeyName = storeContants.ACCOUNT_SALARY_KEY(payload.accountName);
    yield apiStore.setStringValue(accountSalaryKeyName, payload.salary);

    yield put({
        type: actions.SET_SALARY,
        payload: {
            salary: payload.salary,
        },
    });

    payload.redirectCallback(urlContants.ACCOUNT_LIST_PATH);
}

function* getSalary() {
    const { payload } = yield take(actions.GET_SALARY);
    const accountSalaryKeyName = storeContants.ACCOUNT_SALARY_KEY(payload.accountName);

    yield apiStore.getData(accountSalaryKeyName);

    yield put({
        type: actions.SET_SALARY,
        payload: {
            salary: payload.salary,
        },
    });
}
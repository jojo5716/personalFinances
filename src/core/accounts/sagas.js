import {
    fork,
    all,
    take,
    takeEvery,
} from 'redux-saga/effects';

import { GET_ACCOUNTS } from '../../constants/actions';


export default function* root() {
    yield all([
        fork(fetchAccounts),
    ]);
}

/* export function* watcher() {
    yield takeEvery(GET_ACCOUNTS, fetchAccounts);
}
 */
export function* fetchAccounts() {
    yield take(GET_ACCOUNTS);

    console.log('Fetching accounts...');
}

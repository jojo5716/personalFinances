import {
    all,
    fork,
    put,
    take,
    takeEvery,
    select,
} from 'redux-saga/effects';

import actions  from '../../constants/actions';
import storeContants  from '../../constants/store';
import urlContants  from '../../constants/urls';
import apiStore from '../../api';
import globalSelectors from './selectors';


export default function* root() {
    yield all([
        fork(loadInitialData),
        fork(watcher),
    ]);
}

function* watcher() {
    yield takeEvery(actions.LOAD_INITIAL_DATA, loadInitialData);
}

function* loadInitialData() {
    yield take(actions.LOAD_INITIAL_DATA);

    // const accounts = yield apiStore.getParsedData('accounts');

    const currentYear = yield select(globalSelectors.getYear);
    const currentMonth = yield select(globalSelectors.getMonth);

    // console.log('currentYear: ', currentYear);
    // console.log('currentMonth: ', currentMonth);

}

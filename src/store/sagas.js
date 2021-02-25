
import { all } from 'redux-saga/effects';

import accountSagas from '../core/accounts/sagas';
import globalSagas from '../core/global/sagas';


export default function* sagas() {
    yield all([
        globalSagas(),
        accountSagas(),
    ]);
}
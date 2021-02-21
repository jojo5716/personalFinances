
import { all } from 'redux-saga/effects';

import accountSagas from '../core/accounts/sagas';


export default function* sagas() {
    yield all([
        accountSagas(),
    ]);
}
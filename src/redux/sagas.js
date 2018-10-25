import { all } from 'redux-saga/effects';
import TodoSaga from './todo/sagas'
export default function* rootSaga(getState) {
    yield all([
        TodoSaga(),
     ]);
    }
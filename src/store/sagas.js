import { put, takeEvery } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import axios from 'axios';
import { initListAction } from './actionCreators';

function* getInitList() {
    try{
        const res = yield axios.get('/list.json');
        const action = initListAction(res.data);
        yield put(action);
    } catch(e) {
        console.log('list.json网络请求失败');
    }

}

// generator 函数
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
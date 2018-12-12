import { routerRedux } from 'dva/router';
import queryString from 'query-string';

export default {
    namespace: 'counter',
    state: {
        count: 1
    },
    reducers: {
        add(state, action) {
            console.log(action);
            return {
                count: state.count + 1
            }
        }
    },
    effects: {
        *asyncAdd({ payload }, { call, put, select }) {
            // const counter = yield select(state => state.counter);
            // const counter = yield select(({ counter }) => counter);
            // const { counter } = yield select(_ => _);
            // console.log(co);
            yield put({ type: 'add' });
            yield put(routerRedux.push({
                pathname: '/',
                search: queryString.stringify({
                    name: 'zal'
                })
            }));
        }
    }
}
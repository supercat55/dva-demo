import { routerRedux } from "dva/router";
import queryString from "query-string";

export default {
  namespace: "counter",
  state: {
    count: 1
  },
  reducers: {
    add(state, action) {
      console.log(action);
      return {
        count: state.count + 1
      };
    }
  },
  /** 订阅数据源，根据条件dispatch需要的action, 数据源可以是当前的时间，服务器的websocket、keyboard输入、geolocation变化、history路由变化等 */
  subscriptions: {
    setup({ dispatch }) {
      window.onresize = () => {
        dispatch({ type: "add" });
      };
    },
    setupHistory({ dispatch, history }) {
      history.listen(location => {
        console.log(location);

        if (location.pathname === "/counter") {
          dispatch({ type: "add " });
        }
      });
    }
  },
  effects: {
    *asyncAdd({ payload }, { call, put, select }) {
      // const counter = yield select(state => state.counter);
      // const counter = yield select(({ counter }) => counter);
      // const { counter } = yield select(_ => _);
      // console.log(co);
      yield put({ type: "add" });
      yield put(
        routerRedux.push({
          pathname: "/",
          search: queryString.stringify({
            name: "zal"
          })
        })
      );
    }
  }
};

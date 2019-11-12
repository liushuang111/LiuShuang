
export default {
  //这就是相当于 state 命名空间
  namespace: 'num',

  state: {
    num:500
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
  //异步操作
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },
  //同步操作
  reducers: {
    changeNum(state, {payload:{type}}) {
      return { ...state,num:type==='+'?++state.num:--state.num };
    },
  },

};

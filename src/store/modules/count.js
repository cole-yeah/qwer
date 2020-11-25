const moduleCount = {
  state: () => ({
    count: 0
  }),
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {},
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  }
};

export default moduleCount;

import { createStore } from "vuex";
import count from "./modules/count";

const _createStore = () => {
  createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
      count
    }
  });
};

export default _createStore;

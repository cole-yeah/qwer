import { inject, provide } from "vue";
import { createStore } from "vuex";
import count from "./modules/count";

const _createStore = () => {
  return createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
      count
    }
  });
};

const StoreSymbol = Symbol("store");

export const provideStore = store => {
  provide(StoreSymbol, store);
};

export const useStore = () => {
  const store = inject(StoreSymbol);
  if (!store) {
    throw Error("no store provided");
  }
  return store;
};

export default _createStore;

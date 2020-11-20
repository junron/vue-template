import Vue from "vue";
import Vuex from "vuex";
import User from "@/types/user";

Vue.use(Vuex);

// Stores global state that you want to persist across all pages
const store = new Vuex.Store({
  state: {
    user: null
  } as {
    user: User | null;
  },
});

export default store;
